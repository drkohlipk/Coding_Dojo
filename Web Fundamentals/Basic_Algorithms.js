function print255() {
	for (var i = 1; i <= 255; i++) {
		console.log(i);
	}
}
print255();

function printOdds255() {
	for (var i = 1; i <= 255; i += 2) {
		console.log(i);
	}
}
printOdds255();

function printSum255() {
	var sum = 0;
	for (var i = 0; i <= 255; i++) {
		sum += i;
		console.log('New Number: ' + i + ' Sum: ' + sum);
	}
}
printSum255();

function printArray(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}
printArray([1, 3, 5, 7, 9, 13]);

function findMax(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	console.log(max);
}
findMax([-3, -5, -7]);

function findAvg(arr) {
	var avg = arr[0];
	for (var i = 1; i < arr.length; i++) {
		avg += arr[i];
	}
	avg /= arr.length;
	console.log(avg);
}
findAvg([2, 10, 3]);

function oddArray() {
	var Y = [];
	for (var i = 1; i <= 255; i += 2) {
		Y.push(i);
	}
}
oddArray();

function greaterThanY(arr, Y) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > Y) {
			count++;
		}
	}
	console.log(count);
}
greaterThanY([1, 3, 5, 7], 3);

function squareValues(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] *= arr[i];
	}
}
squareValues([1, 5, 10, -2]);

function zeroNegs(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
}
zeroNegs([1, 5, 10, -2]);

function maxMinAvg(arr) {
	var max = arr[0],
		min = arr[0],
		avg = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
		avg += arr[i];
	}
	avg /= arr.length;
	var newArr = [max, min, avg];
	console.log(newArr);
}

maxMinAvg([1, 5, 10, -2]);

function shiftVals(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		arr[i] = arr[i + 1];
	}
	arr[arr.length - 1] = 0;
}
shiftVals([1, 5, 10, 7, -2]);

function numToStr(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 'Dojo';
		}
	}
	console.log(arr);
}
numToStr([-1, -3, 2]);
