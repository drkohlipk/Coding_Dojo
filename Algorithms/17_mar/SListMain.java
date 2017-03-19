import helpers17mar.Node;
import helpers17mar.SList;
import java.lang.*;

class SListMain {
	public static void main(String[] args) {
		SList myList1 = new SList();
		SList myList2 = new SList();

		myList1.addFront('8');
		myList1.addFront('a');
		myList1.addFront('c');
		myList1.addFront('o');
		myList1.addFront('c');
		myList1.addFront('a');
		myList1.addFront('t');

		Node n = myList1.findNode('o');

		myList1.addNode(n);

		System.out.println("\nBREAK BREAK BREAK\n");

		System.out.println(myList1.isCircular());
	}
}
