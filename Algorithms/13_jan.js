/*jshint esversion: 6*/

/****************************Radixsort******************************/

/**************Outline**************
 *
 * places() takes in the array, finds the max and then finds and returns the number of digits are in the max number
 *
 * makeBucket() takes in the array and the current iterative (used to calculate the power of which to raise 10 to
 * get the correct keys for the bucket) and creates an map object with keys corresponding to the numbers that exist in the
 * current 10^digit place (won't create superfluous keys)
 *
 * makeArr() takes the bucket that was returned in makeBucket and creates an array based on the current sort iteration
 *
 * radixSort() takes an array and iteratively sorts the array based on respective digit values
 *
 **************Outline**************/
const places = arr => {
	var max = Math.max(...arr),
		counter = 0;
	while (max > 1) {
		max /= 10;
		counter++;
	}
	return counter;
};

const makeBucket = (arr, places) => {
	var bucket = new Map();
	for (let i = 0; i < arr.length; i++) {
		let key = Math.floor((arr[i] / Math.pow(10, places)) % 10);
		if (bucket[key]) {
			bucket[key].push(arr[i]);
		} else {
			bucket[key] = [arr[i]];
		}
	}
	return bucket;
};

const makeArr = bucket => {
	var arr = [];
	for (let key in bucket) {
		for (let i = 0; i < bucket[key].length; i++) {
			arr.push(bucket[key][i]);
		}
	}
	return arr;
};

const radixSort = arr => {
	var numPlaces = places(arr),
		counter = 0;

	while (counter < numPlaces) {
		let bucket = makeBucket(arr, counter);
		arr = makeArr(bucket);
		counter++;
	}
	return arr;
};

/*************Test*************/

var arr = [400, 3, 0, 98072345, 4, 146, 23, 1999];

console.log(radixSort(arr));

/*************Test*************/

/****************************Radixsort******************************/
