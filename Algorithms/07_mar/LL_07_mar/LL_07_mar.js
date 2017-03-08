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

	removeFront() {
		let tempNode = this.head;
		this.head = tempNode.next;
		tempNode.next = null;
		return tempNode;
	}

	contains(val) {
		let currNode = this.head;

		while (currNode) {
			if (currNode.value == val) {
				return true;
			}

			currNode = currNode.next;
		}

		return false;
	}

	front() {
		return this.head;
	}

	printList() {
		let currNode = this.head;

		while (currNode) {
			console.log(currNode.value);
			currNode = currNode.next;
		}
	}
}

var myList = new SList();

console.log(myList.front());

myList.addFront(8);
myList.addFront(6);
myList.addFront(7);
myList.addFront(5);
myList.addFront(3);
myList.addFront(0);
myList.addFront(9);

myList.printList();

console.log("break break break");

console.log(myList.contains(14));
console.log(myList.contains(3));

console.log("break break break");

console.log(myList.front());

console.log("break break break");

myList.removeFront();

myList.printList();
