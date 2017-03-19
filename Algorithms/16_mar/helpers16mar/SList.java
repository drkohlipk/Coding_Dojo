package helpers16mar;

import java.lang.*;

public class SList {
	Node head;
	Node tail;

	public SList() {
		this.head = null;
		this.tail = null;
	}

	public void addFront(int val) {
		Node tempNode = new Node(val);
		tempNode.next = this.head;
		if (this.head == null) this.tail = tempNode;
		this.head = tempNode;
	}

	public void addBack(int val) {
		Node tempNode = new Node(val);
		if (this.head == null) this.head = tempNode;
		else this.tail.next = tempNode;
		this.tail = tempNode;
	}

	public void printList() {
		if (this.head == null) {
			throw new IllegalArgumentException("List empty");
		}

		Node currNode = this.head;

		while (currNode != null) {
			System.out.println(currNode.value);
			currNode = currNode.next;
		}
	}

	public Node findNode(int val) {
		if (this.head == null) {
			throw new IllegalArgumentException("List empty");
		}

		Node currNode = this.head;

		while (currNode != null) {
			if (currNode.value == val) return currNode;
			currNode = currNode.next;
		}

		System.out.println("Node not in list");
		return null;
	}

	public void remKnownNode(Node delNode) {
		if (delNode == null || delNode.next == null) {
			throw new IllegalArgumentException("Node passed is either null or the last node");
		}

		delNode.value = delNode.next.value;
		delNode.next = delNode.next.next;
	}

	public void swapVals(Node n1, Node n2) {
		if (n1 == null || n2 == null) {
			throw new IllegalArgumentException("One or both nodes passed are null");
		}

		int temp = n1.value;
		n1.value = n2.value;
		n2.value = temp;
	}

	public void partition(int partVal) {
		if (this.head == null) {
			throw new IllegalArgumentException("List empty");
		}

		Node bigNode = this.head;
		Node smallNode = this.head.next;

		while (smallNode != null) {
			if (bigNode.value >= partVal && smallNode.value < partVal) this.swapVals(bigNode, smallNode);
			if (bigNode.value < partVal) bigNode = bigNode.next;
			if (smallNode.value >= partVal) smallNode = smallNode.next;
		}
	}

	public void makeList(int num) {
		while (num > 0) {
			int currNumber = num;
			num /= 10;
			this.addBack(currNumber - (num * 10));
		}
	}

	public int getLength() {
		int count = 0;
		Node currNode = this.head;
		while (currNode != null) {
			count++;
			currNode = currNode.next;
		}
		return count;
	}

	public int getNum(int length) {
		int power = 0,
			currNum = 0;
		Node currNode = this.head;
		while (power < length) {
			int multiplier = (int) Math.pow(10, power++);
			currNum += currNode.value * multiplier;
			currNode = currNode.next;
		}
		if (currNode != null) throw new IllegalArgumentException("Length provided is not big enough");
		return currNum;
	}
}
