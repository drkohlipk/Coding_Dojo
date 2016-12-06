function reverse(arr, beg, end) {
	var offset = 0;
	for (var i = beg; i < (beg + end)/2; i++) {
		var temp = arr[i];
		arr[i] = arr[end-offset-1];
		arr[end-offset-1] = temp;
		offset++;
	}
}

function rotate(arr, num) {
	var rots = num % arr.length;
	if (rots === 0) {
		return arr;
	}
	reverse(arr, 0, arr.length-rots);
	reverse(arr, arr.length-rots, arr.length);
	reverse(arr, 0, arr.length);
	return arr;
}

var array1 = [1,2,3,4,5,6];
console.log(rotate(array1, 3));
