import static java.lang.System.out;
import helpers.SList;
import helpers.Node;

class LL_09_mar {
	public static void main(String[] args) {
		SList myList = new SList();

		myList.addFront(8);
		myList.addFront(6);
		myList.addFront(7);
		myList.addFront(5);
		myList.addFront(3);
		myList.addFront(9);
		myList.addFront(0);

		myList.addBack(1);

		myList.printList();

		out.println("BREAK BREAK BREAK");

		myList.moveMaxToBack();

		myList.printList();
	}
}
