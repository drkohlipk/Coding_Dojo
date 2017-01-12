/*jshint esversion: 6*/

/****************************Mergesort******************************/

/**************Outline**************
 *
 * merge() takes in two arrays and merges them into a single array based upon which value is greater while
 * simultaneously iterating through the two passed arrays and returns the resultant sorted arrays
 *
 * mergeSort() takes in one array to sort and recursively calls itself, breaking the array into individual
 * elements and then merges them into a sorted array using the merge function
 *
 **************Outline**************/
const merge = (arr1, arr2) => {
	var i = 0;
	var j = 0;
	var result = [];
	while (result.length < arr1.length + arr2.length) {
		if (arr1[i] <= arr2[j] || j == arr2.length) {
			result.push(arr1[i]);
			i++;
		} else if (arr2[j] < arr1[i] || i == arr1.length) {
			result.push(arr2[j]);
			j++;
		}
	}
	return result;
};

const mergeSort = arr => {
	if (arr.length != 1) {
		let half = Math.floor(arr.length / 2);
		arr = merge(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half, arr.length)));
	}
	return arr;
};

/*************Test*************/

arr = [4, 11, 2, 4, 75, 6, 15, 1];

console.log(mergeSort(arr));

/*************Test*************/

/****************************Mergesort******************************/
