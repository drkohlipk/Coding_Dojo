#include "helpers/SList.h"
#include <iostream>

int main(int argc, char const *argv[]) {
	SList myList;

	myList.addFront(8);
	myList.addFront(6);
	myList.addFront(7);
	myList.addFront(5);
	myList.addFront(3);
	myList.addFront(0);
	myList.addFront(9);

	myList.printList();

	std::cout << myList.getAvg() << std::endl;
	return 0;
}
