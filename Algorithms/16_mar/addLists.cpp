#include "helpers16mar/SList.h"

int main(int argc, char const* argv[])
{
	SList l1;
	SList l2;

	l1.addFront(6);
	l1.addFront(1);
	l1.addFront(7);

	l1.printList();

	std::cout << "\nBREAK BREAK BREAK\n" << std::endl;

	l2.addFront(2);
	l2.addFront(9);
	l2.addFront(5);

	l2.printList();

	std::cout << "\nBREAK BREAK BREAK\n" << std::endl;

	int len1 = l1.getLength();
	int len2 = l2.getLength();
	int addem = l1.getNum(len1) + l2.getNum(len2); //expect 912

	std::cout << addem << std::endl;

	SList resList;

	resList.makeSList(addem);

	std::cout << "\nBREAK BREAK BREAK\n" << std::endl;

	resList.printList();

	return 0;
}
