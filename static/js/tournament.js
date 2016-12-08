/**
 * 
 */

function getId(category) {
	var todayDate = new Date();
	var id = category + todayDate.getTime();
	return id; 
}

function goToGameMain() {
	var url = "";
	var gameId = $_GET('gameId');
	
	if (!gameId) {
		alert("게임정보가 존재하지 않습니다");
		url = "index.html";
	} else {
		url = "gameMain.html?gameId=" + $_GET('gameId');
	}	
	
	location.href = url;
}

function getTourStatus(gameId) {
	if (!gameId) {
		alert("게임정보가 존재하지 않습니다");
		return false;
	} 
	
	var Tour = Parse.Object.extend("Tournament");
	var query = new Parse.Query(Tour);
	query.contains("gameId", gameId);
	query.find({
		success: function(results) {

			var json = new Object();
			var jsonArr = [];

			for (var i = 0; i < results.length; i++) {
				var data = new Object();
				data.gameClass = results[i].get("class");
				data.level = results[i].get("level");
				data.gender = results[i].get("gender");
				data.stadium = results[i].get("stadium");
				data.teamCount = results[i].get("teamCount");
				data.tourId = results[i].get("tourId");
				jsonArr.push(data);
			}

			json.rows = jsonArr;
			var jsonData = JSON.stringify(json);
			var htmlTag = "<table id='TourStatusTable'></table><br><br><div id='MatchStatus'></div><br><br>";
			$("#GameGeneralInfoDetail").html(htmlTag);
			
			
			$('#TourStatusTable').jqGrid('setGridParam', {
				datatype : 'jsonstring',
				datastr : jsonData,
			}).trigger('reloadGrid');
			
			$("#TourStatusTable").jqGrid({
				datatype : 'jsonstring',
				datastr : jsonData,
				zIndex: 1,
				colModel: [{ label:'부', name: 'gameClass', align:"center", width:100 },
				           { label:'급', name: 'level', align:"center",width:50 },
				           { label:'성별', name: 'gender', align:"center",width:50 },
				           { label:'경기장', name: 'stadium', align:"center",width:300 },
				           { label:'팀수', name: 'teamCount', align:"center",width:50 },
				           { label:'투어ID', name: 'tourId', hidden:true },
				           ],
				           viewrecords: true,
				           rowNum: 10,
				           caption: '토너먼트 목록',
				           pager: '#jqGridPager',
				           jsonReader: {
				        	   root: 'rows'
				           },
				           loadComplete: function(){
				        	   //	console.log(jsonData);
				           },
				           onSelectRow: function(rowid, status, e) { 
				        	   var rowData = $(this).getRowData(rowid);
				        	   getTourMatchStatus(rowData.tourId);
				           }
			});
			
			$('#TourStatusTable').css('font-size','15px');
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function getTourMatchStatus(tourId) {
	
	var Match = Parse.Object.extend("Match");
	var query = new Parse.Query(Match);
	query.contains("tourId", tourId);
	query.ascending("matchId");
	query.find({
		success: function(results) {
			var lastSeq = results[results.length - 1].get("matchSeq");
			var htmlTag = "";
			
			for(var matchSeq=1; matchSeq<=lastSeq; matchSeq++) {
				if(matchSeq == lastSeq) {
					htmlTag += "<b>결승전</b><br>";
				}else if(matchSeq == lastSeq - 1) {
					htmlTag += "<b>준결승전</b><br>";
				} else {
					htmlTag += "<b>" + matchSeq + "차전</b><br>";
				}
				
				htmlTag += "<table id='GameStatusByClub' border='1'>";
				
				htmlTag += "<tr>";
				htmlTag += "<th>경기번호</th>";
				htmlTag += "<th colspan='3'>매치</th>";
				htmlTag += "<th>스코어</th>";
				htmlTag += "<th>승리팀</th>";
				htmlTag += "<th>경기장</th>";
				htmlTag += "<th>경기일자</th>";
				htmlTag += "<th>경기시간</th>";
				htmlTag += "</tr>";
				
				for(var m=0; m<results.length; m++) {
					
					if(matchSeq == results[m].get("matchSeq")) {
						htmlTag += "<tr>";
						htmlTag += "<td>" + results[m].get("matchId") + "</td>";
						
						if ( !results[m].get("winner")) {
							htmlTag += "<td id='teamA'>" + results[m].get("teamA") + "</td>";
						} else {
							if ( results[m].get("teamA") == results[m].get("winner")) {
								htmlTag += "<td id='teamA'><b><font color='blue'>" + results[m].get("teamA") + "</font></b></td>";
							} else {
								htmlTag += "<td id='teamA'><b><font color='red'>" + results[m].get("teamA") + "</font></b></td>";
							}
						}
						
						htmlTag += "<td id='vs'>VS</td>";
						
						if ( !results[m].get("winner")) {
							htmlTag += "<td id='teamB'>" + results[m].get("teamB") + "</td>";
						} else {
							if ( results[m].get("teamB") == results[m].get("winner")) {
								htmlTag += "<td id='teamB'><b><font color='blue'>" + results[m].get("teamB") + "</font></b></td>";
							} else {
								htmlTag += "<td id='teamB'><b><font color='red'>" + results[m].get("teamB") + "</font></b></td>";
							}
						}
						
						htmlTag += "<td>" + results[m].get("teamAscore") + ' : ' + results[m].get("teamBscore") + "</td>";
						htmlTag += "<td>" + results[m].get("winner") + "</td>";
						htmlTag += "<td>" + results[m].get("area") + "</td>";
						htmlTag += "<td>" + results[m].get("matchDate") + "</td>";
						htmlTag += "<td>" + results[m].get("beginTime") + ' ~ ' + results[m].get("endTime") + "</td>";
						htmlTag += "</tr>";
					}
				}
				htmlTag += "</table><br>";
			}
			
			$("#MatchStatus").html(htmlTag);
			$("#MatchStatus tbody tr").sortable();
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
	
	
}

function getGameStatusByClub(gameId) {
	if (!gameId) {
		alert("게임정보가 존재하지 않습니다");
		return false;
	} 
	
	var TourMember = Parse.Object.extend("TourMember");
	var query = new Parse.Query(TourMember);
	query.equalTo("gameId", gameId);
	query.ascending("clubName","memberName");
	query.find({
		success: function(results) {
			var htmlTag = "<b>클럽별 출전현황</b>";
			htmlTag += "<table id='GameStatusByClub' border='1'>";
			
			htmlTag += "<tr>";
			htmlTag += "<th width='200px'>클럽명</th>";
			htmlTag += "<th width='100px'>선수명</th>";
			htmlTag += "<th width='50px'>나이</th>";
			htmlTag += "<th width='50px'>성별</th>";
			htmlTag += "<th width='200px'>연락처</th>";
			htmlTag += "</tr>";
			
			console.log(results.length);
			for(var i=0; i<results.length; i++) {
				htmlTag += "<tr>";
				htmlTag += "<td>" + results[i].get("clubName") + "</td>";
				htmlTag += "<td>" + results[i].get("memberName") + "</td>";
				htmlTag += "<td>" + results[i].get("age") + "</td>";
				htmlTag += "<td>" + results[i].get("gender") + "</td>";
				htmlTag += "<td>" + results[i].get("mobile") + "</td>";
				htmlTag += "</tr>";
			}
			htmlTag += "</table><br><br>";
			$("#GameGeneralInfoDetail").html(htmlTag);
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function getGameStatusByClass(gameId) {
	if (!gameId) {
		alert("게임정보가 존재하지 않습니다");
		return false;
	}
	
	console.log("현재" + Parse.User.current());
	
	var Game = Parse.Object.extend("Game");
	var query = new Parse.Query(Game);
	query.equalTo("gameId", gameId);
	query.find({
		success: function(results) {
			var htmlTag = "<b>부별 출전현황</b>";		
			var classArr = results[0].get("class");
			var genderArr = results[0].get("gender");
			var levelArr = results[0].get("level");
						
			$('#gameName').html(results[0].get("gameName"));
			$('#owner').html(results[0].get("owner"));
			$('#region').html(results[0].get("region"));
			$('#gamePeriod').html(results[0].get("beginDate") + " ~ " + results[0].get("endDate"));
			$('#class').html("");
			$('#level').html("");
			$('#gender').html("");
			
			if(results[0].get("poster")) {
				$('#poster').html("<img src='" + results[0].get("poster")._url + "'>" );
			}
			
			for(var i=0; i<classArr.length; i++) {
				$('#class').append(classArr[i]);
				if(i < classArr.length -1) {
					$('#class').append(', ');
				}
			}
			
			for(var i=0; i<levelArr.length; i++) {
				$('#level').append(levelArr[i]);
				if(i < levelArr.length -1) {
					$('#level').append(', ');
				}
			}
			
			for(var i=0; i<genderArr.length; i++) {
				$('#gender').append(genderArr[i]);
				if(i < genderArr.length -1) {
					$('#gender').append(', ');
				}
			}
			
			//부
			htmlTag += "<table>";
			for(var c=0; c<classArr.length; c++) {
				
				if(c%2 == 0) {
					htmlTag += "<tr>";
				}
				
				htmlTag += "<td id='GameStatusTable'>" + classArr[c] + "<table id='GameStatusByClass' border='1'>";
				
				//성별
				for(var g=0; g<=genderArr.length+1; g++) {
					htmlTag += "<tr>";
					
					//급
					for(var l=0; l<=levelArr.length; l++) {
						if(g==0) {
							if(l<levelArr.length) {
								if(l==0) {
									htmlTag += "<th>구분</th>";
								}
								htmlTag += "<th>" + levelArr[l] + "</th>";
							} else if(l=levelArr.length) {
								htmlTag += "<th>팀수</th>";
							}
						} else if( g!=0 && g<=genderArr.length){
							var g1 = g-1;
							if(l<levelArr.length) {
								if(l==0) {
									htmlTag += "<th><b>" + genderArr[g1] + "</b></th>";
								}
								htmlTag += "<td id='" + c + "_" + l + "_" + g1 + "'>" + 0 + "</td>";
							} else if(l=levelArr.length) {
								htmlTag += "<td bgcolor='#EAEAEA' id='" + c + "_" + g1 + "_gsum'>" + 0 + "</td>";
							}
						} else if(g == genderArr.length+1) {
							if(l<levelArr.length) {
								if(l==0) {
									htmlTag += "<th><b>계</b></th>";
								}
								htmlTag += "<td bgcolor='#EAEAEA' id='" + c + "_" + l + "_lsum'>" + 0 + "</td>";
							} else if(l=levelArr.length) {
								htmlTag += "<td bgcolor='#CEFBC9' id='" + c + "_csum'>" + 0 + "</td>";
							}
						}
					}
					htmlTag += "</tr>";
				}
				htmlTag += "</table></td>";
				
				if(c%2 != 0) {
					htmlTag += "</tr>";
				}
			}
			htmlTag += "</table><br><br>";
			
			$("#GameGeneralInfoDetail").html(htmlTag);
			
			//참가팀수 Binding
			var Tournament = Parse.Object.extend("Tournament");
			var query = new Parse.Query(Tournament);
			query.equalTo("gameId", gameId);
			query.find({
				success: function(tourList) {
					for(var t=0; t<tourList.length; t++) {
						
						var teamCountId = classArr.indexOf(tourList[t].get("class")) + "_" 
						+ levelArr.indexOf(tourList[t].get("level")) +"_"
						+ genderArr.indexOf(tourList[t].get("gender"));
						
						var classSumId = classArr.indexOf(tourList[t].get("class")) + "_csum"; 
						
						var genderSumId = classArr.indexOf(tourList[t].get("class")) + "_" 
						+ genderArr.indexOf(tourList[t].get("gender")) + "_gsum";
						
						var levelSumId = classArr.indexOf(tourList[t].get("class")) + "_" 
						+ levelArr.indexOf(tourList[t].get("level")) + "_lsum";
												
						//html 상의 class_level_gender ID에 teamCount입력.
						$("#" + teamCountId).html(tourList[t].get("teamCount")); //class + level + gender의 조합으로 1개의 토너먼트만 존재한다는 가정하에.
						
						//class별 팀수sum에 기존값 + 신규값 
						var classSum = parseInt($("#" + classSumId).html()) + parseInt(tourList[t].get("teamCount"));
						$("#" + classSumId).html(classSum);
						
						//gender별 팀수sum에 기존값 + 신규값 
						var genderSum = parseInt($("#" + genderSumId).html()) + parseInt(tourList[t].get("teamCount"));
						$("#" + genderSumId).html(genderSum);
						
						//level별 팀수sum에 기존값 + 신규값 
						var levelSum = parseInt($("#" + levelSumId).html()) + parseInt(tourList[t].get("teamCount"));
						$("#" + levelSumId).html(levelSum);
					}
					
				},
				error: function(error) {
					alert("Error: " + error.code + " " + error.message);
				}
			});
			
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function createGame() {
	var gameName = $("#gameName").val();
	var owner = $("#owner").val();
	var region = $("#region").val();
	var beginDate = $("#beginDate").val();
	var endDate = $("#endDate").val();
	var genderArr = ["남복","여복","혼복"];
	
	if ( gameName == "" || owner == "" || beginDate == "" || endDate == "" ) {
		alert("잘좀 입력하세요");
		return;
	}
	
	wrapWindowByMask();
	
	var classArr = [];
	var classCnt = 20;
	
	while (classCnt <= 60) {
		if ($("#class" + classCnt).is(':checked')) {
			classArr.push($("#class" + classCnt).val());
		}
		classCnt += 10;
	}

	var levelArr = [];
	var levelCnt = 1;
	
	while (levelCnt <= 6) {
		if ($("#level" + levelCnt).is(':checked')) {
			levelArr.push($("#level" + levelCnt).val());
		}
		levelCnt++;
	}
	
	console.log(classArr);
	console.log(levelArr);
	
	var Game = Parse.Object.extend("Game");
	var game = new Game();
	
	var gameId = getId("game");
	
	game.set("gameId", gameId);
	game.set("owner", owner);
	game.set("region", region);
	game.set("gameName", gameName);
	game.set("beginDate", beginDate);
	game.set("endDate", endDate);
	game.set("class", classArr);
	game.set("level", levelArr);
	game.set("gender", genderArr);
	
	game.save(null, {
		success: function(objs) {
			alert("대회생성 성공!");
			closeWindowByMask();
			window.location.reload();
		},
		error: function(error) {
			console.log(error);
			closeWindowByMask();
		}
	});
}

function getGameList() {
	wrapWindowByMask();
	var gameName = $("#gameName").val();
	
	var Game = Parse.Object.extend("Game");
	var query = new Parse.Query(Game);
	query.contains("gameName", gameName);
	
	query.find({
		success: function(results) {
			
			var json = new Object();
			var jsonArr = [];

			for (var i = 0; i < results.length; i++) {
				var data = new Object();
				data.gameId = results[i].get("gameId");
				data.gameName = results[i].get("gameName");
				data.region = results[i].get("region");
				data.owner = results[i].get("owner");
				data.beginDate = results[i].get("beginDate");
				data.endDate = results[i].get("endDate");
				jsonArr.push(data);
			}
			json.rows = jsonArr;
			showGameListGrid(JSON.stringify(json));
		},
		error: function(error) {
			closeWindowByMask();
			alert("Error: " + error.code + " " + error.message);
			
		}
	});
}

function showGameListGrid(jsonData) {
	console.log(jsonData);
	$('#GameList').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');	

	$("#GameList").jqGrid({
		datatype : 'jsonstring',
		datastr : jsonData,
		zIndex: 1,
		colModel: [{ label:'대회ID', name: 'gameId', hidden:true},
		           { label:'대회명', name: 'gameName', width:300, align:"center",formatter: linkGameDetail },
		           { label:'지  역', name: 'region', width:50, align:"center" },
		           { label:'개최자', name: 'owner', width:100, align:"center" },
		           { label:'개최일', name: 'beginDate', width:100, align:"center" },
		           { label:'종료일', name: 'endDate', width:100, align:"center" },
		           ],
		           viewrecords: true,
		           width: 1000,
//		           height: 250,
		           rowNum: 30,
		           caption: '대회 검색결과',
		           pager: '#jqGridPager',
		           jsonReader: {
		        	   root: 'rows'
		           },
		           loadComplete: function(){
		        	   //	console.log(jsonData);
		           },
		           onSelectRow: function(rowid, status, e) { 
//		        	   var rowData = $(this).getRowData(rowid);
//		        	   getTourMemberList(rowData.tourId);
//		        	   getTourMatchList(rowData.tourId);
		           }
	});
	
	$('#GameList').css('font-size','15px');
	
	closeWindowByMask();
}

function linkGameDetail(cellval, options, rowObject) {
	var url = "gameMain.html?gameId=" + rowObject.gameId;
	return "<a href='" + url + "' style='text-decoration:blink;'>" + cellval + "</a>";
}

function createNewTour() {
	var tourName = $("#tourName").val();
	var memberCnt = $("#memberCnt").val();
	var beginDate = $("#beginDate").val();
	var endDate = $("#endDate").val();
	
	if ( tourName == "" || memberCnt == "" || beginDate == "" || endDate == "" ) {
		alert("잘좀 입력하세요");
		return;
	}
	
	var byeCnt = getByeCnt(memberCnt);
	var seqArr = getSeqCnt(memberCnt, byeCnt);
	var todayDate = new Date();
	var tourId = "tour" + todayDate.getTime();
	
	var Tournament = Parse.Object.extend("Tournament");
	var tournament = new Tournament();
	tournament.set("tourId", tourId);
	tournament.set("tourName", tourName);
	tournament.set("beginDate", beginDate);
	tournament.set("endDate", endDate);
	
	tournament.save(null, {
		success: function(objs) {

		},
		error: function(error) {
			console.log(error);
		}
	});

	var matchDetail = Parse.Object.extend("MatchDetail");
	var matchDetailArr = [];
	var matchId = 1;
	
	console.log(seqArr);

	for(var x=0; x<seqArr.length; x++) {
		for(var y=0; y<seqArr[x][1]; y++) {
			var match = new matchDetail();
			match.set("tourId",tourId);
			match.set("matchSeq",seqArr[x][0]);
			
			
			if (x == seqArr.length-1) {
//				match.set("matchId",999999);
				match.set("matchId",matchId++);
			} else {				
				match.set("matchId",matchId++);
			}
			
			matchDetailArr.push(match);
		}
	}
	
	Parse.Object.saveAll(matchDetailArr, {
		success: function(objs) {
			// objects have been saved...
			alert("생성 완료!");
			console.log("success");
		},
		error: function(error) { 
			// an error occurred...
			console.log(error);
		}
	});
}



function getByeCnt(memberCnt) {
	var square = 0;
	var count=null;
	
	while (square < memberCnt) {
		if ( count == 0) {
			count = 1;
		} else {
			count *= 2;
		}
		square = count * 2;
	}
	return square - memberCnt;
}



function getSeqCnt(memberCnt, byeCnt) {
	var matchSeq=1;
	var resultArr = [];

	while(memberCnt > 1) {
		
		if (matchSeq == 1) {			
			memberCnt = (memberCnt - byeCnt);
		} else if (matchSeq == 2) {
			memberCnt = (memberCnt / 2) + byeCnt;
		} else {
			memberCnt = memberCnt / 2;
		}
		
//		var cnt = zeroPad(memberCnt,3);
//		
//		console.log(cnt);
		var result = [matchSeq, memberCnt];
		resultArr.push(result);
		
		matchSeq++;
	}
	return resultArr;
}