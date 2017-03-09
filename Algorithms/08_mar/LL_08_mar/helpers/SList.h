#ifndef SList_h
#define SList_h

struct node
{
	int value;
	node * next;
};

class SList
{
private:
	node * head;
public:
	SList();

	void addFront(int val);

	void printList();

	int getLength();

	int getMax();

	int getMin();

	int getAvg();

	~SList();
};

#endif
