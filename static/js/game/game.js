var g_matchRuleDB;
/*= [
		// 2명일때
		[ [ 1, 2, 1 ] ],

		// 3명일때
		[ [ 1, 2, 1 ], [ 101, 3, 2 ] ],

		// 4명일때
		[ [ 1, 2, 1 ], [ 3, 4, 1 ], [ 101, 102, 2 ] ],

		// 5명일때
		[ [ 1, 2, 1 ], [ 101, 3, 2 ], [ 4, 5, 2 ], [ 102, 103, 3 ] ],

		// 6명일때
		[ [ 1, 2, 1 ], [ 4, 5, 1 ], [ 101, 3, 2 ], [ 102, 6, 2 ],
				[ 103, 104, 3 ] ],

		// 7명일때
		[ [ 1, 2, 1 ], [ 3, 4, 1 ], [ 5, 6, 1 ], [ 101, 102, 2 ],
				[ 103, 7, 2 ], [ 104, 105, 3 ] ],

		// 8명일때
		[ [ 1, 2, 1 ], [ 3, 4, 1 ], [ 5, 6, 1 ], [ 7, 8, 1 ], [ 101, 102, 2 ],
				[ 103, 104, 2 ], [ 105, 106, 3 ] ],

		// 9명일때
		[ [ 1, 2, 1 ], [ 101, 3, 2 ], [ 4, 5, 2 ], [ 6, 7, 2 ], [ 8, 9, 2 ],
				[ 102, 103, 3 ], [ 104, 105, 3 ], [ 106, 107, 4 ] ],

		// 10명일때
		[ [ 1, 2, 1 ], [ 6, 7, 1 ], [ 101, 3, 2 ], [ 4, 5, 2 ], [ 102, 8, 2 ],
				[ 9, 10, 2 ], [ 103, 104, 3 ], [ 105, 106, 3 ], [ 107, 108, 4 ] ],

		// 11명일때
		[ [ 1, 2, 1 ], [ 4, 5, 1 ], [ 7, 8, 1 ], [ 101, 3, 2 ], [ 102, 6, 2 ],
				[ 103, 9, 2 ], [ 10, 11, 2 ], [ 104, 105, 3 ], [ 106, 107, 3 ],
				[ 108, 109, 4 ] ],
		
			
		// 12명일때
		[ [ 1, 2, 1 ], [ 4, 5, 1 ], [ 7, 8, 1 ], [ 10, 11, 1 ], [ 101, 3, 2 ],
				[ 102, 6, 2 ], [ 103, 9, 2 ], [ 104, 12, 2 ], [ 105, 106, 3 ],
				[ 107, 108, 3 ], [ 109, 110, 4 ] ],

			1,2,1,0,0,////4,5,1,0,0,////7,8,1,0,0///,10,11,1,0,0,///101,3,2,0,0,///102,6,2,0,0,
			103,9,2,0,0,///104,12,2,0,0///,105,106,3,0,0///,107,108,3,0,0///,109,110,4,0,0

		// 13명일때
		[ [ 1, 2, 1 ], [ 3, 4, 1 ], [ 5, 6, 1 ], [ 8, 9, 1 ], [ 11, 12, 1 ],
				[ 101, 102, 2 ], [ 103, 7, 2 ], [ 104, 10, 2 ], [ 105, 13, 2 ],
				[ 106, 107, 3 ], [ 108, 109, 3 ], [ 110, 111, 4 ] ],

			1,2,1,0,0   /////,101,4,1,0,0/////,102,6,1,0,0,////8,9,1,0,0/////,11,12,1,0,0/////
			,103,7,2,0,0/////,104,10,2,0,0////,105,13,2,0,0,///106,107,3,0,0,////108,109,3,0,0,///109,110,4,
			
		// 14명일때
		[ [ 1, 2, 1 ], [ 3, 4, 1 ], [ 5, 6, 1 ], [ 8, 9, 1 ], [ 10, 11, 1 ],
				[ 12, 13, 1 ], [ 101, 102, 2 ], [ 103, 7, 2 ], [ 104, 105, 2 ],
				[ 106, 14, 2 ], [ 107, 108, 3 ], [ 109, 110, 3 ],
				[ 111, 112, 4 ] ],

		// 15명일때
		[ [ 1, 2, 1 ], [ 3, 4, 1 ], [ 5, 6, 1 ], [ 7, 8, 1 ], [ 9, 10, 1 ],
				[ 11, 12, 1 ], [ 13, 14, 1 ], [ 101, 102, 2 ], [ 103, 104, 2 ],
				[ 105, 106, 2 ], [ 107, 15, 2 ], [ 108, 109, 3 ],
				[ 110, 111, 3 ], [ 112, 113, 4 ] ],

		// 16명일때
		[ [ 1, 2, 1 ], [ 3, 4, 1 ], [ 5, 6, 1 ], [ 7, 8, 1 ], [ 9, 10, 1 ],
				[ 11, 12, 1 ], [ 13, 14, 1 ], [ 15, 16, 1 ], [ 101, 102, 2 ],
				[ 103, 104, 2 ], [ 105, 106, 2 ], [ 107, 108, 2 ],
				[ 109, 110, 3 ], [ 111, 112, 3 ], [ 113, 114, 4 ] ],

		// 17명일때
		[ [ 1, 2, 1 ], [ 101, 3, 2 ], [ 4, 5, 2 ], [ 6, 7, 2 ], [ 8, 9, 2 ],
				[ 10, 11, 2 ], [ 12, 13, 2 ], [ 14, 15, 2 ], [ 16, 17, 2 ],
				[ 102, 103, 3 ], [ 104, 105, 3 ], [ 106, 107, 3 ],
				[ 108, 109, 3 ], [ 110, 111, 4 ], [ 112, 113, 4 ],
				[ 114, 115, 5 ] ],

		// 18명일때
		[ [ 1, 2, 1 ], [ 10, 11, 1 ], [ 101, 3, 2 ], [ 4, 5, 2 ], [ 6, 7, 2 ],
				[ 8, 9, 2 ], [ 102, 12, 2 ], [ 13, 14, 2 ], [ 15, 16, 2 ],
				[ 17, 18, 2 ], [ 103, 104, 3 ], [ 105, 106, 3 ],
				[ 107, 108, 3 ], [ 109, 110, 3 ], [ 111, 112, 4 ],
				[ 113, 114, 4 ], [ 115, 116, 5 ] ],

		// 19명일때
		[ [ 1, 2, 1 ], [ 6, 7, 1 ], [ 11, 12, 1 ], [ 101, 3, 2 ], [ 4, 5, 2 ],
				[ 102, 8, 2 ], [ 9, 10, 2 ], [ 103, 13, 2 ], [ 14, 15, 2 ],
				[ 16, 17, 2 ], [ 18, 19, 2 ], [ 104, 105, 3 ], [ 106, 107, 3 ],
				[ 108, 109, 3 ], [ 110, 111, 3 ], [ 112, 113, 4 ],
				[ 114, 115, 4 ], [ 116, 117, 5 ] ],

		// 20명일때
		[ [ 1, 2, 1 ], [ 6, 7, 1 ], [ 11, 12, 1 ], [ 16, 17, 1 ],
				[ 101, 3, 2 ], [ 4, 5, 2 ], [ 102, 8, 2 ], [ 9, 10, 2 ],
				[ 103, 13, 2 ], [ 14, 15, 2 ], [ 104, 18, 2 ], [ 19, 20, 2 ],
				[ 105, 106, 3 ], [ 107, 108, 3 ], [ 109, 110, 3 ],
				[ 111, 112, 3 ], [ 113, 114, 4 ], [ 115, 116, 4 ],
				[ 117, 118, 5 ] ] ];
*/

var RuleDBList;
var artmp2;
var artmp;
var arMatchCntList;

var real = -1; // 큐의 입력 위치 
var seq = 0;
var matcnt = 1;

function q_push(a,b,c) {

	if (real == 100 - 1) { 
	}
	else
	{
		real++;
		RuleDBList[real][0] = a;
		RuleDBList[real][1] = b;
		RuleDBList[real][2] = c;
	}

}
//function printQueue() {
//	int i;
//	for (i = 0; i <= real; i++) {
//		printf(" %d %d %d \n", RuleDBList[i][0], RuleDBList[i][1], RuleDBList[i][2]);
//	}
//	printf("\n");
//}

function recur(iPlaynum, start, end, d, sq)
{
	
	iPlaynum = end - start;
	
	if (end - start > 2)
	{
		var pivot = 0;
		if (iPlaynum % 2 == 0)
		{
			pivot = iPlaynum / 2;
			recur(pivot, start, start + pivot, d + 1, sq);
			recur(pivot, end - pivot, end, d + 1, sq);
		}
		else
		{
			pivot = Math.floor(iPlaynum / 2 + 1);
			recur(pivot, start, start + pivot, d + 1, sq);
			recur(pivot, end - pivot + 1, end, d + 1, sq);
		}
	}
	else
	{
		//console.log("matcnt : " + matcnt);
		artmp2[matcnt - 1][0] = arMatchCntList[start];
	
		artmp2[matcnt - 1][2] = seq - d + 1;
		artmp2[matcnt - 1][3] = seq - d + 1;
		if (end - start == 2 && d == sq) {
			artmp2[matcnt - 1][1] = arMatchCntList[start + 1];
			artmp2[matcnt - 1][3] = seq - d;
		}
		else if (end - start == 2 && d != sq) {
			artmp2[matcnt - 1][1] = arMatchCntList[start + 1];
		}
		else {
			artmp2[matcnt - 1][1] = 0;
		}

		if (artmp2[matcnt - 1][1] == 0)
			artmp2[matcnt - 1][1] = arMatchCntList[start];

		matcnt++;
	}
}

