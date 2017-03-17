#ifndef SList_h
#define SList_h

#include <iostream>
#include <math.h>

struct node
{
	int value;
	node* next;
};

class SList
{
private:
	node* head;
	node* tail;

public:
	SList();

	void addFront(int val);

	void addBack(int val);

	void printList();

	node* findNode(int val);

	bool remKnownNode(node* delNode);

	void swapVals(node* n1, node* n2);

	void partition(int partVal);

	int getLength();

	int getNum(int length);

	void makeSList(int num);

	~SList();
};

#endif
