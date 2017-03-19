#include "helpers17mar/SList.h"

int main(int argc, char const* argv[])
{
	SList myList1;
	SList myList2;

	myList1.addFront('8');
	myList1.addFront('a');
	myList1.addFront('c');
	myList1.addFront('o');
	myList1.addFront('c');
	myList1.addFront('a');
	myList1.addFront('t');

	node* n = myList1.findNode('o');

	myList1.addNode(n);

	std::cout << "\nBREAK BREAK BREAK\n" << std::endl;

	std::cout << myList1.isCircular() << std::endl;

	return 0;
}
