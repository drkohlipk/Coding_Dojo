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

	addBack(val) {
		if (!this.head) {
			this.addFront(val);
			return;
		}

		let tempNode = new Node(val),
			currNode = this.head;

		while (currNode.next) {
			currNode = currNode.next;
		}

		currNode.next = tempNode;
	}

	printList() {
		let currNode = this.head,
			arr = "[ ";

		while (currNode) {
			arr += currNode.value + ", ";
			currNode = currNode.next;
		}

		arr += "]";
		console.log(arr);
	}

	back() {
		let currNode = this.head;

		while (currNode.next) {
			currNode = currNode.next;
		}

		return currNode;
	}

	removeBack() {
		if (!this.head) {
			console.log("List is empty");
			return;
		} else if (!this.head.next) {
			this.head = null;
			return;
		}

		let currNode = this.head.next,
			prevNode = this.head;

		while (currNode.next) {
			prevNode = currNode;
			currNode = prevNode.next;
		}

		prevNode.next = null;
	}

	moveMinToFront() {
		if (!this.head) {
			console.log("List is empty");
			return;
		}

		let currNode = this.head,
			prevNode = this.head,
			minNode = this.head;

		while (currNode.next) {
			if (currNode.next.value < minNode.value) {
				minNode = currNode.next;
				prevNode = currNode;
			}

			currNode = currNode.next;
		}

		if (minNode == this.head) return;

		prevNode.next = minNode.next;
		minNode.next = this.head;
		this.head = minNode;
	}

	moveMaxToBack() {
		if (!this.head) {
			console.log("List is empty");
			return;
		}

		let currNode = this.head,
			prevNode = this.head,
			maxNode = this.head;

		while (currNode.next) {
			if (currNode.next.value > maxNode.value) {
				maxNode = currNode.next;
				prevNode = currNode;
			}

			currNode = currNode.next;
		}

		if (currNode == maxNode) return;
		if (maxNode == this.head) this.head = maxNode.next;
		else prevNode.next = maxNode.next;

		currNode.next = maxNode;
		maxNode.next = null;
	}
}

var myList = new SList();

myList.addFront(8);
myList.addFront(6);
myList.addFront(7);
myList.addFront(5);
myList.addFront(3);
myList.addFront(9);
myList.addFront(41);

myList.addBack(1);

myList.printList();

console.log("BREAK BREAK BREAK");

myList.moveMaxToBack();

myList.printList();