function makeMatchRule(iPlayerNum)
{
	//int iPlayerNum = 20;

	
	var iCnt = 0;
	//var matcnt = 0;
	var iCount = 0;
	var t = 1;
	
	
	
	if(seq == 0)
	{
		arMatchCntList = new Array(100);
		RuleDBList = new Array(100);
		artmp2 = new Array(100);
		artmp = new Array(100);
		
		for(t = 0; t< 100; t++)
		{
			RuleDBList[t] = new Array(5);
			artmp2[t] = new Array(5);
			artmp[t] = new Array(5);
		}
	}
	
	
	
	for(t = 0; t< 100; t++)
	{
		arMatchCntList[t] = 0;
		for(var w = 0; w< 5; w++)
		{
			RuleDBList[t][w] = 0;
			artmp2[t][w] = 0;
			artmp[t][w] = 0;
		}
	}
	
	real = -1; // 큐의 입력 위치 
	
	t = 1;
	seq = 0;
	while (t <= iPlayerNum)
	{
		t = t * 2;
		seq++;
	}
	t /= 2;
	
	//console.log("seq : " + seq + " iPlayerNum : " + iPlayerNum);

	for (iCnt = 0; iCnt < iPlayerNum; iCnt++)
	{
		arMatchCntList[iCnt] = iCnt + 1;
	}
	
	
	matcnt = 1;
	//
	//console.log("iPlayerNum : \n" + iPlayerNum + " seq : \n" + seq );
	//console.log("matcnt = " + matcnt);
	recur(iPlayerNum, 0, iPlayerNum, 1, seq);

	

	matcnt = 0;
	iCount = 0;

	for (iCnt = 0; iCnt < iPlayerNum; iCnt++)
	{
		//first 부전경기
		if ((artmp2[iCnt][3] == 0 && artmp2[iCnt][0] != 0  ))
		{
			artmp[matcnt][0] = artmp2[iCnt][0];
			artmp[matcnt][1] = artmp2[iCnt][1];
			artmp[matcnt][2] = iCount;
			if (artmp2[iCnt+1][3] != 0)
				artmp2[iCnt + 1][0] = 100 + matcnt + 1;
			matcnt++;

			q_push(artmp2[iCnt][0], artmp2[iCnt][1], 1);
		}
	}
	//console.log("artmp2 : \n" + artmp2);
	//console.log("RuleDBList : \n" + RuleDBList);

	var asd = 1;
	var iCount = 0;

	for (iCnt = 0; iCnt < iPlayerNum; iCnt++)
	{
		//first 부전경기
		if(iPlayerNum == 15)
			iCount = iCnt;
		
		if ((artmp2[iCnt][3] != 0 && artmp2[iCnt][0] != 0))
		{
			artmp[matcnt][0] = artmp2[iCnt][0];
			artmp[matcnt][1] = artmp2[iCnt][1];
			artmp[matcnt][2] = 1;
			matcnt++;
			iCount++;
			q_push(artmp2[iCnt][0], artmp2[iCnt][1], 2);
			
			//console.log("일반 부전 artmp2123123 : "+asd+" " + iCnt + "\n" + artmp2);
			//console.log("RuleDBList123123 : \n" + RuleDBList);
			//asd++;
		}
		else if ((artmp2[iCnt][3] == 0 && artmp2[iCnt+1][3] == 0  && artmp2[iCnt][0] != 0))
		{
		
			artmp[matcnt][0] = iCount+101;
			artmp[matcnt][1] = iCount+1+101;
			artmp[matcnt][2] = 1;
			iCount++;
//			artmp2[iCnt][0] = 100 + matcnt + 1;
//			artmp2[iCnt][1] = 100 + matcnt + 1;
		
			q_push(artmp[matcnt][0], artmp[matcnt][1], 2);
			matcnt++;
			iCnt++;
			//console.log("부전 없이 artmp2123123 : "+asd + " " + iCnt+" \n" + artmp2);
			//console.log("RuleDBList123123 : \n" + RuleDBList);
			//asd++;
		}
		else
			{
			iCount++;
			//console.log("그냥 넘음 " + iCnt +" \n");
			}
		
	}

	//console.log("artmp2 : \n" + artmp2);
	//console.log("RuleDBList : \n" + RuleDBList);
	
	for (iCnt = 0; iCnt < iPlayerNum; iCnt++)
	{
		if (artmp[iCnt][2] >= 1)
			artmp[iCnt][2] = 1;

		artmp2[iCnt][0] = artmp[iCnt][0];
		artmp2[iCnt][1] = artmp[iCnt][1];
		artmp2[iCnt][2] = artmp[iCnt][2];
	}


	for (var iCnt2 = 1; iCnt2 < seq-1; iCnt2++)
	{
		var q = 0;
		for (iCnt = 0; iCnt < iPlayerNum; iCnt++)
		{
			if (artmp2[iCnt][2] == iCnt2)
			{

				var a = iCnt + 1;
				var b = iCnt + 2;
				q_push(100 + a, 100 + b, iCnt2 + 2);
				iCnt += 1;
			}
		}
		for (iCnt = 0; iCnt < iPlayerNum; iCnt++)
		{
			if (artmp2[iCnt][2] == iCnt2)
			{

				var a = iCnt + 1;
				var b = iCnt + 2;
				artmp[matcnt][0] = 100 + a;
				artmp[matcnt][1] = 100 + b;
				artmp[matcnt][2] = iCnt2 + 1;
				matcnt++;
				iCnt += 1;
			}
		}
		for (iCnt = 0; iCnt < iPlayerNum; iCnt++)
		{
			artmp2[iCnt][0] = artmp[iCnt][0];
			artmp2[iCnt][1] = artmp[iCnt][1];
			artmp2[iCnt][2] = artmp[iCnt][2];
		}
	}
	
	//console.log("t = " + t + " iPlayerNum : " + iPlayerNum);
	if(t == iPlayerNum)
	{
		seq--;
		for(t = 0 ;t < 100; t++)
		{
			RuleDBList[t][2]--;
		}
	}
		
	
	g_matchRuleDB = RuleDBList;
//	console.log("artmp2 :\n"+artmp2);
//	console.log("artmp :\n"+artmp);
//	console.log("RuleDBList :\n"+RuleDBList);
}

function showGameListGrid(jsonArray, path) {
	// jsonArray 를 jsonString 으로 변환.
	var jsonData = JSON.stringify(jsonArray);

	$('#GameList').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');

	$("#GameList").jqGrid({
		datatype : 'jsonstring',
		datastr : jsonData,
		zIndex : 1,
		colModel : [ {
			label : '대회ID',
			name : 'gameId',
			hidden : true
		}, {
			label : '대회명',
			name : 'gameName',
			width : 300,
			align : "center", /* formatter: linkGameDetail */
		}, {
			label : '지  역',
			name : 'region',
			width : 50,
			align : "center"
		}, {
			label : '개최자',
			name : 'owner',
			width : 100,
			align : "center"
		}, {
			label : '개최일',
			name : 'beginDate',
			width : 100,
			align : "center"
		}, {
			label : '종료일',
			name : 'endDate',
			width : 100,
			align : "center"
		}, ],
		viewrecords : true,
		width : 800,
		// height: 400,
		rowNum : 30,
		// caption : '대회 검색결과',
		pager : '#jqGridPager',
		jsonReader : {
		// root: 'rows'
		},
		loadComplete : function() {
		},
		onSelectRow : function(rowid, status, e) {
			var rowData = $(this).getRowData(rowid);
			var url = path + "?gameId=" + rowData.gameId;
			location.href = url;
		}
	});
	$('#GameList').css('font-size', '15px');
}

function linkGameDetail(cellval, options, rowObject) {
	var gameId = rowObject.gameId;
	var url = "gameMain.php";
	return "<a href='" + url + "?gameId=" + gameId
			+ "' style='text-decoration:blink;'>" + cellval + "</a>";
}

function showGameStatusByClass(classArr, genderArr, levelArr, teamArr, webFlag) {
	var htmlTag = "";

	//console.log(webFlag);
	// 부
	htmlTag += "<table>";
	for (var c = 0; c < classArr.length; c++) {

		if (webFlag == 'web') {
			if (c % 2 == 0) {
				htmlTag += "<tr>";
			}
		} else {
			htmlTag += "<tr>";
		}

		htmlTag += "<td id='GameStatusTable'>" + classArr[c]
				+ "<table id='GameStatusByClass' border='1'>";

		classArr[c] = classArr[c].substring(0, 2);

		// 성별
		for (var g = 0; g <= genderArr.length + 1; g++) {
			htmlTag += "<tr>";

			// 급
			for (var l = 0; l <= levelArr.length; l++) {
				if (g == 0) {
					if (l < levelArr.length) {
						if (l == 0) {
							htmlTag += "<th>구분</th>";
						}
						htmlTag += "<th>" + levelArr[l] + "</th>";
					} else if (l = levelArr.length) {
						htmlTag += "<th>팀수</th>";
					}
				} else if (g != 0 && g <= genderArr.length) {
					var g1 = g - 1;
					if (l < levelArr.length) {
						if (l == 0) {
							htmlTag += "<th><b>" + genderArr[g1] + "</b></th>";
						}
						htmlTag += "<td id='" + c + "_" + l + "_" + g1 + "'>"
								+ 0 + "</td>";
					} else if (l = levelArr.length) {
						htmlTag += "<td bgcolor='#EAEAEA' id='" + c + "_" + g1
								+ "_gsum'>" + 0 + "</td>";
					}
				} else if (g == genderArr.length + 1) {
					if (l < levelArr.length) {
						if (l == 0) {
							htmlTag += "<th><b>계</b></th>";
						}
						htmlTag += "<td bgcolor='#EAEAEA' id='" + c + "_" + l
								+ "_lsum'>" + 0 + "</td>";
					} else if (l = levelArr.length) {
						htmlTag += "<td bgcolor='#CEFBC9' id='" + c + "_csum'>"
								+ 0 + "</td>";
					}
				}
			}
			htmlTag += "</tr>";
		}
		htmlTag += "</table></td>";

		if (webFlag == 'web') {
			if (c % 2 != 0) {
				htmlTag += "</tr>";
			}
		} else {
			htmlTag += "</tr>";
		}
	}
	htmlTag += "</table><br><br>";

	$("#GameGeneralInfoDetail").html(htmlTag);

	for (var t = 0; t < teamArr.length; t++) {
		var teamCountId = classArr.indexOf(teamArr[t]["age"]) + "_"
				+ levelArr.indexOf(teamArr[t]["level"]) + "_"
				+ genderArr.indexOf(teamArr[t]["gender"]);

		var classSumId = classArr.indexOf(teamArr[t]["age"]) + "_csum";

		var genderSumId = classArr.indexOf(teamArr[t]["age"]) + "_"
				+ genderArr.indexOf(teamArr[t]["gender"]) + "_gsum";

		var levelSumId = classArr.indexOf(teamArr[t]["age"]) + "_"
				+ levelArr.indexOf(teamArr[t]["level"]) + "_lsum";

		// html 상의 class_level_gender ID에 teamCount입력.
		var teamCount = parseInt($("#" + teamCountId).html()) + 1;
		$("#" + teamCountId).html(teamCount);

		// class별 팀수sum에 기존값 + 신규값
		var classSum = parseInt($("#" + classSumId).html()) + 1;
		$("#" + classSumId).html(classSum);

		// gender별 팀수sum에 기존값 + 신규값
		var genderSum = parseInt($("#" + genderSumId).html()) + 1;
		$("#" + genderSumId).html(genderSum);

		// level별 팀수sum에 기존값 + 신규값
		var levelSum = parseInt($("#" + levelSumId).html()) + 1;
		$("#" + levelSumId).html(levelSum);
	}

}


function showTourAtGameMainTourMo(tourArr) {
	var jsonData = JSON.stringify(tourArr);
	var htmlTag = "<table id='TourStatusTable'></table>";
	$("#GameGeneralInfoDetail").html(htmlTag);

	// console.log("TourStatusTable : " + TourStatusTable + " jsonData : " +
	// jsonData);

	$('#TourStatusTable').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');

	$("#TourStatusTable").jqGrid(
			{
				datatype : 'jsonstring',
				datastr : jsonData,
				zIndex : 1,
				colModel : [ {
					label : '번호',
					name : 'num',
					align : "center",
					width : 40
				}, {
					label : '인원',
					name : 'count',
					align : "center",
					width : 40
				}, {
					label : '성별',
					name : 'gender',
					align : "center",
					width : 40
				}, {
					label : '나이',
					name : 'age',
					align : "center",
					width : 40

				}, {
					label : '급',
					name : 'level',
					align : "center",
					width : 40
				},  {
					label : 'gameId',
					name : 'gameId',
					align : "center",
					width : 150,
					hidden : true
				}, {
					label : 'tourid',
					name : 'tourid',
					align : "center",
					width : 150,
					hidden : true
				} ],
				viewrecords : true,
				rowNum : 500,
				caption : '토너먼트 목록',
				pager : '#jqGridPager',
				jsonReader : {},
				loadComplete : function() {
					// console.log(jsonData);
				},

				onSelectRow : function(rowid, status, e) {
					var rowData = $(this).getRowData(rowid);
					var url = "gameMainTourMo.php" + "?gameId=" + rowData.gameId
							+ "&tourid=" + rowData.tourid;
					location.href = url;
				}
			});

	$('#TourStatusTable').css('font-size', '13px');
}

