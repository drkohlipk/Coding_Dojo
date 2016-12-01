function uniques(str) {
	var nStr = '',
		myMap = new Map();
	for (var i = 0; i < str.length; i++) {
		if (!myMap[str[i]]) {
			myMap[str[i]] = 1;
		} else {
			myMap[str[i]] += 1;
		}
	}
	// for (var key in myMap) {
	// 	if (myMap[key] === 1) {
	// 		nStr += key;
	// 	}
	// }
	// return nStr;
	return myMap;
}

// console.log(uniques("mississippi"));

function isPerm(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	var map1 = uniques(str1),
		map2 = uniques(str2);
	for (var key in map1) {
		if (map1[key] !== map2[key]) {
			return false;
		}
	}
	return true;
}

// console.log(isPerm("mississippi", "ippississim"));

function perfPangram(str) {
	var alph = "abcdefghijklmnopqrstuvwxyz";
	return isPerm(alph, str);
}

console.log(perfPangram("nopqrstuvwxyzabcdefghijklm"));
