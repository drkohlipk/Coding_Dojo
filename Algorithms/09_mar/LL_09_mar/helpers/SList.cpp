#include "SList.h"
#include <iostream>
#include <string>

SList::SList()
{
	head = NULL;
}

void SList::addFront(int val)
{
	node * tempNode = new node;
	tempNode -> value = val;
	tempNode -> next = head;
	head = tempNode;
}

void SList::addBack(int val)
{
	if (!head)
	{
		addFront(val);
		return;
	}

	node * tempNode = new node;
	node * currNode = head;
	tempNode -> value = val;
	tempNode -> next = NULL;

	while (currNode -> next)
	{
		currNode = currNode -> next;
	}

	currNode -> next = tempNode;
}

void SList::printList()
{
	node * currNode = head;
	std::string holder = "[ ";

	while (currNode)
	{
		holder += std::to_string(currNode -> value) + ", ";
		currNode = currNode -> next;
	}

	holder += "]";

	std::cout << holder << std::endl;
}

node * SList::back()
{
	if (!head) return head;

	node * currNode = head;

	while (currNode -> next)
	{
		currNode = currNode -> next;
	}

	return currNode;
}

void SList::removeBack()
{
	if (!head)
	{
		std::cout << "List is empty" << std::endl;
		return;
	}
	else if (!head -> next)
	{
		head = NULL;
		return;
	}

	node * prevNode = head;
	node * currNode = head -> next;

	while (currNode -> next)
	{
		prevNode = currNode;
		currNode = prevNode -> next;
	}

	prevNode -> next = NULL;

	delete currNode;
}

void SList::moveMinToFront()
{
	if (!head)
	{
		std::cout << "List is empty" << std::endl;
		return;
	}

	node * prevMin = head;
	node * min = head;
	node * currNode = head;

	while (currNode -> next)
	{
		if (currNode -> next -> value < min -> value)
		{
			prevMin = currNode;
			min = currNode -> next;
		}

		currNode = currNode -> next;
	}

	if (min == head) return;

	prevMin -> next = min -> next;
	min -> next = head;
	head = min;
}

void SList::moveMaxToBack()
{
	if (!head)
	{
		std::cout << "List is empty" << std::endl;
		return;
	}

	node * prevMax = head;
	node * max = head;
	node * currNode = head;

	while (currNode -> next)
	{
		if (currNode -> next -> value > max -> value)
		{
			prevMax = currNode;
			max = currNode -> next;
		}
		currNode = currNode -> next;
	}

	if (currNode == max) return;
	if (max == head) head = max -> next;
	else prevMax -> next = max -> next;

	currNode -> next = max;
	max -> next = NULL;
}

SList::~SList()
{
	node * p = head;
	node * q = head;

	while (q)
	{
		p = q;
		q = p -> next;

		if (q) delete p;
	}
}
