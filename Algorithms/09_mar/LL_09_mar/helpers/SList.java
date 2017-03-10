package helpers;

import static java.lang.System.out;

public class SList {
	Node head;

	public SList() {
		this.head = null;
	}

	public void addFront(int val) {
		Node tempNode = new Node(val);
		tempNode.next = this.head;
		this.head = tempNode;
	}

	public void addBack(int val) {
		if (this.head == null) {
			this.addFront(val);
			return;
		}

		Node tempNode = new Node(val);
		Node currNode = this.head;

		while (currNode.next != null) {
			currNode = currNode.next;
		}

		currNode.next = tempNode;
	}

	public void printList() {
		Node currNode = this.head;
		String arr = "[ ";

		while (currNode != null) {
			arr += currNode.value + ", ";
			currNode = currNode.next;
		}

		arr += "]";
		out.println(arr);
	}

	public Node back() {
		Node currNode = this.head;

		while (currNode.next != null) {
			currNode = currNode.next;
		}

		return currNode;
	}

	public void removeBack() {
		if (this.head == null) {
			out.println("List is empty");
			return;
		} else if (this.head.next == null) {
			this.head = null;
			return;
		}

		Node currNode = this.head.next,
			prevNode = this.head;

		while (currNode.next != null) {
			prevNode = currNode;
			currNode = prevNode.next;
		}

		prevNode.next = null;
	}

	public void moveMinToFront() {
		if (this.head == null) {
			out.println("List is empty");
			return;
		}

		Node currNode = this.head,
			prevNode = this.head,
			min = this.head;

		while (currNode.next != null) {
			if (currNode.next.value < min.value) {
				min = currNode.next;
				prevNode = currNode;
			}

			currNode = currNode.next;
		}

		if (min == this.head) return;

		prevNode.next = min.next;
		min.next = this.head;
		this.head = min;
	}

	public void moveMaxToBack() {
		if (this.head == null) {
			out.println("List is empty");
			return;
		}

		Node currNode = this.head,
			prevNode = this.head,
			max = this.head;

		while (currNode.next != null) {
			if (currNode.next.value > max.value) {
				max = currNode.next;
				prevNode = currNode;
			}

			currNode = currNode.next;
		}

		if (currNode == max) return;
		if (max == head) head = max.next;
		else prevNode.next = max.next;

		currNode.next = max;
		max.next = null;
	}
}
