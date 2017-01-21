/*jshint esversion: 6*/

/****************************MaxHeap******************************/

/**************Outline**************
 *
 * class MaxHeap creates a constructor for our heap (empty array)
 *
 * swap() is a prototype function that takes two indices of the heap and swaps them
 *
 * repairUp() checks to see if the last added value to the heap is where it belongs by checking to see if its parent
 * is smaller than itself and then swapping itself appropriately...mainly used with the add function
 *
 * repairDown() checks to see if the first value in the heap is in the correct position by checking to see if its children
 * are bigger than it and swapping itself appropriately...mainly used with the remove function
 *
 * add() adds a value to the last position of the heap and then calls repairUp to ensure its correct position
 *
 * remove() swaps the first and last value of the heap, pops off the last value (was the first, so biggest in this
 * context) and then runs the repairDown function to ensure the correct position of the first (was last) value
 *
 * show() returns the first (biggest) value in the heap
 *
 * heapify() creates a Max Heap out of a given array using repairDown on the first element with children and then working
 * its way to the top of the heap
 *
 * heapSort() takes a given array, creates a Max Heap out of it and then sorts and returns a sorted array by swapping
 * the first and last values (which decrements each time) and then running repairDown without changing the swapped values
 *
 **************Outline**************/

/*******Class Constructor*******/
class MaxHeap {
	constructor(arr = []) {
		this.heap = arr;
	}
}
/*******Class Constructor*******/

/***********Prototypes**********/
MaxHeap.prototype.swap = function(idx1, idx2) {
	var temp = this.heap[idx1];
	this.heap[idx1] = this.heap[idx2];
	this.heap[idx2] = temp;
	return this;
};

MaxHeap.prototype.repairUp = function() {
	var idx = this.heap.length - 1;
	while (idx > 0) {
		let parentIdx = Math.floor((idx-1)/2);
		if (this.heap[idx] > this.heap[parentIdx]) {
			this.swap(idx, parentIdx);
			idx = parentIdx;
		} else {
			break;
		}
	}
	return this;
};

MaxHeap.prototype.repairDown = function(i = 0, j = this.heap.length) {
	var idx = i;
	while ((idx * 2 + 1) < j) {
		let max = this.heap[idx * 2 + 1] >= this.heap[idx * 2 + 2] || 2 * idx + 2 == j ? idx * 2 + 1 : idx * 2 + 2;
		if (this.heap[max] > this.heap[idx]) {
			this.swap(max, idx);
			idx = max;
		} else {
			break;
		}
	}
	return this;
};

MaxHeap.prototype.add = function(num) {
	this.heap.push(num);
	this.repairUp();
	return this;
};

MaxHeap.prototype.remove = function() {
	this.swap(0, this.heap.length-1);
	var num = this.heap.pop();
	this.repairDown();
	return this;
};

MaxHeap.prototype.show = function() {
	return this.heap[0];
};
/***********Prototypes**********/

/************Functions**********/
function heapify(arr) {
	var heap = new MaxHeap(arr),
		parentIdx = Math.floor((heap.heap.length - 2) / 2);
	while (parentIdx >= 0) {
		heap.repairDown(parentIdx);
		parentIdx--;
	}
	return heap;
}

function heapSort(arr) {
	var heap = heapify(arr),
		j = heap.heap.length-1;
	while (j > 0) {
		heap.swap(0, j);
		heap.repairDown(0, j);
		j--;
	}
	return heap;
}
/************Functions**********/

/*************Test*************/

arr = [7, 3, 100, 5, 62, 150, 22, 40, 19, 14];

console.log(heapSort(arr));

/*************Test*************/

/****************************MinHeap******************************/