function showTourAtGameMainTour(tourArr) {
	var jsonData = JSON.stringify(tourArr);
	var htmlTag = "<table id='TourStatusTable'></table>";
	$("#GameGeneralInfoDetail").html(htmlTag);

	// console.log("TourStatusTable : " + TourStatusTable + " jsonData : " +
	// jsonData);

	$('#TourStatusTable').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');

	$("#TourStatusTable").jqGrid(
			{
				datatype : 'jsonstring',
				datastr : jsonData,
				zIndex : 1,
				colModel : [ {
					label : '번호',
					name : 'num',
					align : "center",
					width : 60
				}, {
					label : '인원',
					name : 'count',
					align : "center",
					width : 150
				}, {
					label : '성별',
					name : 'gender',
					align : "center",
					width : 150
				}, {
					label : '나이',
					name : 'age',
					align : "center",
					width : 150

				}, {
					label : '급',
					name : 'level',
					align : "center",
					width : 150
				},  {
					label : 'gameId',
					name : 'gameId',
					align : "center",
					width : 150,
					hidden : true
				}, {
					label : 'tourid',
					name : 'tourid',
					align : "center",
					width : 150,
					hidden : true
				} ],
				viewrecords : true,
				rowNum : 500,
				caption : '토너먼트 목록',
				pager : '#jqGridPager',
				jsonReader : {},
				loadComplete : function() {
					// console.log(jsonData);
				},

				onSelectRow : function(rowid, status, e) {
					var rowData = $(this).getRowData(rowid);
					var url = "gameMainTour.php" + "?gameId=" + rowData.gameId
							+ "&tourid=" + rowData.tourid;
					location.href = url;
				}
			});

	$('#TourStatusTable').css('font-size', '13px');
}

function linkTourDetailAtGameMainTour(cellval, options, rowObject) {
	var gameId = rowObject.gameId;
	var age = rowObject.age;
	var level = rowObject.level;
	var gender = rowObject.gender;

	var url = "gameMainTour.php";
	return "<a href='" + url + "?gameId=" + gameId + "&age=" + age + "&level="
			+ level + "&gender=" + gender + "' style='text-decoration:blink;'>"
			+ cellval + "</a>";
}
function maketourlistAtManage(tourArr) {
	// var jsonData = JSON.stringify(tourArr);

	/*
	 * tournament table gameid = 게임아이디 tourid = 토너먼트 생성 시간 tourname = 나이 레벨 성별
	 * class = 나이 level = 레벨 gender = 성별 teamcount = 팀 숫자 stadium = 일단 스타디움
	 */
	var htmlTag_DBlog = "";

	var str = "";

	for (var m = 0; m < tourArr.length; m++) {

		// gameid = 게임아이디
		str += tourArr[m]["gameid"] + "/";
		// tourid = 토너먼트 생성 시간
		str += tourArr[m]["num"] + "/";
		// tourname = 나이 레벨 성별
		str += tourArr[m]["class"] + tourArr[m]["level"] + tourArr[m]["gender"]
				+ "/";
		// class = 나이
		str += tourArr[m]["class"] + "/";
		// level = 레벨
		str += tourArr[m]["level"] + "/";
		// gender = 성별
		str += tourArr[m]["gender"] + "/";
		// teamcount = 팀 숫자
		str += tourArr[m]["teamcount"] + "/";
		// stadium = 일단 스타디움
		str += tourArr[m]["region"] + "/";
		//

	}

	// alert(str);
	htmlTag_DBlog += "<textarea style='display:none' name='maketourlistByDBLogformnum' required='required'>"
			+ (tourArr[m - 1]["num"]) + "</textarea>";
	htmlTag_DBlog += "<textarea style='display:none' name='maketourlistByDBLogform' required='required'>"
			+ str + "</textarea>";

	htmlTag_DBlog += "<h2>총 " + (tourArr[m - 1]["num"])
			+ "개의 토너먼트가 감지되었습니다.<br>생성하시겠습니까?<br></h2>";

	$("#maketourlistByDBLog").html(htmlTag_DBlog);

}

function showGameStatusByTourAtManage(tourArr) {
	var jsonData = JSON.stringify(tourArr);
	var htmlTag = "<table id='TourStatusTable'></table>";
	$("#GameGeneralInfoDetail").html(htmlTag);

	// console.log("TourStatusTable : " + TourStatusTable + " jsonData : " +
	// jsonData);

	$('#TourStatusTable').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');

	$("#TourStatusTable").jqGrid(
			{
				datatype : 'jsonstring',
				datastr : jsonData,
				zIndex : 1,
				colModel : [ {
					label : '번호',
					name : 'num',
					align : "center",
					width : 60
				}, {
					label : '인원',
					name : 'count',
					align : "center",
					width : 150
				}, {
					label : '성별',
					name : 'gender',
					align : "center",
					width : 150
				}, {
					label : '나이',
					name : 'age',
					align : "center",
					width : 150

				}, {
					label : '급',
					name : 'level',
					align : "center",
					width : 150
				}, {
					label : '확정여부',
					name : 'decide',
					align : "center",
					width : 150
				}, {
					label : 'gameId',
					name : 'gameId',
					align : "center",
					width : 150,
					hidden : true
				}, {
					label : 'tourid',
					name : 'tourid',
					align : "center",
					width : 150,
					hidden : true
				} ],
				viewrecords : true,
				rowNum : 500,
				caption : '토너먼트 목록',
				pager : '#jqGridPager',
				jsonReader : {},
				loadComplete : function() {
					// console.log(jsonData);
				},

				onSelectRow : function(rowid, status, e) {
					var rowData = $(this).getRowData(rowid);
					var url = "manageTour.php" + "?gameId=" + rowData.gameId
							+ "&tourid=" + rowData.tourid;
					location.href = url;
				}
			});

	$('#TourStatusTable').css('font-size', '13px');
}


function showGameStatusByTourAtTimetable(tourArr) {
	var jsonData = JSON.stringify(tourArr);
	var htmlTag = "<table id='TourStatusTable'></table>";
	$("#GameGeneralInfoDetail").html(htmlTag);

	$('#TourStatusTable').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');

	$("#TourStatusTable").jqGrid(
			{
				datatype : 'jsonstring',
				datastr : jsonData,
				zIndex : 1,
				colModel : [ {
					label : '번호',
					name : 'num',
					align : "center",
					width : 60
				}, {
					label : '나이',
					name : 'age',
					align : "center",
					width : 150

				}, {
					label : '급',
					name : 'level',
					align : "center",
					width : 150
				}, {
					label : '성별',
					name : 'gender',
					align : "center",
					width : 150
				}, {
					label : '참가팀수',
					name : 'count',
					align : "center",
					width : 150
				}, {
					label : '확정여부',
					name : 'decide',
					align : "center",
					width : 150
				},{
					label : 'gameId',
					name : 'gameId',
					align : "center",
					width : 150,
					hidden : true
				}, {
					label : 'tourid',
					name : 'tourid',
					align : "center",
					width : 150,
					hidden : true
				} ],
				viewrecords : true,
				rowNum : 1000,
				caption : '토너먼트 목록',
				pager : '#jqGridPager',
				jsonReader : {},
				loadComplete : function() {
					// console.log(jsonData);
				},

				onSelectRow : function(rowid, status, e) {
					var rowData = $(this).getRowData(rowid);
					
					if (rowData.decide == '확정' ){
						var url = "manageTimetable.php" + "?gameId=" + rowData.gameId + "&tourId=" + rowData.tourid;
						location.href = url;
					} else {
						alert('확정 상태인 토너먼트만 경기입력이 가능합니다');
					}
				}
			});

	$('#TourStatusTable').css('font-size', '13px');
}

function showGameStatusByTourAtManageResult(tourArr) {
	var jsonData = JSON.stringify(tourArr);
	var htmlTag = "<table id='TourStatusTable'></table>";
	$("#GameGeneralInfoDetail").html(htmlTag);

	$('#TourStatusTable').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');

	$("#TourStatusTable").jqGrid(
			{
				datatype : 'jsonstring',
				datastr : jsonData,
				zIndex : 1,
				colModel : [ {
					label : '번호',
					name : 'num',
					align : "center",
					width : 60
				}, {
					label : '나이',
					name : 'age',
					align : "center",
					width : 150

				}, {
					label : '급',
					name : 'level',
					align : "center",
					width : 150
				}, {
					label : '성별',
					name : 'gender',
					align : "center",
					width : 150
				}, {
					label : '참가팀수',
					name : 'count',
					align : "center",
					width : 150
				}, {
					label : '확정여부',
					name : 'decide',
					align : "center",
					width : 150
				},{
					label : 'gameId',
					name : 'gameId',
					align : "center",
					width : 150,
					hidden : true
				}, {
					label : 'tourid',
					name : 'tourid',
					align : "center",
					width : 150,
					hidden : true
				} ],
				viewrecords : true,
				rowNum : 1000,
				caption : '토너먼트 목록',
				pager : '#jqGridPager',
				jsonReader : {},
				loadComplete : function() {
					// console.log(jsonData);
				},

				onSelectRow : function(rowid, status, e) {
					var rowData = $(this).getRowData(rowid);
					
					if (rowData.decide == '확정' ){
						var url = "manageGameResult.php" + "?gameId=" + rowData.gameId + "&tourId=" + rowData.tourid;
						location.href = url;
					} else {
						alert('확정 상태인 토너먼트만 경기입력이 가능합니다');
					}
				}
			});

	$('#TourStatusTable').css('font-size', '13px');
}

function showGameStatusByTour(tourArr) {
	var jsonData = JSON.stringify(tourArr);
	var htmlTag = "<table id='TourStatusTable'></table>";
	$("#GameGeneralInfoDetail").html(htmlTag);

	$('#TourStatusTable').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');

	$("#TourStatusTable").jqGrid(
			{
				datatype : 'jsonstring',
				datastr : jsonData,
				zIndex : 1,
				colModel : [ {
					label : '번호',
					name : 'num',
					align : "center",
					width : 60
				}, {
					label : '나이',
					name : 'age',
					align : "center",
					width : 150

				}, {
					label : '급',
					name : 'level',
					align : "center",
					width : 150
				}, {
					label : '성별',
					name : 'gender',
					align : "center",
					width : 150
				}, {
					label : '참가팀수',
					name : 'count',
					align : "center",
					width : 150
				}, {
					label : '확정여부',
					name : 'decide',
					align : "center",
					hidden : true,
					width : 150
				},{
					label : 'gameId',
					name : 'gameId',
					align : "center",
					width : 150,
					hidden : true
				}, {
					label : 'tourid',
					name : 'tourid',
					align : "center",
					width : 150,
					hidden : true
				} ],
				viewrecords : true,
				rowNum : 1000,
				caption : '토너먼트 목록',
				pager : '#jqGridPager',
				jsonReader : {},
				loadComplete : function() {
					// console.log(jsonData);
				},

				onSelectRow : function(rowid, status, e) {
					var rowData = $(this).getRowData(rowid);
					
					if (rowData.decide == '확정' ){
						var url = "gameMainTour.php" + "?gameId=" + rowData.gameId + "&tourId=" + rowData.tourid;
						location.href = url;
					} else {
						alert('확정 상태인 토너먼트만 경기입력이 가능합니다');
					}
				}
			});

	$('#TourStatusTable').css('font-size', '13px');
}

