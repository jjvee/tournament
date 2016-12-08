
Parse.initialize("89ckXS8TdEG75qRLxXjG3Rl94FLl6mKfm6jVK6Jp", "nl9YXTEW5ek86lu7baPEe7bmlCUaxSIvVCMFlW8Z");

function $_GET(param) {
	var vars = {};
	window.location.href.replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

function wrapWindowByMask() {
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height();
    var maskWidth = window.document.body.clientWidth;
     
    var mask = "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    var loadingImg = '';
     
    loadingImg += "<div id='loadingImg' style='position:absolute; left:50%; top:40%; display:none; z-index:10000;'>";
    loadingImg += " <img src='images/loading.gif'/>"; 
    loadingImg += "</div>";   
 
    //화면에 레이어 추가 
    $('body')
        .append(mask)
        .append(loadingImg);
       
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({
            'width' : maskWidth
            , 'height': maskHeight
            , 'opacity' : '0.3'
    });  
 
    //마스크 표시
    $('#mask').show();    
 
    //로딩중 이미지 표시
    $('#loadingImg').show();
}

function closeWindowByMask() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').remove();  
}

function zeroPad(num, places) {
	var zero = places - num.toString().length + 1;
	return Array(+(zero > 0 && zero)).join("0") + num;
}

function signUpUser() {

	var user = new Parse.User();

	var username = $("#signup-username").val();
	var email = $("#signup-email").val();
	var password = $("#signup-password").val();

	user.set("username", username);
	user.set("password", password);
	user.set("email", email);

	user.signUp(null, {
		success: function(user) {
			alert("You successfully signed up!");
			var currentUser = Parse.User.current();  
			if(currentUser) {
				// TODO: Bring them to the hidden "logged in only" page
			}  
		},
		error: function(user, error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function signInUser() {

	var username = $("#signin-username").val();
	var password = $("#signin-password").val();

	Parse.User.logIn(username, password, {
		success: function(user) {
			alert("You successfully logged in!");
			var currentUser = Parse.User.current();
			if(currentUser) {
				// TODO: Bring them to the hidden "logged in only" page
			}  
		},
		error: function(user, error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function getUser() {

	var name = $("#nickname").val();

	var User = Parse.Object.extend("User");
	var query = new Parse.Query(User);
	query.equalTo("name", name);
	query.find({
		success: function(results) {
			alert("Successfully retrieved " + results.length + " name.");

			for (var i = 0; i < results.length; i++) {
				var object = results[i];
				document.body.innerHTML += object.get("name");
			}
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function getTourList() {

	var tourName = $("#tourName").val();

	var Tour = Parse.Object.extend("Tournament");
	var query = new Parse.Query(Tour);
	query.contains("tourName", tourName);
	query.find({
		success: function(results) {
//			alert("Successfully retrieved " + results.length + " name.");

			var json = new Object();
			var jsonArr = [];

			for (var i = 0; i < results.length; i++) {
				var data = new Object();
				data.tourId = results[i].get("tourId");
				data.tourName = results[i].get("tourName");
				data.beginDate = results[i].get("beginDate");
				data.endDate = results[i].get("endDate");
				jsonArr.push(data);
			}

			json.rows = jsonArr;
			showTourGrid(JSON.stringify(json));
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function showTourGrid(jsonData) {

	$('#tour').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');	

	$("#tour").jqGrid({
		datatype : 'jsonstring',
		datastr : jsonData,
		zIndex: 1,
		colModel: [{ label:'토너먼트ID', name: 'tourId', width:200, hidden:true},
		           { label:'토너먼트명', name: 'tourName', width:100 },
		           { label:'개최일', name: 'beginDate', width:100 },
		           { label:'종료일', name: 'endDate', width:100 },
		           ],
		           viewrecords: true,
		           width: 500,
		           height: 250,
		           rowNum: 20,
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
		        	   getTourMemberList(rowData.tourId);
		        	   getTourMatchList(rowData.tourId);
		           }
	});
}

function getTourMemberList(tourId) {

	var Tour = Parse.Object.extend("TourMember");
	var query = new Parse.Query(Tour);
	query.equalTo("tourId", tourId);
	query.find({
		success: function(results) {
			var json = new Object();
			var jsonArr = [];

			for (var i = 0; i < results.length; i++) {
				var data = new Object();
				data.tourId = results[i].get("tourId");
				data.userId = results[i].get("userId");
				data.tourName = results[i].get("tourName");
				data.userName = results[i].get("userName");
				jsonArr.push(data);
			}

			json.rows = jsonArr;
			showTourMemberGrid(JSON.stringify(json));
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function showTourMemberGrid(jsonData) {

	$('#tourMember').jqGrid('setGridParam', {
		datatype : 'jsonstring',
		datastr : jsonData,
	}).trigger('reloadGrid');	

	$("#tourMember").jqGrid({
		datatype : 'jsonstring',
		datastr : jsonData,
		colModel: [
		           { label:'토너먼트', name: 'tourName', key:true, width:200 },
		           { label:'유저ID', name: 'userId', key:true, width:150 },
		           { label:'유저명', name: 'userName', width:150 },
		           ],
		           viewrecords: true,
		           width: 500,
		           height: 250,
		           rowNum: 20,
		           caption: '토너먼트 참가자 목록',
		           pager: '#jqGridPager',
		           jsonReader: {
		        	   root: 'rows'
		           },
		           loadComplete: function(){

		           },
		           onSelectRow: function(rowid, status, e) {  			
		        	   alert("선택 : " + rowid + "/" + status);
		           }
	});
}

function getTourMatchList(tourId) {

	var MatchDetail = Parse.Object.extend("MatchDetail");
	var query = new Parse.Query(MatchDetail);
	query.equalTo("tourId", tourId);
	query.ascending("matchSeq","matchId");

	query.find({
		success: function(results) {
			showTourMatchGrid(results);
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

function showTourMatchGrid(results) {
	var htmlTag = "";
	var playersCnt = 0;
	var connCnt = 0;
	var matchSeq = 0;
	
	var idx = results.length;
	
	if (idx > 0) {
		var loopCnt = results[results.length - 1].get("matchSeq");
		
		for (var i=0; i<loopCnt; i++) {

			playersCnt = 0;
			matchSeq += 1;
			
			htmlTag += "<section class=\"brackets\" id=\"match" + matchSeq + "\">";
			for(var n=0; n<results.length; n++) {
				if (results[n].get("matchSeq") == matchSeq) {
//					htmlTag += "<div>" + results[n].get("userId") + "</div>";
					htmlTag += "<div>" + results[n].get("matchSeq") + "-" + results[n].get("matchId") + "</div>";
					playersCnt += 1;
				};
			}
			htmlTag += "</section>";

			if ( i != loopCnt-1) {
				connCnt = playersCnt / 2;
				
				htmlTag += "<div class=\"connecter\" id=\"conn" + matchSeq + "\">";
				for(var m=0; m<connCnt; m++) {
					htmlTag += "<div></div>";
				}
				htmlTag += "</div>";
				
				htmlTag += "<div class=\"line\" id=\"line" + matchSeq + "\">";
				for(var m=0; m<connCnt; m++) {
					htmlTag += "<div></div>";
				}
				htmlTag += "</div>";
			};
			
		} $("#tourBrackets").html(htmlTag);
	} else {
		$("#tourBrackets").html(htmlTag);
	}
	
	console.log(htmlTag);
}
