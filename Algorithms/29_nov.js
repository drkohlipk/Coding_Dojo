function rotateStr(str, num) {
	var nStr = '';
	if (num % str.length === 0) {
		return str;
	}
	if (num < 0) {
		num = str.length + num;
	}
	for (var i = num; i < str.length + num; i++) {
		nStr += str[i % str.length];
	}
	return nStr;
}

//What follows is the optimized version with a callback, the commented out part is what we had on the board

function isRotate(str1,str2) {
	if (str1.length != str2.length) {
		return false;
	}
	for (var i = 0; i < str1.length; i++) {
		var testStr = rotateStr(str1, i);
		if (testStr == str2) {
			return true;
		}
		// if (str1[i] === str2[0]) {
		// 	for (var j = i; j < str1.length + i; j++) {
		// 		if (str1[j % str1.length] !== str2[j-i]) {
		// 			break;
		// 		} else if (j == str1.length + i - 1 && str1[j % str1.length] == str2[j-i]) {
		// 			return true;
		// 		}
		// 	}
		// }
	}
	return false;
}

console.log(rotateStr('dogfood', 0));
console.log(isRotate('dogfood', 'ooddpgf'));