function linkTourDetailAtManage(cellval, options, rowObject) {
	var gameId = rowObject.gameId;
	var age = rowObject.age;
	var level = rowObject.level;
	var gender = rowObject.gender;
	var tourid = rowObject.tourid;

	var url = "manageTour.php";
	return "<a href='" + url + "?gameId=" + gameId + "&tourid=" + tourid
			+ "' style='text-decoration:blink;'>" + cellval + "</a>";
}


function DrawTourByMatchAtManage(results,mo,results2,gameName, tourName) {

	var RoundText = ["결승전","준결승전","8강전","준예선","예선"];
	// console.log("results.length " + results.length);

	var t = 1;
	var TourSeq = 0;
	while (t <= results.length)
	{
		t = t * 2;
		TourSeq++;
	}
	if((t/2) == results.length)
		TourSeq--;
	
	//console.log("results.length " + results.length);
	
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	
	var CHeight = canvas.height;
	var CWidth = canvas.width;
	if(mo == 1)
	{
		canvas = document.getElementById("myCanvasvisible");
		context = canvas.getContext("2d");
		context.scale(0.4, 0.4);
		//CHeight*=2.5;
		//CWidth *= 2.5;
	}
	else
	{
		canvas = document.getElementById("myCanvas");
		context = canvas.getContext("2d");
	}
	
	
	var baseTeamNamewidth = 40;
	var baseTeamNamewidthGap = 50 + ((15 - results.length) * 5);
	var baseTeamNameheight = 40;
	var baseTeamNameheightGap = 60;
	var baseFontSize = "16px Gulim";
	var baseTeamBoxWidth = (CWidth / 2);
	var baseTeamBoxHeight = (CHeight / 2) + 50;

	context.fillStyle = "rgb(255,255,255)";
	context.fillRect(0, 0, CWidth, CHeight);
	context.fillStyle = "rgb(0,0,0)";

	var title = "[ " + gameName + ' / ' + tourName + " ]";
	context.beginPath();
	context.font = "32px bold Gulim Center";
	context.textAlign = "center";
	context.fillText(title, (CWidth / 2), (CHeight / 2)
			- (CHeight / 2) + 40);
	context.stroke();


	if (results.length < 17) {

//		for(var iCnt = TourSeq-1; iCnt >=0; iCnt--) 
//		{
//			//if(TourSeq < 5)
//			{
//				drawName(context, 10, baseTeamBoxHeight - 18 - (iCnt*40),
//						baseFontSize, RoundText[TourSeq - iCnt-1]);
//			}
//			
//		}
//		
		
		for (var iCnt = 0; iCnt < results.length; iCnt++) {
			// 팀별 박스 그리기
			drawRect(context, (CWidth / 2) - (results.length / 2)
					* baseTeamNamewidthGap + (iCnt * baseTeamNamewidthGap),
					baseTeamBoxHeight, baseTeamNamewidth, 130);

			// 팀명
			// drawVerticalName(context, (CWidth / 2) - (results.length / 2)
			// 		* baseTeamNamewidthGap + (iCnt * baseTeamNamewidthGap)
			// 		+ baseTeamNamewidth / 2 - 8, baseTeamBoxHeight + 35,
			// 		baseFontSize, results[iCnt]['playername1']);
			// drawVerticalName(context, (CWidth / 2) - (results.length / 2)
			// 		* baseTeamNamewidthGap + (iCnt * baseTeamNamewidthGap)
			// 		+ baseTeamNamewidth / 2 + 8, baseTeamBoxHeight + 35,
			// 		baseFontSize, results[iCnt]['playername2']);

			// 팀번호(시드번호)
			drawTeamNum(context, (CWidth / 2) - (results.length / 2)
					* baseTeamNamewidthGap + (iCnt * baseTeamNamewidthGap)
					+ baseTeamNamewidth / 2 - 0, baseTeamBoxHeight + 25,
					baseFontSize, results[iCnt]['seed']);

			// 팀원별 클럽명
			if (results[iCnt]['clubname1'] != results[iCnt]['clubname2']) {
				drawVerticalName(context, (CWidth / 2)
						- (results.length / 2) * baseTeamNamewidthGap
						+ (iCnt * baseTeamNamewidthGap) + baseTeamNamewidth / 2
						- 8, baseTeamBoxHeight + 90, baseFontSize,
						results[iCnt]['clubname1']);
				drawVerticalName(context, (CWidth / 2)
						- (results.length / 2) * baseTeamNamewidthGap
						+ (iCnt * baseTeamNamewidthGap) + baseTeamNamewidth / 2
						+ 8, baseTeamBoxHeight + 90, baseFontSize,
						results[iCnt]['clubname2']);

			} else {
				drawVerticalName(context, (CWidth / 2)
						- (results.length / 2) * baseTeamNamewidthGap
						+ (iCnt * baseTeamNamewidthGap) + baseTeamNamewidth / 2
						- 0, baseTeamBoxHeight + 50, baseFontSize,
						results[iCnt]['clubname1']);
			}

		}

		makeMatchRule(results.length);
		var nowMatchList = g_matchRuleDB;
		var nowMatchNum = results.length - 2;
		
		for (var iCnt = 0; iCnt < nowMatchNum + 1; iCnt++) {
			nowMatchList[iCnt][3] = 0;
			nowMatchList[iCnt][4] = 0;
			nowMatchList[iCnt][5] = 0;
		}

		for (var iCnt = 0; iCnt < nowMatchNum + 1; iCnt++) {

			var left = nowMatchList[iCnt][0] - 1;
			var right = nowMatchList[iCnt][1] - 1;

			if (nowMatchList[iCnt][0] < 100 && nowMatchList[iCnt][1] < 100) {
				var x = (CWidth / 2) - (results.length / 2)
						* baseTeamNamewidthGap + (left * baseTeamNamewidthGap)
						+ (baseTeamNamewidth / 2);
				var x2 = (CWidth / 2) - (results.length / 2)
						* baseTeamNamewidthGap + (right * baseTeamNamewidthGap)
						+ (baseTeamNamewidth / 2);

				nowMatchList[iCnt][3] = drawMatchLine(context, x,
						baseTeamBoxHeight - 40, x2, baseTeamBoxHeight - 40,
						nowMatchList[iCnt][2], 0, 0, nowMatchList[iCnt][2]);

				drawMatchNum(context, x + (x2 - x) / 2, baseTeamBoxHeight - 18,
						nowMatchList[iCnt][2], "bold 16px Gulim", (iCnt + 1));
				if(results2 != 0 && results2[iCnt]['id'] != 0)
					drawMatchNum(context, x + (x2 - x) / 2, baseTeamBoxHeight ,
							nowMatchList[iCnt][2], "bold 16px Gulim", "win:"+results2[iCnt]['id']);
				
			} else {
				var leftCountGap = 0;
				var rightCountGap = 0;

				var leftGap = 0;
				var rightGap = 0;
				var leftflag = 0;
				var rightflag = 0;

				if (nowMatchList[iCnt][0] > 100) {
					// left = nowMatchList[iCnt][0]-1-100;
					var recur = iCnt;
					var findleft = 0;
					while (1) {
						if (nowMatchList[recur][0] > 100) {
							recur = nowMatchList[recur][0] - 101;
							leftGap = nowMatchList[recur][3];
							leftflag = 1;
							break;
						} else {
							recur = nowMatchList[recur][0];
							break;
						}
						if (nowMatchList[recur][0] < 100) {
							findleft = nowMatchList[recur][0];
							leftGap = nowMatchList[recur][3];
							leftflag = 1;
							break;
						}
					}
					findleft -= 1;
				} else {
					findleft = nowMatchList[iCnt][0] - 1;
				}
				if (nowMatchList[iCnt][1] > 100) {
					var recur = iCnt;
					var findright = 0;
					while (1) {
						if (nowMatchList[recur][1] > 100) {
							recur = nowMatchList[recur][1] - 101;
							rightGap = nowMatchList[recur][3];
							rightflag = 1;
							break;
							// rightCountGap++;
						} else {
							recur = nowMatchList[recur][1];
							break;
						}
						if (nowMatchList[recur][1] < 100) {
							findright = nowMatchList[recur][1];
							rightGap = nowMatchList[recur][3];
							rightflag = 1;
							break;
						}

					}
					findright -= 1;
				} else {
					findright = nowMatchList[iCnt][1] - 1;
				}

				var x = 0;
				var x2 = 0;

				x = (CWidth / 2) - (results.length / 2)
						* baseTeamNamewidthGap
						+ (findleft * baseTeamNamewidthGap)
						+ (baseTeamNamewidth / 2);
				x2 = (CWidth / 2) - (results.length / 2)
						* baseTeamNamewidthGap
						+ (findright * baseTeamNamewidthGap)
						+ (baseTeamNamewidth / 2);

				if (leftflag == 1) {	x = leftGap;		}
				if (rightflag == 1) {	x2 = rightGap; 		}

				nowMatchList[iCnt][3] = drawMatchLine(context, x,
						baseTeamBoxHeight - 40, x2, baseTeamBoxHeight - 40,
						nowMatchList[iCnt][2], leftflag, rightflag,
						nowMatchList[iCnt][2]);

				//results[iCnt]['winner']
				
				drawMatchNum(context, x + (x2 - x) / 2, baseTeamBoxHeight - 18,
						nowMatchList[iCnt][2], "bold 16px Gulim", (iCnt + 1));
				
				if(results2 != 0 && results2[iCnt]['id'] != 0)
					drawMatchNum(context, x + (x2 - x) / 2, baseTeamBoxHeight ,
							nowMatchList[iCnt][2], "bold 16px Gulim", "win:"+results2[iCnt]['id']);
					
			
			}
			
		}
		//17명 이상일 경우
	} else {
		var half = 0;
		var half2 = 0;
		var OddifShift=0;
			
		
		if (results.length % 2 == 0) {
			half = results.length / 2;
			half2 = results.length / 2;
		} else {
			half = Math.floor(results.length / 2) + 1;
			half2 = Math.floor(results.length / 2);
			OddifShift = 30;
		}
		drawName(context, CWidth/2- 15
				, CHeight/2  + 15
				, baseFontSize,
				"결승전");

		for (var iCnt = 0; iCnt < half; iCnt++) {
			// 팀별 박스 그리기
			drawRect(context, baseTeamBoxWidth - baseTeamBoxWidth + 50,
					(CHeight / 2) - (half / 2) * baseTeamNameheightGap
							+ (iCnt * baseTeamNameheightGap), 130,
					baseTeamNamewidth);

			// 팀명
			drawName(context, baseTeamBoxWidth - baseTeamBoxWidth + 50 + 70,
					(CHeight / 2) - (half / 2) * baseTeamNameheightGap
							+ (iCnt * baseTeamNameheightGap) - 8 + 25,
					baseFontSize, results[iCnt]['playername1']);
			drawName(context, baseTeamBoxWidth - baseTeamBoxWidth + 50 + 70,
					(CHeight / 2) - (half / 2) * baseTeamNameheightGap
							+ (iCnt * baseTeamNameheightGap) + 8 + 25,
					baseFontSize, results[iCnt]['playername2']);

			// 팀번호(시드번호)
			drawTeamNum(context,
					baseTeamBoxWidth - baseTeamBoxWidth + 50 + 118,
					(CHeight / 2) - (half / 2) * baseTeamNameheightGap
							+ (iCnt * baseTeamNameheightGap) + 25,
					baseFontSize, results[iCnt]['seed']);

			// 팀원별 클럽명
			if (results[iCnt]['clubname1'] != results[iCnt]['clubname2']) {
				drawName(context,
						baseTeamBoxWidth - baseTeamBoxWidth + 50 + 15,
						(CHeight / 2) - (half / 2)
								* baseTeamNameheightGap
								+ (iCnt * baseTeamNameheightGap) - 8 + 25,
						baseFontSize, results[iCnt]['clubname1']);
				drawName(context,
						baseTeamBoxWidth - baseTeamBoxWidth + 50 + 15,
						(CHeight / 2) - (half / 2)
								* baseTeamNameheightGap
								+ (iCnt * baseTeamNameheightGap) + 8 + 25,
						baseFontSize, results[iCnt]['clubname2']);

			} else {
				drawName(context,
						baseTeamBoxWidth - baseTeamBoxWidth + 50 + 15,
						(CHeight / 2) - (half / 2)
								* baseTeamNameheightGap
								+ (iCnt * baseTeamNameheightGap) + 25,
						baseFontSize, results[iCnt]['clubname1']);
			}

		}

		for (var iCnt = 0; iCnt < half2; iCnt++) {
			// 팀별 박스 그리기
			drawRect(context, baseTeamBoxWidth + baseTeamBoxWidth - 50 - 130,
					(CHeight / 2) - (half / 2) * baseTeamNameheightGap + OddifShift
							+ (iCnt * baseTeamNameheightGap), 130,
					baseTeamNamewidth);

			// 팀명
			drawName(context
					, baseTeamBoxWidth + baseTeamBoxWidth - 50 - 130 + 30
					, (CHeight / 2) - (half / 2)
					* baseTeamNameheightGap + (iCnt * baseTeamNameheightGap) - 8 + 25 + OddifShift
					, baseFontSize, results[iCnt + half]['playername1']);
			drawName(context, baseTeamBoxWidth + baseTeamBoxWidth - 50 - 130 + 30
					, (CHeight / 2) - (half / 2) * baseTeamNameheightGap + (iCnt * baseTeamNameheightGap) + 8 + 25+ OddifShift
					, baseFontSize, results[iCnt + half]['playername2']);

			// 팀번호(시드번호)
			drawTeamNum(context, baseTeamBoxWidth + baseTeamBoxWidth - 50 - 130 + 10
					, (CHeight / 2) - (half / 2) * baseTeamNameheightGap + (iCnt * baseTeamNameheightGap) + 25 + OddifShift
					, baseFontSize, results[iCnt + half]['seed']);

			// 팀원별 클럽명
			if (results[iCnt + half]['clubname1'] != results[iCnt + half]['clubname2']) {
				drawName(context, baseTeamBoxWidth + baseTeamBoxWidth - 50 - 130 + 85
						, (CHeight / 2) - (half / 2) * baseTeamNameheightGap + (iCnt * baseTeamNameheightGap) - 8 + 25 + OddifShift
						,baseFontSize, results[iCnt + half]['clubname1']);
				drawName(context, baseTeamBoxWidth + baseTeamBoxWidth - 50 - 130 + 85
						, (CHeight / 2) - (half / 2) * baseTeamNameheightGap + (iCnt * baseTeamNameheightGap) + 8 + 25 + OddifShift
						,baseFontSize, results[iCnt + half]['clubname2']);

			} else {
				drawName(context, baseTeamBoxWidth + baseTeamBoxWidth - 50 - 130 + 85
						, (CHeight / 2) - (half / 2) * baseTeamNameheightGap + (iCnt * baseTeamNameheightGap) + 25+ OddifShift
						, baseFontSize,
						results[iCnt + half]['clubname1']);
			}

		}
		
		var MatchNumCnt = 1;
		//왼쪽 라인들
		{
			makeMatchRule(half);
			var matchRuleDB = g_matchRuleDB;
			var LeftShift = -150;
			
			// 인원수에 맞는 매치 룰을 넘김
			var nowMatchList = g_matchRuleDB;//matchRuleDB[half - 2];
			var nowMatchNum = half - 2;
			for (var iCnt = 0; iCnt < nowMatchNum + 1; iCnt++) {
				nowMatchList[iCnt][3] = 0;
				nowMatchList[iCnt][4] = 0;
			}

			for (var iCnt = 0; iCnt < nowMatchNum + 1; iCnt++) {
				var left = nowMatchList[iCnt][0] - 1;
				var right = nowMatchList[iCnt][1] - 1;
				if (nowMatchList[iCnt][0] < 100 && nowMatchList[iCnt][1] < 100) {
					var x = (CHeight / 2) - (half / 2)
							* baseTeamNameheightGap
							+ (left * baseTeamNameheightGap)
							+ (baseTeamNameheight / 2);
					var x2 = (CHeight / 2) - (half / 2)
							* baseTeamNameheightGap
							+ (right * baseTeamNameheightGap)
							+ (baseTeamNameheight / 2);

					nowMatchList[iCnt][3] = drawMatchLinVerticalLeft(context
							, x
							, baseTeamBoxHeight - 40 + LeftShift
							, x2
							, baseTeamBoxHeight - 40 + LeftShift
							, nowMatchList[iCnt][2], 0, 0, nowMatchList[iCnt][2]);

					drawMatchNumVerticalLeft(context
							, x + (x2 - x) / 2
							, baseTeamBoxHeight - 18 + LeftShift
							, nowMatchList[iCnt][2], "bold 16px Gulim", results[iCnt]['seed']);
				} else {
					var leftCountGap = 0;
					var rightCountGap = 0;

					var leftGap = 0;
					var rightGap = 0;
					var leftflag = 0;
					var rightflag = 0;

					if (nowMatchList[iCnt][0] > 100) {
						// left = nowMatchList[iCnt][0]-1-100;
						var recur = iCnt;
						var findleft = 0;
						while (1) {
							if (nowMatchList[recur][0] > 100) {
								recur = nowMatchList[recur][0] - 101;
								leftGap = nowMatchList[recur][3];
								leftflag = 1;
								break;
							} else {
								recur = nowMatchList[recur][0];
								break;
							}
							if (nowMatchList[recur][0] < 100) {
								findleft = nowMatchList[recur][0];
								leftGap = nowMatchList[recur][3];
								leftflag = 1;
								break;
							}
							// leftCountGap++;

						}
						findleft -= 1;
					} else {
						findleft = nowMatchList[iCnt][0] - 1;
					}

					if (nowMatchList[iCnt][1] > 100) {
						var recur = iCnt;
						var findright = 0;
						while (1) {
							if (nowMatchList[recur][1] > 100) {
								recur = nowMatchList[recur][1] - 101;
								rightGap = nowMatchList[recur][3];
								rightflag = 1;
								break;
								// rightCountGap++;
							} else {
								recur = nowMatchList[recur][1];
								break;
							}
							if (nowMatchList[recur][1] < 100) {
								findright = nowMatchList[recur][1];
								rightGap = nowMatchList[recur][3];
								rightflag = 1;
								break;
							}

						}
						findright -= 1;
					} else {
						findright = nowMatchList[iCnt][1] - 1;
					}

					var x = 0;
					var x2 = 0;

					x = (CHeight / 2) - (half / 2) * baseTeamNameheightGap
							+ (findleft * baseTeamNameheightGap)
							+ (baseTeamNameheight / 2);
					x2 = (CHeight / 2) - (half / 2) * baseTeamNameheightGap
							+ (findright * baseTeamNameheightGap)
							+ (baseTeamNameheight / 2);

					if (leftflag == 1) {
						x = leftGap;
					}
					if (rightflag == 1) {
						x2 = rightGap;
					}

					nowMatchList[iCnt][3] = drawMatchLinVerticalLeft(context
							, x
							, baseTeamBoxHeight - 40 +  + LeftShift
							, x2
							, baseTeamBoxHeight - 40 +  + LeftShift
							, nowMatchList[iCnt][2], leftflag, rightflag,
							nowMatchList[iCnt][2]);

					drawMatchNumVerticalLeft(context
							, x + (x2 - x) / 2
							, baseTeamBoxHeight - 18 +  + LeftShift
							, nowMatchList[iCnt][2], "bold 16px Gulim", results[iCnt]['seed']);
					
				}
			}
		}
	
		{
			makeMatchRule(half2);
	
			
			var matchRuleDB = g_matchRuleDB;
			var RightShift = 308;

			// 인원수에 맞는 매치 룰을 넘김
			var nowMatchList = g_matchRuleDB;//matchRuleDB[half - 2];
			var nowMatchNum = half2 - 2;
			for (var iCnt = 0; iCnt < nowMatchNum + 1; iCnt++) {
				nowMatchList[iCnt][3] = 0;
				nowMatchList[iCnt][4] = 0;
			}

			for (var iCnt = 0; iCnt < nowMatchNum + 1; iCnt++) {
				var left = nowMatchList[iCnt][0] - 1;
				var right = nowMatchList[iCnt][1] - 1;
				if (nowMatchList[iCnt][0] < 100 && nowMatchList[iCnt][1] < 100) {
					var x = (CHeight / 2) - (half / 2)
							* baseTeamNameheightGap
							+ (left * baseTeamNameheightGap)
							+ (baseTeamNameheight / 2);
					var x2 = (CHeight / 2) - (half / 2)
							* baseTeamNameheightGap
							+ (right * baseTeamNameheightGap)
							+ (baseTeamNameheight / 2);

					nowMatchList[iCnt][3] = drawMatchLinVertical(context
							, x+ OddifShift
							, baseTeamBoxHeight - 40  + RightShift
							, x2+ OddifShift
							, baseTeamBoxHeight - 40  + RightShift
							, nowMatchList[iCnt][2], 0, 0, nowMatchList[iCnt][2]);

					drawMatchNumVertical(context
							, (x + (x2 - x) / 2)  + OddifShift
							, baseTeamBoxHeight - 18 + RightShift,
							nowMatchList[iCnt][2], "bold 16px Gulim", (iCnt + 1));
				} else {
					var leftCountGap = 0;
					var rightCountGap = 0;

					var leftGap = 0;
					var rightGap = 0;
					var leftflag = 0;
					var rightflag = 0;

					if (nowMatchList[iCnt][0] > 100) {
						// left = nowMatchList[iCnt][0]-1-100;
						var recur = iCnt;
						var findleft = 0;
						while (1) {
							if (nowMatchList[recur][0] > 100) {
								recur = nowMatchList[recur][0] - 101;
								leftGap = nowMatchList[recur][3];
								leftflag = 1;
								break;
							} else {
								recur = nowMatchList[recur][0];
								break;
							}
							if (nowMatchList[recur][0] < 100) {
								findleft = nowMatchList[recur][0];
								leftGap = nowMatchList[recur][3];
								leftflag = 1;
								break;
							}
							// leftCountGap++;

						}
						findleft -= 1;
					} else {
						findleft = nowMatchList[iCnt][0] - 1;
					}

					if (nowMatchList[iCnt][1] > 100) {
						var recur = iCnt;
						var findright = 0;
						while (1) {
							if (nowMatchList[recur][1] > 100) {
								recur = nowMatchList[recur][1] - 101;
								rightGap = nowMatchList[recur][3];
								rightflag = 1;
								break;
								// rightCountGap++;
							} else {
								recur = nowMatchList[recur][1];
								break;
							}
							if (nowMatchList[recur][1] < 100) {
								findright = nowMatchList[recur][1];
								rightGap = nowMatchList[recur][3];
								rightflag = 1;
								break;
							}

						}
						findright -= 1;
					} else {
						findright = nowMatchList[iCnt][1] - 1;
					}

					var x = 0;
					var x2 = 0;

					x = (CHeight / 2) - (half / 2) * baseTeamNameheightGap
							+ (findleft * baseTeamNameheightGap)
							+ (baseTeamNameheight / 2);
					x2 = (CHeight / 2) - (half / 2) * baseTeamNameheightGap
							+ (findright * baseTeamNameheightGap)
							+ (baseTeamNameheight / 2);

					if (leftflag == 1) {
						x = leftGap;
					}
					if (rightflag == 1) {
						x2 = rightGap;
					}

					nowMatchList[iCnt][3] = drawMatchLinVertical(context
							, x 
							, baseTeamBoxHeight - 40 + RightShift
							, x2
							, baseTeamBoxHeight - 40 + RightShift,
							nowMatchList[iCnt][2], leftflag, rightflag,
							nowMatchList[iCnt][2]);

					drawMatchNumVertical(context
							, (x + (x2 - x) / 2)
							, baseTeamBoxHeight - 18 + RightShift,
							nowMatchList[iCnt][2], "bold 16px Gulim", (iCnt + 1));
					
				}
			}
		}
	}

}

