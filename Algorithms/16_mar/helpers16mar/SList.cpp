#include "SList.h"

SList::SList()
{
	head = NULL;
	tail = NULL;
}

void SList::addFront(int val)
{
	node* tempNode = new node;
	tempNode -> value = val;
	tempNode -> next = head;
	if (!head) tail = tempNode;
	head = tempNode;
}

void SList::addBack(int val)
{
	node* tempNode = new node;
	tempNode -> value = val;
	tempNode -> next = NULL;
	if (!tail)
	{
		head = tempNode;
	}
	else
	{
		tail -> next = tempNode;
	}
	tail = tempNode;
}

void SList::printList()
{
	if (!head)
	{
		std::cout << "List is empty" << std::endl;
		return;
	}

	node* currNode = head;

	while (currNode)
	{
		std::cout << currNode -> value << std::endl;
		currNode = currNode -> next;
	}
}

node* SList::findNode(int val)
{
	if (!head)
	{
		std::cout << "List is empty" << std::endl;
		return NULL;
	}

	node* currNode = head;

	while (currNode)
	{
		if (currNode -> value == val) return currNode;
		currNode = currNode -> next;
	}

	std::cout << "Node not found" << std::endl;
	return NULL;
}

bool SList::remKnownNode(node* delNode)
{
	if (!delNode || !delNode -> next)
	{
		std::cout << "Error: Unable to remove this node, either not provided or last node" << std::endl;
		return false;
	}

	node* nextNode = delNode -> next;
	delNode -> value = nextNode -> value;
	delNode -> next = nextNode -> next;
	delete nextNode;

	return true;
}

void SList::swapVals(node *n1, node *n2)
{
	if (!n1 || !n2) throw std::invalid_argument("Either or both nodes passed are NULL");

	int temp = n1 -> value;
	n1 -> value = n2 -> value;
	n2 -> value = temp;
}

void SList::partition(int partVal)
{
	if (!head) throw std::out_of_range("List empty");

	node* bigNode = head;
	node* smallNode = head -> next;

	while (smallNode)
	{
		if (bigNode -> value >= partVal && smallNode -> value < partVal) swapVals(bigNode, smallNode);
		if (bigNode -> value < partVal) bigNode = bigNode -> next;
		if (smallNode -> value >= partVal) smallNode = smallNode -> next;
	}
}

int SList::getLength()
{
	if (!head) throw std::out_of_range("List empty");

	int count = 0;
	node* currNode = head;

	while (currNode)
	{
		count++;
		currNode = currNode -> next;
	}

	return count;
}

int SList::getNum(int length)
{
	if (length < 0) throw std::invalid_argument("Must provide a positive length");

	int power = 0, num = 0;
	node* currNode = head;

	while (power < length)
	{
		int multiplier = pow(10, power++);
		num += currNode -> value * multiplier;
		currNode = currNode -> next;
		std::cout << num << std::endl;
	}

	return num;
}

void SList::makeSList(int num)
{
	int currNum = 0;

	while (num > 0)
	{
		currNum = num;
		num /= 10;
		currNum -= (num * 10);
		addBack(currNum);
	}
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
