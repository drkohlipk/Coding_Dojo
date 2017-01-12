/*jshint esversion: 6*/
/************************Quicksort in Place*************************/

/**************Outline**************
 *
 *	swap() is a simple swap of 2 values in the passed array
 *	partition() sorts everything between the passed left and right indices of the given array and returns a partition index
 *	quicksort() executes a callback on partition() to retrieve a partition index based on the given left and right indices
 *	and then recursively sorts what is on the left and right of that partition index.
 *
 **************Outline**************/

const swap = (arr, x, y) => {
	var temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};

const partition = (arr, left, right) => {
	var partIdx = left,
		partVal = arr[right];

	for (let i = left; i < right; i++) {
		if (arr[i] < partVal) {
			swap(arr, i, partIdx);
			partIdx++;
		}
	}
	swap(arr, partIdx, right);
	return partIdx;
};

const quicksort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let partIdx = partition(arr, left, right);

		quicksort(arr, left, partIdx - 1);
		quicksort(arr, partIdx + 1, right);
	}
	return arr;
};

/*************Test*************/

var arr = [6, 2, 8, 1, 3, 9, 14, 7, 7];

console.log(quicksort(arr));

/*************Test*************/

/************************Quicksort in Place*************************/



/****************************Mergesort******************************/

/**************Outline**************
 *
 *	mergeSort() takes in two *sorted* arrays and merges them into a single array based upon which value is greater while
 *	simultaneously iterating through the two passed arrays
 *
 **************Outline**************/
function mergeSort(arr1, arr2) {
	var i = 0;
	var j = 0;
	var arr = [];
	while (arr.length < arr1.length + arr2.length) {
		if (arr1[i] < arr2[j] || j == arr2.length) {
			arr.push(arr1[i]);
			i++;
		} else if (arr2[j] < arr1[i] || i == arr1.length) {
			arr.push(arr2[j]);
			j++;
		}
	}
	return arr;
}

/*************Test*************/

arr1 = [4, 6, 9, 11, 20, 44, 90];
arr2 = [1, 7, 8, 10];

console.log(mergeSort(arr1, arr2));

/*************Test*************/

/****************************Mergesort******************************/
