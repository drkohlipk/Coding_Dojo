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

	def printList(self):
		curr = self.head
		while (curr):
			print curr.value
			curr = curr.next

class Node:
	def __init__(self, val):
		self.value = val
		self.next = None

myList = SList()

myList.addFront(4)
myList.addFront(6)
myList.addFront(8)

myList.printList()

myList.removeFront()

myList.printList()