// draw some text

function drawTeamNum(con, x, y, size, Num) {
	con.beginPath();
	con.font = size;
	con.fillText(Num, x, y);
	con.stroke();
}

function drawMatchNum(con, x, y, hei, size, Num) {
	var height = hei * 40;
	var hGap = (hei - 1) * 40;
	y -= hGap;

	con.beginPath();
	con.font = size;
	con.fillText(Num, x, y);
	con.stroke();
}

function drawMatchNumVerticalLeft(con, x, y, hei, size, Num) {
	var gap = -40;
	//var height = hei * gap + gap;
	var hGap = (hei - 1) * gap;
	y -= hGap;

	con.beginPath();
	con.font = size;
	con.fillText(Num, y + gap, x);
	con.stroke();
}
function drawMatchNumVertical(con, x, y, hei, size, Num) {
	var height = hei * 40;
	var hGap = (hei - 1) * 40;
	y -= hGap;

	con.beginPath();
	con.font = size;
	con.fillText(Num, y, x);
	con.stroke();
}
function drawName(con, x, y, size, name) {
	con.beginPath();
	con.font = size;
	for (var iCnt = 0; iCnt < name.length; iCnt++) {
		con.fillText(name[iCnt], x + (iCnt * 16), y);
	}
	con.stroke();
}
function drawVerticalName(con, x, y, size, name) {
	con.beginPath();
	con.font = size;
	for (var iCnt = 0; iCnt < name.length; iCnt++) {
		con.fillText(name[iCnt], x, y + (iCnt * 16));
	}
	con.stroke();
}
function drawRect(con, x, y, width, height) {
	con.beginPath();
	// con.lineWidth = 0.2;
	con.strokeStyle = "br";

	con.moveTo(x, y);
	con.lineTo(x + width, y);

	con.moveTo(x + width, y);
	con.lineTo(x + width, y + height);

	con.moveTo(x + width, y + height);
	con.lineTo(x, y + height);

	con.moveTo(x, y + height);
	con.lineTo(x, y);

	con.closePath();
	con.stroke();
}

