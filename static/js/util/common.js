/**
 * 
 */

function uniqueArray(arr) {
	var a = {};
	for (var i = 0; i < arr.length; i++) {
		if (typeof a[arr[i]] == 'undefined') {
			a[arr[i]] = 1;
		}
	}
	arr.length = 0;
	for (var i in a) {
		arr[arr.length] = i;
	}
	return arr;
}

function uniqueJsonArray(arr) {
    var cleaned = [];
    
    arr.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    
    return cleaned;
}

function getArrayIndexByKey(array, attr, value) {
	for(var i = 0; i < array.length; i++) {
        if(array[i].hasOwnProperty(attr) && array[i][attr] == value) {
            return i;
        }
    }
    return -1;
}

function getArrayIndexByValue(array, value) {
	for(var i = 0; i < array.length; i++) {
		
		for(var y = 0; y < array[i].length; y++) {
			if(array[i][y] == value) {
	            return i;
			}
        }
    }
    return -1;
}

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