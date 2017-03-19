import helpers16mar.Node;
import helpers16mar.SList;

class addLists {
	public static void main(String[] args) {
		SList l1 = new SList();
		SList l2 = new SList();

		l1.makeList(617);

		l1.printList();

		System.out.println("\nBREAK BREAK BREAK\n");

		l2.makeList(295);

		l2.printList();

		System.out.println("\nBREAK BREAK BREAK\n");

		int len1 = l1.getLength();
		int len2 = l2.getLength();
		int addem = l1.getNum(len1) + l2.getNum(len2); //expect 912

		System.out.println(addem);

		SList resList = new SList();

		resList.makeList(addem);

		System.out.println("\nBREAK BREAK BREAK\n");

		resList.printList();
	}
}
