// var ourFirstVariable = 7;
// console.log(ourFirstVariable);
// ourFirstVariable = 'thirty-two';
// console.log(ourFirstVariable);
// ourFirstVariable = ['hello', 'this', 65];
//
// // for (var i = 0; i < ourFirstVariable.length; i++) {
// //
// // }
//
// var myString = "hello world this is fun";
//
// function removeSpaces(str) {
//     var temp = str.split(' ');
//     temp = temp.join('');
//     return temp;
// }
//
// var newString = removeSpaces(myString);
//
// console.log(newString);
//
//
// function removeSpaces2(str) {
//     var temp = str.split(' '),
//         count = 0;
//     for (var i = 0; i < temp.length; i++) {
//         if (temp[i] == ' ') {
//             temp[i] = temp[i+1];
//             count++;
//         }
//     }
//     temp.length = temp.length-count;
//     temp = temp.join('');
//     return temp;
// }
//
// var newString2 = removeSpaces2(myString);
//
// console.log(newString2);
//
function reverseString(str) {
	newString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}

console.log(reverseString("Reverse Me!"));

newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseArray(arr) {
	temp = 0;
	for (var i = 0; i < Math.floor(arr.length / 2); i++) {
		temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
}

reverseArray(newArray);
console.log(newArray);
