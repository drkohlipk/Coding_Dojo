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
// function reverseString(str) {
// 	newString = "";
// 	for (var i = str.length - 1; i >= 0; i--) {
// 		newString += str[i];
// 	}
// 	return newString;
// }
//
// console.log(reverseString("Reverse Me!"));
//
// newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function reverseArray(arr) {
// 	temp = 0;
// 	for (var i = 0; i < Math.floor(arr.length / 2); i++) {
// 		temp = arr[i];
// 		arr[i] = arr[arr.length - 1 - i];
// 		arr[arr.length - 1 - i] = temp;
// 	}
// }
//
// reverseArray(newArray);
// console.log(newArray);
//
//
// var people = [{
// 	name: "Robert",
// 	pet_id: 2
// }, {
// 	name: "Swetha",
// 	pet_id: 4
// }, {
// 	name: "Jack",
// 	pet_id: 3
// }, {
// 	name: "Bob",
// 	pet_id: 1
// }];
//
// var pets = [{
// 	id: 1,
// 	type: 'fish'
// }, {
// 	id: 2,
// 	type: 'dog'
// }, {
// 	id: 3,
// 	type: 'cat'
// }, {
// 	id: 4,
// 	type: 'pygmy elephant'
// }];
//
// function joinByPet_id(arr1, arr2) {
// 	var array = [];
// 	for (var i = 0; i < arr1.length; i++) {
// 		var obj = {};
// 		obj.name = arr1[i].name;
// 		for (var j = 0; j < arr2.length; j++) {
// 			if (arr1[i].pet_id == arr2[j].id) {
// 				obj.pet = arr2[j].type;
// 			}
// 		}
// 		array.push(obj);
// 	}
// 	return array;
// }
//
// console.log(joinByPet_id(people, pets));

// function coinChange(cents) {
// 	var change = {
// 			quarter: 25,
// 			dime: 10,
// 			nickel: 5,
// 			penny: 1
// 		},
// 		result = [];
// 	for (var coin in change) {
// 		var value = {
// 			type: coin,
// 			amount: Math.floor(cents / change[coin])
// 		};
// 		cents %= change[coin];
// 		result.push(value);
// 	}
// 	return result;
// }
//
// console.log(coinChange(97));
// };
//
// function Node(val) {
// 	this.val = val;
// 	this.next = null;
// }
//
// function List() {
// 	this.head = null;
// }
//
// List.prototype.addFront = function(val) {
// 	var node = new Node(val);
//
// 	if (this.head) {
// 		node.next = this.head;
// 	}
//
// 	this.head = node;
//
// 	return this;
// };
//
// List.prototype.contains = function(val) {
// 	var current = this.head;
//
// 	while (current) {
// 		if (current.val === val) {
// 			return true;
// 		}
// 		current = current.next;
// 	}
// 	return false;
// };
//
// var list = new List();
//
// for (var i = 0; i < 10; i++) {
// 	list.addFront(i);
// }
//
// var contain = list.contains(1);
//
// console.log(list);
//
// var arr = [4, 2, 4, 2, 1, 5, 7, 2];
// var arr = [4, 2, 1, 2, 1, 5, 7, 2];
// var arr = [1, 1, 1, 10, 1, 7, 1, 12, 1];
var arr = [10, 1, 1, 1, 1, 1, 1, 1, 1];

function findRain(arr) {
	var temp = arr[0],
		tempSum = 0,
		sum = 0,
		i = 0;
	for (var j = i + 1; j < arr.length; j++) {
		if (arr[j] >= arr[i] && j == i + 1) {
			i++;
		} else if (arr[j] < arr[i]) {
			tempSum += arr[i] - arr[j];
		} else if (arr[j] >= arr[i]) {
			sum += tempSum;
			tempSum = 0;
			i = j;
		} else if (j == arr.length - 1) {
			break;
		}
	}
	i = arr.length - 1;
	tempSum = 0;
	for (var l = i - 1; l >= 0; l--) {
		if (arr[l] >= arr[i] && l == i - 1) {
			// tempSum = 0;
			i--;
		} else if (arr[l] < arr[i]) {
			tempSum += arr[i] - arr[l];
		} else if (arr[l] > arr[i]) {
			sum += tempSum;
			tempSum = 0;
			i = l;
		} else if (l === 0) {
			return sum;
		}
	}
	return sum;
}

console.log(findRain(arr));
