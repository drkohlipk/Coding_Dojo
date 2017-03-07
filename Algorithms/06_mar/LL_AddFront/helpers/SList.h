#ifndef SList_h
#define SList_h

#include <iostream>

struct node {
	int value;
	node * next;
};

class SList {
private:
	node * head;

public:
	SList();

	void addFront(int val);

	void printList();

	~SList();
};

#endif
