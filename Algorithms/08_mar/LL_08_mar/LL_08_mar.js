class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class SList {
	constructor() {
		this.head = null;
	}

	addFront(val) {
		let tempNode = new Node(val);
		tempNode.next = this.head;
		this.head = tempNode;
	}

	printList() {
		let currNode = this.head,
			arr = '[ ';

		while (currNode) {
			arr += currNode.value + ', ';
			currNode = currNode.next;
		}

		arr += ']';

		console.log(arr);
	}

	getLength() {
		let currNode = this.head,
			counter = 0;

		while (currNode) {
			counter++;
			currNode = currNode.next;
		}

		return counter;
	}

	getMax() {
		if (!this.head) {
			return 'empty list';
		}

		let currNode = this.head.next,
			max = this.head.value;

		while (currNode) {
			if (currNode.value > max) {
				max = currNode.value;
			}

			currNode = currNode.next;
		}

		return max;
	}

	getMin() {
		if (!this.head) {
			return 'empty list';
		}

		let currNode = this.head.next,
			min = this.head.value;

		while (currNode) {
			if (currNode.value < min) {
				min = currNode.value;
			}

			currNode = currNode.next;
		}

		return min;
	}

	getAvg() {
		if (!this.head) {
			return 'empty list';
		}

		let currNode = this.head.next,
			avg = this.head.value,
			length = 1;

		while (currNode) {
			avg += currNode.value;
			length++;
			currNode = currNode.next;
		}

		return avg / length;
	}
}

var myList = new SList();

myList.addFront(8);
myList.addFront(6);
myList.addFront(7);
myList.addFront(5);
myList.addFront(3);
myList.addFront(0);
myList.addFront(9);

myList.printList();

console.log(myList.getAvg());
