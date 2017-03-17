package helpers16mar;

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
		if (this.head == null) {
			throw new java.lang.IllegalArgumentException("List empty");
		}

		Node currNode = this.head;

		while (currNode != null) {
			out.println(currNode.value);
			currNode = currNode.next;
		}
	}

	public Node findNode(int val) {
		if (this.head == null) {
			throw new java.lang.IllegalArgumentException("List empty");
		}

		Node currNode = this.head;

		while (currNode != null) {
			if (currNode.value == val) return currNode;
			currNode = currNode.next;
		}

		out.println("Node not in list");
		return null;
	}

	public void remKnownNode(Node delNode) {
		if (delNode == null || delNode.next == null) {
			throw new java.lang.IllegalArgumentException("Node passed is either null or the last node");
		}

		delNode.value = delNode.next.value;
		delNode.next = delNode.next.next;
	}

	public void swapVals(Node n1, Node n2) {
		if (n1 == null || n2 == null) {
			throw new java.lang.IllegalArgumentException("One or both nodes passed are null");
		}

		int temp = n1.value;
		n1.value = n2.value;
		n2.value = temp;
	}

	public void partition(int partVal) {
		if (this.head == null) {
			throw new java.lang.IllegalArgumentException("List empty");
		}

		Node bigNode = this.head;
		Node smallNode = this.head.next;

		while (smallNode != null) {
			if (bigNode.value >= partVal && smallNode.value < partVal) this.swapVals(bigNode, smallNode);
			if (bigNode.value < partVal) bigNode = bigNode.next;
			if (smallNode.value >= partVal) smallNode = smallNode.next;
		}
	}
}
