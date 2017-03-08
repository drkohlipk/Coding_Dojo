class Node:
	def __init__(self, val):
		self.value = val
		self.next = None

class SList:
	def __init__(self):
		self.head = None

	def addFront(self, val):
		myNode = Node(val)
		myNode.next = self.head
		self.head = myNode

	def removeFront(self):
		tempNode = self.head
		self.head = tempNode.next
		tempNode.next = None
		return tempNode

	def contains(self, val):
		curr = self.head
		while (curr):
			if curr.value == val:
				return True
			curr = curr.next
		return False

	def front(self):
		return self.head

	def printList(self):
		curr = self.head
		while (curr):
			print curr.value
			curr = curr.next

myList = SList();

print myList.front();

myList.addFront(8);
myList.addFront(6);
myList.addFront(7);
myList.addFront(5);
myList.addFront(3);
myList.addFront(0);
myList.addFront(9);

myList.printList();

print "break break break";

print myList.contains(14);
print myList.contains(3);

print "break break break";

print myList.front();

print "break break break";

myList.removeFront();

myList.printList();