function drawMatchLinVerticalLeft(con, x, y, x2, y2, hei, leftflag, rightflag, seq) {
	var heightGap = -40;
	var height = 1 * heightGap;
	var height2 = 1 * heightGap;

	if (leftflag == 0 & seq >= 2) {
		height = (2) * heightGap;
	}
	if (rightflag == 0 & seq >= 2) {
		height2 = (2) * heightGap;
	}

	var hGap = (hei - 1) * heightGap;
	y -= hGap;
	y2 -= hGap;

	con.beginPath();
	// con.lineWidth = 0.2;
	// if(hei== 3)
	con.strokeStyle = "rgb(" + (hei * 70) + "," + (255 - hei * 70) + ",0)";
	// con.strokeStyle = "br";

	con.moveTo(y, x);
	con.lineTo(y2, x2);

	// Left라인
	con.moveTo(y, x);
	con.lineTo(y + height, x);

	// right 라인
	con.moveTo(y2, x2);
	con.lineTo(y2 + height2, x2);

	con.moveTo(y - heightGap,x + (x2 - x) / 2);
	con.lineTo(y,x + (x2 - x) / 2);

	con.closePath();
	con.stroke();

	return x + (x2 - x) / 2;
}
function drawMatchLinVertical(con, x, y, x2, y2, hei, leftflag, rightflag, seq) {
	var heightGap = 40;
	var height = 1 * heightGap;
	var height2 = 1 * heightGap;

	if (leftflag == 0 & seq >= 2) {
		height = (2) * heightGap;
	}
	if (rightflag == 0 & seq >= 2) {
		height2 = (2) * heightGap;
	}

	var hGap = (hei - 1) * 40;
	y -= hGap;
	y2 -= hGap;

	con.beginPath();
	// con.lineWidth = 0.2;
	// if(hei== 3)
	con.strokeStyle = "rgb(" + (hei * 70) + "," + (255 - hei * 70) + ",0)";
	// con.strokeStyle = "br";

	con.moveTo(y, x);
	con.lineTo(y2, x2);

	// Left라인
	con.moveTo(y, x);
	con.lineTo(y + height, x);

	// right 라인
	con.moveTo(y2, x2);
	con.lineTo(y2 + height2, x2);

	con.moveTo(y - 40,x + (x2 - x) / 2);
	con.lineTo(y,x + (x2 - x) / 2);

	con.closePath();
	con.stroke();

	return x + (x2 - x) / 2;
}

function drawMatchLine(con, x, y, x2, y2, hei, leftflag, rightflag, seq) {
	var heightGap = 40;
	var height = 1 * heightGap;
	var height2 = 1 * heightGap;

	if (leftflag == 0 & seq >= 2) {
		height = (2) * heightGap;
	}
	if (rightflag == 0 & seq >= 2) {
		height2 = (2) * heightGap;
	}

	var hGap = (hei - 1) * 40;
	y -= hGap;
	y2 -= hGap;

	con.beginPath();
	// con.lineWidth = 0.2;
	// if(hei== 3)
	con.strokeStyle = "rgb(" + (hei * 70) + "," + (255 - hei * 70) + ",0)";
	// con.strokeStyle = "br";

	con.moveTo(x, y);
	con.lineTo(x2, y2);

	// Left라인
	con.moveTo(x, y);
	con.lineTo(x, y + height);

	// right 라인
	con.moveTo(x2, y2);
	con.lineTo(x2, y2 + height2);

	con.moveTo(x + (x2 - x) / 2, y - 40);
	con.lineTo(x + (x2 - x) / 2, y);

	con.closePath();
	con.stroke();

	return x + (x2 - x) / 2;
}

function showTourStatusTimetableAtManage() {

	var htmlTag = "";
	var court = 9;
	var startTimeH = 7;
	var startTimeM = 0;

	var timeGap = 20;

	htmlTag += "<h2>지역명 : <br> " + court + "코트 짜리 " + timeGap
			+ "분씩</h2><br><br>";

	htmlTag += "<table id='GameStatusByClub' border='1'>";

	htmlTag += "<tr>";
	htmlTag += "<th>시간</th>";
	var wid = 100 / court;
	for (var m = 0; m < court; m++) {
		htmlTag += "<th width = " + (wid) + "%>" + (m + 1) + "코트</th>";
	}

	htmlTag += "</tr>";

	for (var m = 0; m < 11; m++) {
		htmlTag += "<tr >";
		var time = "";
		time = startTimeH + ":" + startTimeM + "<br>~" + startTimeH + ":"
				+ (startTimeM + timeGap);
		htmlTag += "<td>" + time + "</td>";

		for (var i = 0; i < court; i++) {
			htmlTag += "<td>" + "설정" + "</td>";
		}

		htmlTag += "</tr>";

	}
	htmlTag += "</table><br>";

	$("#GameManageTourTimetable").html(htmlTag);

}

