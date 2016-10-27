function pushFront(arr, x) {
	for (var i = arr.length; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = x;
	return arr;
}

console.log(pushFront([2, 3, 4], 1));

function popFront(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		arr[i] = arr[i + 1];
	}
	arr.length--;
	return arr;
}

console.log(popFront([1, 2, 3, 4]));

function insertAt(arr, x, y) {
	for (var i = arr.length; i > x; i--) {
		arr[i] = arr[i - 1];
	}
	arr[x] = y;
	return arr;
}

console.log(insertAt([1, 2, 3, 4], 3, 14));

function removeAt(arr, x) {
	for (var i = x; i < arr.length - 1; i++) {
		arr[i] = arr[i + 1];
	}
	arr.length--;
	return arr;
}

console.log(removeAt([1, 2, 2, 3], 3));
