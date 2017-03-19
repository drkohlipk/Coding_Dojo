package helpers17mar;

import java.lang.*;
import java.util.Hashtable;

public class SList {
	Node head;
	Node tail;

	public SList() {
		this.head = null;
		this.tail = null;
	}

	public void addFront(char val) {
		Node tempNode = new Node(val);
		tempNode.next = this.head;
		if (this.head == null) this.tail = tempNode;
		else this.head.prev = tempNode;
		this.head = tempNode;
	}

	public void addNode(Node n) {
		this.tail.next = n;
	}

	public void addBack(char val) {
		Node tempNode = new Node(val);
		tempNode.prev = this.tail;
		if (this.head == null) this.head = tempNode;
		else this.tail.next = tempNode;
		this.tail = tempNode;
	}

	public Node remFront() {
		if (this.head == null) throw new IllegalArgumentException("List empty");

		Node remNode = this.head;
		this.head = remNode.next;
		if (this.head != null) this.head.prev = null;
		remNode.next = null;

		return remNode;
	}

	public Node findNode(char val) {
		Node currNode = this.head;

		while (currNode != null) {
			if (currNode.value == val) return currNode;
			currNode = currNode.next;
		}

		return null;
	}

	public void printList() {
		if (this.head == null) throw new IllegalArgumentException("List empty");

		Node currNode = this.head;

		while (currNode != null) {
			System.out.print(currNode.value);
			System.out.print(" -> ");
			currNode = currNode.next;
		}
	}

	public boolean isPalindrome() {
		if (this.head == null) return false;

		StringBuilder sb = new StringBuilder();
		Node currNode = this.head;

		while (currNode != null) {
			sb.append(currNode.value);
			currNode = currNode.next;
		}

		String forward = sb.toString();
		String backward = sb.reverse().toString();

		if (forward.equals(backward)) return true;
		return false;
	}

	public Node isIntersection(SList l2) {
		if (this.head == null || l2.head == null) return null;

		Hashtable<Node, Integer> addys = new Hashtable<Node, Integer>();
		Node l1Node = this.head;
		Node l2Node = l2.head;

		while (l1Node != null) {
			addys.put(l1Node, 1);
			l1Node = l1Node.next;
		}
		while (l2Node != null) {
			if (addys.containsKey(l2Node)) return l2Node;
			l2Node = l2Node.next;
		}

		return null;
	}

	public Node isCircular() {
		if (this.head == null) throw new IllegalArgumentException("List empty");

		Node slowNode = this.head;
		Node fastNode = this.head.next;
		boolean isLoop = false;

		while (fastNode != null && fastNode.next != null) {
			if (slowNode == fastNode) {
				slowNode = this.head;
				fastNode = fastNode.next;
				isLoop = true;
				break;
			}

			slowNode = slowNode.next;
			fastNode = fastNode.next.next;
		}

		if (slowNode == fastNode) return this.head;

		while (isLoop) {
			if (slowNode.next == fastNode.next) return slowNode.next;

			slowNode = slowNode.next;
			fastNode = fastNode.next;
		}

		return null;
	}
}
