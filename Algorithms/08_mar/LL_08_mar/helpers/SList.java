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

	public void printList() {
		Node currNode = this.head;
		String lst = "[ ";

		while (currNode != null) {
			lst += currNode.value + ", ";

			currNode = currNode.next;
		}

		lst += "]";

		out.println(lst);
	}

	public int getLength() {
		Node currNode = this.head;
		int counter = 0;

		while (currNode != null) {
			counter++;

			currNode = currNode.next;
		}

		return counter;
	}

	public int getMax() {
		if (this.head == null) {
			out.println("List is empty");
			return -1;
		}

		Node currNode = this.head.next;
		int max = this.head.value;

		while (currNode != null) {
			if (currNode.value > max) {
				max = currNode.value;
			}

			currNode = currNode.next;
		}

		return max;
	}

	public int getMin() {
		if (this.head == null) {
			out.println("List is empty");
			return -1;
		}

		Node currNode = this.head.next;
		int min = this.head.value;

		while (currNode != null) {
			if (currNode.value < min) {
				min = currNode.value;
			}

			currNode = currNode.next;
		}

		return min;
	}

	public int getAvg() {
		if (this.head == null) {
			out.println("List is empty");
			return -1;
		}

		Node currNode = this.head.next;
		int avg = this.head.value,
			length = 1;

		while (currNode != null) {
			avg += currNode.value;
			length++;

			currNode = currNode.next;
		}

		return avg / length;
	}
}
