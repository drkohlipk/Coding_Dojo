import static java.lang.System.out;
import helpers.Node;
import helpers.SList;

public class LL_AddFront {
	public static void main(String[] args) {
		SList myList = new SList();

		myList.addFront(4);
		myList.addFront(6);
		myList.addFront(8);

		myList.printList();

		myList.removeFront();

		myList.printList();
	}
}
