#ifndef SList_h
#define SList_h

#include <iostream>
#include <map>

struct node
{
	char value;
	node* prev;
	node* next;
};

class SList
{
private:
	node* head;
	node* tail;

public:
	SList();
	void addFront(char val);
	void addBack(char val);
	void addNode(node* n);
	node* findNode(char val);
	void printList();
	bool isPalindrome();
	node* isIntersection(SList l2);
	node* isCircular();
	node* remFront();
	~SList();
};

#endif
