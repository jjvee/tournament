/**
 * File Access
 */

// Sigma
function getFileLocation() {
	var fileLocation = $("#fileLocation").val();
	alert("js/fileAccess.js - getFileLoaction(" + fileLocation + ")");
}
 
function uploadPlayerList() {
	var fileLocation = $("#fileLocation").val();
	alert("js/fileAccess.js - uploadPlayerList(" + fileLocation + ")");
}


//Suya
function downloadMatchList() {
	
	var tourId = $("#tourId").val();
	var Tour = Parse.Object.extend("Tournament");//DB의 Tournament 클래스(테이블)에서 긁어옴
	var query = new Parse.Query(Tour); // 그 클래스로 parse 객체를 생성하고
	
	
	query.contains("tourId", tourId); // 해당 컬럼이 소속되도록 함.Parse.Query contains( key, substring ) 
	
	query.find({
		success: function(results) {
			
			//alert("DB 요청 TourID 수[ " + results.length + " ]");

			var json = new Object();
			var jsonArr = [];

			for (var i = 0; i < results.length; i++) {
				var data = new Object();
				data.tourId = results[i].get("tourId");
				data.tourName = results[i].get("tourName");
				data.gender = results[i].get("gender");
				data.gameId = results[i].get("gameId");
				data.level = results[i].get("level");
				data.stadium = results[i].get("stadium");
				data.teamCount = results[i].get("teamCount");
				jsonArr.push(data);
			}
			//tour1448291754915

			//gender
			//gameId
			//Level
			//stadium
			//teamCount
			json.rows = jsonArr;
			showTourGrid(JSON.stringify(json));
			

			var pdf = new jsPDF('p', 'pt', 'letter');
			var source = $('#contents')[0];
		
					  // all coords and widths are in jsPDF instance's declared units
			  // 'inches' in this case
			pdf.text(20, 20, 'Test Hello world.');
			pdf.text(20, 40, 'Fuck encoding.');
			pdf.fromHTML(source);
			pdf.save(tourId+' Test.pdf');
			  
			/*
			//alert("Test");
			var doc = new jsPDF();
			
			doc.save('Test.pdf');
			
			*/
		
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
		colModel: [{ label:'토너먼트ID', name: 'tourId', width:200, hidden:false},
		           { label:'토너먼트명', name: 'tourName', width:100 },
		           { label:'gender', name: 'gender', width:100 },
		           { label:'level', name: 'level', width:100 },
		           { label:'stadium', name: 'stadium', width:100 },
		           { label:'teamCount', name: 'teamCount', width:100 },
		           ],
		           viewrecords: true,
		           width: 800,
		           height: 150,
		           rowNum: 18,
		           caption: 'DB에 요청한 데이터',
		           pager: '#jqGridPager',
		           jsonReader: {
		        	   root: 'rows'
		           },
		           loadComplete: function(){
		        	   //	console.log(jsonData);
		           },
		          // onSelectRow: function(rowid, status, e) { 
		        //	   var rowData = $(this).getRowData(rowid);
		        //	   getTourMemberList(rowData.tourId);
		        //	   getTourMatchList(rowData.tourId);
		         //  }
	});
}

//xlsx parse function 

var X = XLSX;
var XW = {
	/* worker message */
	msg: 'xlsx',
	/* worker scripts */
	norABS: '../js/xlsxworker1.js',
};

var rABS = false;
var use_worker = true
var transferable = use_worker;
var wtf_mode = false;

function ab2str(data) {
	var o = "", l = 0, w = 10240;
	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint16Array(data.slice(l*w,l*w+w)));
	o+=String.fromCharCode.apply(null, new Uint16Array(data.slice(l*w)));
	return o;
}

function xw_xfer(data, cb) {
	var worker = new Worker(XW.norABS);
	worker.onmessage = function(e) {
		switch(e.data.t) {
			case 'ready': break;
			case 'e': console.error(e.data.d); break;
			default: xx=ab2str(e.data).replace(/\n/g,"\\n").replace(/\r/g,"\\r"); console.log("done"); cb(JSON.parse(xx)); break;
		}
	};
	worker.postMessage(data, [data]);
}

function xw(data, cb) {
	transferable = true;
	if(transferable) xw_xfer(data, cb);
}

function to_json(workbook) {
	var result = {};
	workbook.SheetNames.forEach(function(sheetName) {
		var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
		if(roa.length > 0){
			result[sheetName] = roa;
		}
	});
	return result;
}
