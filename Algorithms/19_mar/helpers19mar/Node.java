package helpers19mar;

public class Node {
	public int value;
	public Node next;

	public Node(int val) {
		this.value = val;
		this.next = null;
	}

	public void addBack(int val) {
		Node tempNode = new Node(val);
		Node currNode = this;
		while (currNode.next != null) {
			currNode = currNode.next;
		}
		currNode.next = tempNode;
	}
}