function showTourStatusTeamListByMatchAtManage(results) {

	var htmlTag = "";

	htmlTag += "<h2>참가 팀 수 : " + (results.length) + "</h2><br><br>";

	htmlTag += "<table id='GameStatusByClub' border='1'>";

	htmlTag += "<tr>";
	htmlTag += "<th>배정<br>번호</th>";
	htmlTag += "<th>선수</th>";
	htmlTag += "<th>클럽</th>";
	htmlTag += "<th>선수</th>";
	htmlTag += "<th>클럽</th>";
	htmlTag += "</tr>";

	for (var m = 0; m < results.length; m++) {
		htmlTag += "<tr >";

		htmlTag += "<td>" + (m + 1) + "</td>";

		htmlTag += "<td>" + results[m]['playername1'] + "</td>";
		htmlTag += "<td>" + results[m]['clubname1'] + "</td>";

		htmlTag += "<td>" + results[m]['playername2'] + "</td>";
		htmlTag += "<td>" + results[m]['clubname2'] + "</td>";

		htmlTag += "</tr>";

	}
	htmlTag += "</table><br>";

	// htmlTag += "<b> 나이 : "+results[0]['age']+"</b><br>";
	// htmlTag += "<b> 등급 : "+results[0]['level']+"</b><br>";
	// htmlTag += "<b> 성별 : "+results[0]['gender']+"</b><br>";

	// for (var m = 0; m < results.length; m++)
	// {
	// htmlTag += "<b> 배정번호 :"+(m+1) + " 팀원 : "+results[m]['playername1']+" /
	// "+results[m]['playername2']+"</b><br><br>";
	// }
	//	
	$("#GameManageTourMatch").html(htmlTag);

}
function showTeamListByMatchAtManage(results) {
	var htmlTag = "";
	//var matchRuleDB = g_matchRuleDB;

	// 인원수에 맞는 매치 룰을 넘김
	makeMatchRule(results.length);
	var nowMatchList = g_matchRuleDB;
	//console.log("nowMatchList : " + g_matchRuleDB[0]);
	//var nowMatchList = matchRuleDB[results.length - 2];

	//console.log("results.length : " + results.length);
	//console.log("nowMatchList : " + g_matchRuleDB);
	
	htmlTag += "<h2>경기 수 : " + (results.length - 1) + "</h2><br><br>";

	htmlTag += "<table id='GameStatusByList' border='1'>";

	htmlTag += "<tr>";
	htmlTag += "<th>경기<br>번호</th>";
	htmlTag += "<th colspan='3'>매치</th>";
	

	htmlTag += "</tr>";

	for (var m = 0; m < results.length - 1; m++) {

		htmlTag += "<tr >";
		// con.strokeStyle = "rgb("+(hei*70)+","+(255-hei*70)+",0)";
		var hei = nowMatchList[m][2] ;
		htmlTag += "<td style='background-color: rgb(" + (hei * 70) + "," + (255 - hei * 70)
				+ ",0)'>" + (m + 1) + "</td>";
		// htmlTag += "<td bgcolor = color:rgb(0,0,0)>" + (m+1) + "</td>";

		var firstTeamName = "";
		// 출력해줘야 될 팀명이 승자 내용이라면
		if (nowMatchList[m][0] > 100) {
			var tmp = nowMatchList[m][0] - 100;
			firstTeamName = tmp + "번 경기 승리팀 ";
		} else {
			var a = nowMatchList[m][0];
			//console.log(m);
			//console.log(""+nowMatchList);
			firstTeamName = "[" + a + "] "
					+ results[a - 1]['playername1'] + "/"
					+ results[a - 1]['playername2'];
		}
		htmlTag += "<td id='teamA'>" + firstTeamName + "</td>";

		htmlTag += "<td id='vs'>VS</td>";

		var lastTeamName = "";
		// 출력해줘야 될 팀명이 승자 내용이라면
		if (nowMatchList[m][1] > 100) {
			var tmp = nowMatchList[m][1] - 100;
			lastTeamName = tmp + "번 경기 승리팀 ";
		} else {
			lastTeamName = "[" + nowMatchList[m][1] + "] "
					+ results[nowMatchList[m][1] - 1]['playername1'] + "/"
					+ results[nowMatchList[m][1] - 1]['playername2'];
		}
		htmlTag += "<td id='teamB' >" + lastTeamName + "</td>";
		// htmlTag += "<td>" + " ? : ? " + "</td>";
		// htmlTag += "<td>" + " ? " + "</td>";

		htmlTag += "</tr>";

	}
	htmlTag += "</table><br>";

	$("#DrawMathList").html(htmlTag);

	var htmlTag_DBlog = "";

	var str = "";
	for (var m = 0; m < results.length - 1; m++) {
		//
		str += results[m]["gameid"] + "/";

		str += results[m]["tourid"] + "/";

		// matchid
		str += (m + 1) + "/";

		// matchseq
		str += nowMatchList[m][2] + "/";

		// teamid
		if (nowMatchList[m][0] > 100) {
			str += " /";
		} else {
			str += results[nowMatchList[m][0] - 1]['teamid'] + "/";
		}

		if (nowMatchList[m][1] > 100) {
			str += " /";
		} else {
			str += results[nowMatchList[m][1] - 1]['teamid'] + "/";
		}
	}
	var str2 = "";
	
	for (var m = 0; m < results.length ; m++) {
		str2 += results[m]['teamid'] + "/";
	}

	//style='display:none'
	htmlTag_DBlog += "<textarea style='display:visible' name='DBlogformnum' required='required'>"
			+ (m) + "</textarea>";
	htmlTag_DBlog += "<textarea style='display:visible' name='DBlogform' required='required'>"
			+ str + "</textarea>";
	htmlTag_DBlog += "<textarea style='display:visible' name='DBlogformplayer' required='required'>"
		+ str2+ "</textarea>";

	$("#GameStatusByDBLog2").html(htmlTag_DBlog);

}

function shuffle(arr) {
	if (arr instanceof Array) {
		var len = arr.length;
		if (len == 1)
			return arr;
		var i = len * 2;
		while (i > 0) {
			var idx1 = Math.floor(Math.random() * len);
			var idx2 = Math.floor(Math.random() * len);
			if (idx1 == idx2)
				continue;
			var temp = arr[idx1];
			arr[idx1] = arr[idx2];
			arr[idx2] = temp;
			i--;
		}
	} else {
		alert("No Array Object");
	}
	return arr;
}

