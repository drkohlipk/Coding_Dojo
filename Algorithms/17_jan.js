/*jshint esversion: 6*/

/****************************Set Union******************************/

/**************Outline**************
 *
 * makeObj() takes in two arrays and creates an object using the value of the index of each array as a key and 1 as the
 * value.  This prevents duplicates!
 *
 * union() uses the returned object in makeObj to push the keys to the created array, returning all of the values in both
 * arrays with no duplicates.
 *
 **************Outline**************/
const makeObj = (arr1, arr2) => {
	var obj = {};
	for (let i = 0; i < arr1.length + arr2.length; i++) {
		if (i < arr1.length) {
			if (!obj[arr1[i]]) {
				obj[arr1[i]] = 1;
			}
		} else {
			if (!obj[arr2[i % arr1.length]]) {
				obj[arr2[i % arr1.length]] = 1;
			}
		}
	}
	return obj;
};

const union = (arr1, arr2) => {
	var obj = makeObj(arr1, arr2),
		arr = [];
	for (let key in obj) {
		arr.push(parseInt(key));
	}
	return arr;
};
/*************Test*************/

console.log(union([1,2,2,2,7], [2,6,6,7]));

/*************Test*************/

/****************************Set Union******************************/
