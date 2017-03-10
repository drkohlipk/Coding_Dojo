#include <iostream>
#include "helpers/SList.h"

int main(int argc, char const *argv[]) {
	SList myList;

	myList.addFront(8);
	myList.addFront(6);
	myList.addFront(7);
	myList.addFront(5);
	myList.addFront(3);
	myList.addFront(4);
	myList.addFront(0);

	myList.addBack(1);

	myList.printList();

	std::cout << "BREAK BREAK BREAK" << std::endl;

	myList.moveMinToFront();

	myList.printList();

	return 0;
}
