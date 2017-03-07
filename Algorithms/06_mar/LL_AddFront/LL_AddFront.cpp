#include <iostream>
#include "helpers/SList.h"

int main(int argc, char const *argv[]) {
	SList myList;

	myList.addFront(4);
	myList.addFront(6);
	myList.addFront(8);

	myList.printList();

	myList.removeFront();

	myList.printList();

	return 0;
}