function showTourStatusByMatch(results) {

	var lastSeq = results[results.length - 1]["matchSeq"];
	var htmlTag = "";

	for (var matchSeq = 1; matchSeq <= lastSeq; matchSeq++) {

		if (matchSeq == lastSeq) {
			htmlTag += "<b>결승전</b><br>";
		} else if (matchSeq == lastSeq - 1) {
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

		for (var m = 0; m < results.length; m++) {

			if (matchSeq == results[m]["matchSeq"]) {
				htmlTag += "<tr>";
				htmlTag += "<td>" + results[m]["matchId"] + "</td>";

				if (!results[m]["winner"]) {
					htmlTag += "<td id='teamA'>" + results[m]["teamA"]
							+ "</td>";
				} else {
					if (results[m]["teamA"] == results[m]["winner"]) {
						htmlTag += "<td id='teamA'><b><font color='blue'>"
								+ results[m]["teamA"] + "</font></b></td>";
					} else {
						htmlTag += "<td id='teamA'><b><font color='red'>"
								+ results[m]["teamA"] + "</font></b></td>";
					}
				}

				htmlTag += "<td id='vs'>VS</td>";

				if (!results[m]["winner"]) {
					htmlTag += "<td id='teamB'>" + results[m]["teamB"]
							+ "</td>";
				} else {
					if (results[m]["teamB"] == results[m]["winner"]) {
						htmlTag += "<td id='teamB'><b><font color='blue'>"
								+ results[m]["teamB"] + "</font></b></td>";
					} else {
						htmlTag += "<td id='teamB'><b><font color='red'>"
								+ results[m]["teamB"] + "</font></b></td>";
					}
				}

				htmlTag += "<td>" + results[m]["teamAscore"] + ' : '
						+ results[m]["teamBscore"] + "</td>";
				htmlTag += "<td>" + results[m]["winner"] + "</td>";
				htmlTag += "<td>" + results[m]["area"] + "</td>";
				htmlTag += "<td>" + results[m]["matchDate"] + "</td>";
				htmlTag += "<td>" + results[m]["beginTime"] + ' ~ '
						+ results[m]["endTime"] + "</td>";
				htmlTag += "</tr>";
			}
		}
		htmlTag += "</table><br>";
	}

	$("#MatchStatus").html(htmlTag);
}

function showGameStatusTotal(results, gameId) {

	var totalList = [];

	// 배열로 만듬.
	var tempClubList = [];
	for (var i = 0; i < results.length; i++) {
		tempClubList.push(results[i]["clubName1"]);
		tempClubList.push(results[i]["clubName2"]);
	}

	// 클럽리스트 중복제거 및 오름차순 정렬하여 최종 totalList 생성.
	var uClubList = uniqueArray(tempClubList).sort();
	for (var i = 0; i < uClubList.length; i++) {
		middleArray = [];
		middleArray["seq"] = i + 1;
		middleArray["clubName"] = uClubList[i];
		middleArray["playerMan"] = 0;
		middleArray["playerWoman"] = 0;
		middleArray["playerSum"] = 0;

		middleArray["teamMan"] = 0.0;
		middleArray["teamWoman"] = 0.0;
		middleArray["teamMix"] = 0.0;
		middleArray["teamSum"] = 0.0;

		middleArray["levelJg"] = 0.0;
		middleArray["levelA"] = 0.0;
		middleArray["levelB"] = 0.0;
		middleArray["levelC"] = 0.0;
		middleArray["levelCho"] = 0.0;
		middleArray["levelSum"] = 0.0;
		totalList.push(middleArray);
	}

	for (var i = 0; i < results.length; i++) {

		var club1 = getArrayIndexByKey(totalList, "clubName",
				results[i]["clubName1"]);
		var club2 = getArrayIndexByKey(totalList, "clubName",
				results[i]["clubName2"]);

		// 출전인원
		for (var cnt = 1; cnt <= 2; cnt++) {
			if (cnt == 1) {
				var c = club1;
			} else {
				var c = club2;
			}
			if (results[i]["playerId" + cnt].charAt(7) == "1") {
				totalList[c]["playerMan"] += 1;
			} else {
				totalList[c]["playerWoman"] += 1;
			}
			totalList[c]["playerSum"] += 1;
		}

		// 종목별팀수
		for (var cnt = 1; cnt <= 2; cnt++) {
			if (cnt == 1) {
				var c = club1;
			} else {
				var c = club2;
			}
			if (results[i]["gender"] == "남") {
				totalList[c]["teamMan"] += 0.5;
			} else if (results[i]["gender"] == "여") {
				totalList[c]["teamWoman"] += 0.5;
			} else if (results[i]["gender"] == "혼복") {
				totalList[c]["teamMix"] += 0.5;
			}
			totalList[c]["teamSum"] += 0.5;
		}

		// 급수별팀수
		for (var cnt = 1; cnt <= 2; cnt++) {
			if (cnt == 1) {
				var c = club1;
			} else {
				var c = club2;
			}
			if (results[i]["level"] == "자강") {
				totalList[c]["levelJg"] += 0.5;
			} else if (results[i]["level"] == "A") {
				totalList[c]["levelA"] += 0.5;
			} else if (results[i]["level"] == "B") {
				totalList[c]["levelB"] += 0.5;
			} else if (results[i]["level"] == "C") {
				totalList[c]["levelC"] += 0.5;
			} else if (results[i]["level"] == "초"
					|| results[i]["level"] == "왕초") {
				totalList[c]["levelCho"] += 0.5;
			}
			totalList[c]["levelSum"] += 0.5;
		}
	}

	var htmlTag = "<table id='GameStatusByClub' border='1'>";

	htmlTag += "<tr>";
	htmlTag += "<th rowspan='2' width='30px'>No.</th>";
	htmlTag += "<th rowspan='2' width='200px'>클럽명</th>";
	htmlTag += "<th colspan='3' width='30px'>출전인원</th>";
	htmlTag += "<th colspan='4' width='30px'>종목별팀수</th>";
	htmlTag += "<th colspan='6' width='30px'>급수별팀수</th>";
	htmlTag += "</tr>";

	htmlTag += "<tr>";
	htmlTag += "<th width='30px'>남</th>";
	htmlTag += "<th width='30px'>여</th>";
	htmlTag += "<th width='30px'><font color='red'>계</font></th>";

	htmlTag += "<th width='30px'>남</th>";
	htmlTag += "<th width='30px'>여</th>";
	htmlTag += "<th width='30px'>혼복</th>";
	htmlTag += "<th width='30px'><font color='red'>계</font></th>";

	htmlTag += "<th width='30px'>자강</th>";
	htmlTag += "<th width='30px'>A</th>";
	htmlTag += "<th width='30px'>B</th>";
	htmlTag += "<th width='30px'>C</th>";
	htmlTag += "<th width='30px'>초</th>";
	htmlTag += "<th width='30px'><font color='red'>계</font></th>";
	htmlTag += "</tr>";

	var playerManSum = 0;
	var playerWomanSum = 0;
	var playerSumSum = 0;

	var teamManSum = 0.0;
	var teamWomanSum = 0.0;
	var teamMixSum = 0.0;
	var teamSumSum = 0.0;

	var levelJgSum = 0.0;
	var levelASum = 0.0;
	var levelBSum = 0.0;
	var levelCSum = 0.0;
	var levelChoSum = 0.0;
	var levelSumSum = 0.0;

	for (var i = 0; i < totalList.length; i++) {
		var obj = totalList[i];

		playerManSum += obj["playerMan"];
		playerWomanSum += obj["playerWoman"];
		playerSumSum += obj["playerSum"];

		teamManSum += obj["teamMan"];
		teamWomanSum += obj["teamWoman"];
		teamMixSum += obj["teamMix"];
		teamSumSum += obj["teamSum"];

		levelJgSum += obj["levelJg"];
		levelASum += obj["levelA"];
		levelBSum += obj["levelB"];
		levelCSum += obj["levelC"];
		levelChoSum += obj["levelCho"];
		levelSumSum += obj["levelSum"];

		htmlTag += "<tr>";
		htmlTag += "<td>" + obj["seq"] + "</td>";
		htmlTag += "<td>" + "<a id='clubLink' href='gameMainClub.php?gameId=" + gameId + "&clubName=" + obj["clubName"] + "'>" + obj["clubName"] + "</a></td>";
		htmlTag += "<td>" + obj["playerMan"] + "</td>";
		htmlTag += "<td>" + obj["playerWoman"] + "</td>";
		htmlTag += "<td id='sum'>" + obj["playerSum"] + "</td>";

		htmlTag += "<td>" + obj["teamMan"] + "</td>";
		htmlTag += "<td>" + obj["teamWoman"] + "</td>";
		htmlTag += "<td>" + obj["teamMix"] + "</td>";
		htmlTag += "<td id='sum'>" + obj["teamSum"] + "</td>";

		htmlTag += "<td>" + obj["levelJg"] + "</td>";
		htmlTag += "<td>" + obj["levelA"] + "</td>";
		htmlTag += "<td>" + obj["levelB"] + "</td>";
		htmlTag += "<td>" + obj["levelC"] + "</td>";
		htmlTag += "<td>" + obj["levelCho"] + "</td>";
		htmlTag += "<td id='sum'>" + obj["levelSum"] + "</td>";
		htmlTag += "</tr>";

	}

	htmlTag += "<tr id='sum'>";
	htmlTag += "<td colspan='2'>합계</td>";
	htmlTag += "<td>" + playerManSum + "</td>";
	htmlTag += "<td>" + playerWomanSum + "</td>";
	htmlTag += "<td id='finalSum'>" + playerSumSum + "</td>";

	htmlTag += "<td>" + teamManSum + "</td>";
	htmlTag += "<td>" + teamWomanSum + "</td>";
	htmlTag += "<td>" + teamMixSum + "</td>";
	htmlTag += "<td id='finalSum'>" + teamSumSum + "</td>";

	htmlTag += "<td>" + levelJgSum + "</td>";
	htmlTag += "<td>" + levelASum + "</td>";
	htmlTag += "<td>" + levelBSum + "</td>";
	htmlTag += "<td>" + levelCSum + "</td>";
	htmlTag += "<td>" + levelChoSum + "</td>";
	htmlTag += "<td id='finalSum'>" + levelSumSum + "</td>";
	htmlTag += "</tr>";
	htmlTag += "</table><br><br>";
	$("#GameGeneralInfoDetail").html(htmlTag);

}

function showEntryFeeByAge(results, ageArr, entryFee) {

	console.log(ageArr);

	// 배열로 만듬.
	var tempClubList = [];
	for (var i = 0; i < results.length; i++) {
		tempClubList.push(results[i]["clubName1"]);
		tempClubList.push(results[i]["clubName2"]);
	}

	// 클럽리스트 중복제거 및 오름차순 정렬하여 최종 totalList 생성.
	var totalList = [];
	var uClubList = uniqueArray(tempClubList).sort();
	for (var i = 0; i < uClubList.length; i++) {
		middleArray = [];
		middleArray["seq"] = i + 1;
		middleArray["clubName"] = uClubList[i];
		middleArray["gameCntSum"] = 0.0;
		middleArray["gameFeeSum"] = 0;

		for (var a = 0; a < ageArr.length; a++) {
			middleArray["gameCnt" + ageArr[a]] = 0.0;
		}

		totalList.push(middleArray);
	}

	console.log(totalList);

	for (var i = 0; i < results.length; i++) {

		var club1 = getArrayIndexByKey(totalList, "clubName",
				results[i]["clubName1"]);
		var club2 = getArrayIndexByKey(totalList, "clubName",
				results[i]["clubName2"]);

		// 연령대별 출전팀
		for (var cnt = 1; cnt <= 2; cnt++) {
			if (cnt == 1) {
				var c = club1;
			} else {
				var c = club2;
			}
			totalList[c]["gameCnt" + results[i]["age"]] += 0.5;
			totalList[c]["gameCntSum"] += 0.5;
			totalList[c]["gameFeeSum"] = totalList[c]["gameCntSum"] * entryFee;
		}
	}

	var htmlTag = "<table id='GameStatusByClub' border='1'>";
	//	
	htmlTag += "<tr>";
	htmlTag += "<th width='30px'>No.</th>";
	htmlTag += "<th width='200px'>클럽명</th>";

	for (var i = 0; i < ageArr.length; i++) {
		htmlTag += "<th width='35px'>" + ageArr[i] + "대</th>";
	}

	htmlTag += "<th width='30px'>계</th>";
	htmlTag += "<th width='30px'>총참가비</th>";
	htmlTag += "</tr>";

	var gameCntSum = 0;
	var gameFeeSum = 0;

	var gameSum = [];

	for (var i = 0; i < totalList.length; i++) {
		var obj = totalList[i];

		if (i == 0) {
			gameSum["gameCntSum"] = obj["gameCntSum"];
			gameSum["gameFeeSum"] = obj["gameFeeSum"];

		} else {
			gameSum["gameCntSum"] += obj["gameCntSum"];
			gameSum["gameFeeSum"] += obj["gameFeeSum"];
		}

		htmlTag += "<tr>";
		htmlTag += "<td>" + obj["seq"] + "</td>";
		htmlTag += "<td>" + obj["clubName"] + "</td>";

		for (var a = 0; a < ageArr.length; a++) {
			htmlTag += "<td>" + obj["gameCnt" + ageArr[a]] + "</td>";

			if (i == 0) {
				gameSum["gameCntSum" + ageArr[a]] = obj["gameCnt" + ageArr[a]];
			} else {
				gameSum["gameCntSum" + ageArr[a]] += obj["gameCnt" + ageArr[a]];
			}
		}

		htmlTag += "<td>" + obj["gameCntSum"] + "</td>";
		htmlTag += "<td>" + obj["gameFeeSum"].toLocaleString() + "</td>";
		htmlTag += "</tr>";
	}

	console.log(gameSum);

	htmlTag += "<tr id='sum'>";
	htmlTag += "<td colspan='2'>합계</td>";

	for (var a = 0; a < ageArr.length; a++) {
		htmlTag += "<td>" + gameSum["gameCntSum" + ageArr[a]] + "</td>";
	}
	htmlTag += "<td>" + gameSum["gameCntSum"] + "</td>";
	htmlTag += "<td id='finalSum'>" + gameSum["gameFeeSum"].toLocaleString()
			+ "</td>";

	htmlTag += "</tr>";
	htmlTag += "</table><br><br>";
	$("#ManageGameDetail").html(htmlTag);

}

function showGameListMobile(jsonArray) {
	var htmlTag = "";
	for (var i = 0; i < jsonArray.length; i++) {
		htmlTag += "<li><a href='gameMainMo.php?gameId="
				+ jsonArray[i]['gameId']
				+ "' rel='external', data-ajax='false'>";
		htmlTag += "<h1>" + jsonArray[i]['gameName'] + "</h1>";
		htmlTag += "<p>" + jsonArray[i]['region'] + " / "
				+ jsonArray[i]['owner'] + "</p>";
		htmlTag += "<p>" + jsonArray[i]['beginDate'] + " ~ "
				+ jsonArray[i]['beginDate'] + "</p>";
		htmlTag += "</a></li>";
	}
	$("#GameList:jqmData(role='listview')").html(htmlTag).listview().listview(
			"refresh");
}

function showUserListGridMo(jsonArray) {
	console.log(jsonArray);
	var htmlTag = "";
	for (var i = 0; i < jsonArray.length; i++) {
		htmlTag += "<li><a href='myGameMainMo.php?playerName="
				+ jsonArray[i]['playerName'] + "&playerId=" + jsonArray[i]['playerId'] 
				+ "' rel='external', data-ajax='false'>";
		htmlTag += "<h1>" + jsonArray[i]['playerName'] + "</h1>";
		htmlTag += "<p>" + jsonArray[i]['playerId'] + "</p>";
		htmlTag += "</a></li>";
	}
	$("#UserList:jqmData(role='listview')").html(htmlTag).listview().listview(
			"refresh");
}

function showMyMatchListMobile(jsonArray) {
	var htmlTag = "";
	for (var i = 0; i < jsonArray.length; i++) {
		htmlTag += "<li><a href='gameMainMo.php?gameId="
				+ jsonArray[i]['gameId']
				+ "' rel='external', data-ajax='false'>";
		htmlTag += "<h1>" + jsonArray[i]['gameName'] + "</h1>";
		htmlTag += "<p>" + jsonArray[i]['tourName'] + " / " + jsonArray[i]['area'] + " / " + jsonArray[i]['beginTime'] + "</p>";
		
		htmlTag += "<p>" + "[" + jsonArray[i]['team_a_clubName1'] + "]" + jsonArray[i]['team_a_playerName1']
				+ " & " + "[" + jsonArray[i]['team_a_clubName2'] + "]" + jsonArray[i]['team_a_playerName2'] + " 대</p>";
		htmlTag += "<p>" + "[" + jsonArray[i]['team_b_clubName1'] + "]" + jsonArray[i]['team_b_playerName1']
				+ " & " + "[" + jsonArray[i]['team_b_clubName2'] + "]" + jsonArray[i]['team_b_playerName2'] + "</p>";
		htmlTag += "</a></li>";
	}
	$("#MatchList:jqmData(role='listview')").html(htmlTag).listview().listview(
			"refresh");
}

function showBoardListMobile(jsonArray) {
	var htmlTag = "";
	console.log(jsonArray);
	for (var i = 0; i < jsonArray.length; i++) {
		if (jsonArray[i]['boardType'] == 'game') {
			htmlTag += "<li><a href='boardViewMo.php?type="
					+ jsonArray[i]['boardType'] + "&idx=" + jsonArray[i]['idx']
					+ "&gameId=" + jsonArray[i]['gameId']
					+ "' rel='external', data-ajax='false'>";
		} else {
			htmlTag += "<li><a href='boardViewMo.php?type="
					+ jsonArray[i]['boardType'] + "&idx=" + jsonArray[i]['idx']
					+ "' rel='external', data-ajax='false'>";
		}

		htmlTag += "<h1>" + jsonArray[i]['title'] + "</h1>";
		htmlTag += "<p>작성자 : " + jsonArray[i]['insertUser'] + " ("
				+ jsonArray[i]['insertDate'] + ")</p>";
		htmlTag += "<p>조회수 : " + jsonArray[i]['hits'] + "</p>";
		htmlTag += "</a></li>";
	}
	$("#boardList:jqmData(role='listview')").html(htmlTag).listview().listview(
			"refresh");
}

function getArrayIndexByKey(arr, key, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][key] == value) {
			return i;
		}
	}
}