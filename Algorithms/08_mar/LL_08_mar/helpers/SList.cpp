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

void SList::printList()
{
	node * currNode = head;
	std::string lst = "[ ";

	while (currNode)
	{
		lst += std::to_string(currNode -> value) + ", ";

		currNode = currNode -> next;
	}

	lst += "]";

	std::cout << lst << std::endl;
}

int SList::getLength()
{
	node * currNode = head;
	int count = 0;

	while (currNode)
	{
		count++;

		currNode = currNode -> next;
	}

	return count;
}

int SList::getMax()
{
	if (!head)
	{
		std::cout << "List is empty" << std::endl;
		return -1;
	}
	node * currNode = head -> next;
	int max = head -> value;

	while (currNode)
	{
		if (currNode -> value > max) max = currNode -> value;

		currNode = currNode -> next;
	}

	return max;
}

int SList::getMin()
{
	if (!head)
	{
		std::cout << "List is empty" << std::endl;
		return -1;
	}
	node * currNode = head -> next;
	int min = head -> value;

	while (currNode)
	{
		if (currNode -> value < min) min = currNode -> value;

		currNode = currNode -> next;
	}

	return min;
}

int SList::getAvg()
{
	if (!head)
	{
		std::cout << "List is empty" << std::endl;
		return -1;
	}
	node * currNode = head -> next;
	int avg = head -> value,
		length = 1;

	while (currNode)
	{
		avg += currNode -> value;
		length++;
		currNode = currNode -> next;
	}

	return avg / length;
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
