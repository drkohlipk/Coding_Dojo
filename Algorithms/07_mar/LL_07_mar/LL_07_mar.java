import static java.lang.System.out;
import helpers.SList;
import helpers.Node;

public class LL_07_mar {
	public static void main(String[] args) {
		SList myList = new SList();

		out.println(myList.front());

		myList.addFront(8);
		myList.addFront(6);
		myList.addFront(7);
		myList.addFront(5);
		myList.addFront(3);
		myList.addFront(0);
		myList.addFront(9);

		myList.printList();

		out.println("break break break");

		out.println(myList.contains(14));
		out.println(myList.contains(3));

		out.println("break break break");

		out.println(myList.front());

		out.println("break break break");

		myList.removeFront();

		myList.printList();
	}
}
