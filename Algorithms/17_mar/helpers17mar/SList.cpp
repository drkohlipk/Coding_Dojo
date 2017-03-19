#include "SList.h"

SList::SList()
{
	head = NULL;
	tail = NULL;
}

void SList::addFront(char val)
{
	node* tempNode = new node;
	tempNode -> value = val;
	tempNode -> prev = NULL;
	tempNode -> next = head;

	if (!head) tail = tempNode;
	else head -> prev = tempNode;

	head = tempNode;
}

void SList::addBack(char val)
{
	node* tempNode = new node;
	tempNode -> value = val;
	tempNode -> prev = tail;
	tempNode -> next = NULL;

	if (!head) head = tempNode;
	else tail -> next = tempNode;

	tail = tempNode;
}

void SList::addNode(node* n)
{
	tail -> next = n;
	tail = n;
}

node* SList::findNode(char val)
{
	node* currNode = head;

	while (currNode)
	{
		if (currNode -> value == val) return currNode;
		currNode = currNode -> next;
	}

	return NULL;
}

void SList::printList()
{
	if (!head) throw std::out_of_range("List empty");

	node* currNode = head;

	while (currNode)
	{
		std::cout << currNode -> value << " -> ";
		currNode = currNode -> next;
	}
}

node* SList::remFront()
{
	if (!head) throw std::out_of_range("List empty");

	node* remNode = head;
	head = remNode -> next;
	if (head) head -> prev = NULL;
	remNode -> next = NULL;

	return remNode;
}

bool SList::isPalindrome()
{
	if (!head) throw std::out_of_range("List empty");

	node* beg = head;
	node* end = tail;

	while (beg)
	{
		if (beg -> value != end -> value) return false;
		if (end -> prev == beg || beg -> next == end -> prev) return true;

		beg = beg -> next;
		end = end -> prev;
	}

	return false;
}

node* SList::isIntersection(SList l2)
{
	if (!head || !l2.head) throw std::invalid_argument("One or both lists are empty");

	std::map<node*, int> addys;
	node* l1Curr = head;
	node* l2Curr = l2.head;

	while (l1Curr)
	{
		addys[l1Curr] = 1;
		l1Curr = l1Curr -> next;
	}
	while (l2Curr)
	{
		if (addys[l2Curr]) return l2Curr;
		l2Curr = l2Curr -> next;
	}

	return NULL;
}

node* SList::isCircular()
{
	if (!head) throw std::out_of_range("List empty");

	node* slowPtr = head;
	node* fastPtr = head -> next;
	bool isLoop = false;

	while (fastPtr && fastPtr -> next)
	{
		if (slowPtr == fastPtr)
		{
			fastPtr = fastPtr -> next;
			slowPtr = head;
			isLoop = true;
			break;
		}

		slowPtr = slowPtr -> next;
		fastPtr = fastPtr -> next -> next;
	}

	if (slowPtr == fastPtr) return head;

	while (isLoop)
	{
		if (slowPtr -> next == fastPtr -> next) return slowPtr -> next;

		slowPtr = slowPtr -> next;
		fastPtr = fastPtr -> next;
	}
	return NULL;
}

SList::~SList()
{
	node* p = head;
	node* q = head;

	while (q)
	{
		p = q;
		q = p -> next;

		if (q) delete p;
	}
}
