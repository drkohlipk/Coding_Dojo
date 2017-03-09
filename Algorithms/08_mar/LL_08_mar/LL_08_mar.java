import static java.lang.System.out;
import helpers.Node;
import helpers.SList;

public class LL_08_mar {
	public static void main(String[] args) {
		SList myList = new SList();

		myList.addFront(8);
		myList.addFront(6);
		myList.addFront(7);
		myList.addFront(5);
		myList.addFront(3);
		myList.addFront(0);
		myList.addFront(9);

		out.println(myList.getAvg());
	}
}
