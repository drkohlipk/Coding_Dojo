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

	printList() {
		let currNode = this.head;

		while (currNode) {
			console.log(currNode.value);
			currNode = currNode.next;
		}
	}
}

var myList = new SList();

myList.addFront(4);
myList.addFront(6);
myList.addFront(8);

myList.printList();

myList.removeFront();

myList.printList();
