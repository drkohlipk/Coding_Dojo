/*jshint esversion: 6*/

/****************************MinHeap******************************/

/**************Outline**************
 *
 * class Heap creates a constructor for our heap (empty array)
 *
 * swap() is a prototype function that takes two indices of the heap and swaps them
 *
 * repairUp() checks to see if the last added value to the heap is where it belongs by checking to see if its parent
 * is bigger than itself and then swapping itself appropriately...mainly used with the add function
 *
 * repairDown() checks to see if the first value in the heap is in the correct position by checking to see if its children
 * are smaller than it and swapping itself appropriately...mainly used with the remove function
 *
 * add() adds a value to the last position of the heap and then calls repairUp to ensure its correct position
 *
 * remove() swaps the first and last value of the heap, pops off the last value (was the first, so smallest in this
 * context) and then runs the repairDown function to ensure the correct position of the first (was last) value
 *
 * show() returns the first (smallest) value in the heap
 *
 **************Outline**************/

/*******Class Constructor*******/
class Heap {
	constructor() {
		this.heap = [];
	}
}
/*******Class Constructor*******/

/***********Prototypes**********/
Heap.prototype.swap = function(idx1, idx2) {
	var temp = this.heap[idx1];
	this.heap[idx1] = this.heap[idx2];
	this.heap[idx2] = temp;
	return this;
};

Heap.prototype.repairUp = function() {
	var idx = this.heap.length - 1;
	while (idx > 0) {
		let parentIdx = Math.floor((idx-1)/2);
		if (this.heap[idx] < this.heap[parentIdx]) {
			this.swap(idx, parentIdx);
			idx = parentIdx;
		} else {
			break;
		}
	}
	return this;
};

Heap.prototype.repairDown = function() {
	var idx = 0;
	while ((idx * 2 + 1) < this.heap.length) {
		let min = this.heap[idx * 2 + 1] < this.heap[idx * 2 + 2] ? idx * 2 + 1 : idx * 2 + 2;
		if (this.heap[min] < this.heap[idx]) {
			this.swap(min, idx);
			idx = min;
		} else {
			break;
		}
	}
	return this;
};

Heap.prototype.add = function(num) {
	this.heap.push(num);
	this.repairUp();
	return this;
};

Heap.prototype.remove = function() {
	this.swap(0, this.heap.length-1);
	var num = this.heap.pop();
	this.repairDown();
	console.log(num);
	return this;
};

Heap.prototype.show = function() {
	return this.heap[0];
};
/***********Prototypes**********/

/*************Test*************/

var myheap = new Heap();

myheap.add(10);
myheap.add(25);
myheap.add(40);
myheap.add(11);
myheap.add(16);
myheap.add(12);
myheap.add(10);
myheap.add(17);
myheap.add(8);

console.log(myheap.heap);

myheap.remove();

console.log(myheap.heap);

/*************Test*************/

/****************************MinHeap******************************/
