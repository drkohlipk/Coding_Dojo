#include <iostream>
#include "helpers/SList.h"

int main(int argc, char const *argv[]) {
	SList myList;

	std::cout << myList.front() << std::endl;

	myList.addFront(8);
	myList.addFront(6);
	myList.addFront(7);
	myList.addFront(5);
	myList.addFront(3);
	myList.addFront(0);
	myList.addFront(9);

	myList.printList();

	std::cout << "break break break" << std::endl;

	std::cout << myList.contains(14) << std::endl;
	std::cout << myList.contains(6) << std::endl;

	std::cout << "break break break" << std::endl;

	std::cout << myList.front() << std::endl;

	std::cout << "break break break" << std::endl;

	myList.removeFront();

	myList.printList();
	return 0;
}
