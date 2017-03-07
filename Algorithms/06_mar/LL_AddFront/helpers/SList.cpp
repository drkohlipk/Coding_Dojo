#include <iostream>
#include "SList.h"

SList::SList()
{
	head = NULL;
}

void SList::addFront(int val)
{
	node * temp = new node;
	temp -> value = val;
	if (head == NULL) temp -> next = NULL;
	else temp -> next = head;

	head = temp;
}

node * SList::removeFront()
{
	node * temp = head;
	head = temp -> next;
	temp -> next = NULL;
	return temp;
}

void SList::printList()
{
	node * curr = head;

	while (curr)
	{
		std::cout << curr -> value << std::endl;

		curr = curr -> next;
	}
}

SList::~SList()
{
	node * p = head;
	node * q = head;
	while(q)
	{
		p = q;
		q = p -> next;
		if (q) delete p;
	}
}
