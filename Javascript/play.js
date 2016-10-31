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

var given = "there's no free lunch - gotta pay yer way.";

function acronymify(str) {
    var acronym = str.match(/\s./gi);
    var newAcronym = acronym.join('').toUpperCase();
    return newAcronym;
}

var result = acronymify(given);

console.log(result);
