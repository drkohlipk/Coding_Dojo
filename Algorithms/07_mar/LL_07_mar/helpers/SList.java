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

	public Node removeFront() {
		Node tempNode = this.head;
		this.head = tempNode.next;
		tempNode.next = null;
		return tempNode;
	}

	public boolean contains(int val) {
		Node current = this.head;

		while (current != null) {
			if (current.value == val) {
				return true;
			}

			current = current.next;
		}

		return false;
	}

	public Node front() {
		return this.head;
	}

	public void printList() {
		Node current = this.head;

		while (current != null) {
			out.println(current.value);
			current = current.next;
		}
	}
}
