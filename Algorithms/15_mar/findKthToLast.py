class Node:
	def __init__(self, val):
		self.value = val
		self.next = None

class SList:
	def __init__(self):
		self.head = None

	def addFront(self, val):
		tempNode = Node(val)
		tempNode.next = self.head
		self.head = tempNode

	def remNode(self, val):
		if not self.head:
			print 'List is empty'
			return

		currNode = self.head

	def printList(self):
		if not self.head:
			print 'List is empty'
			return

		currNode = self.head

		while currNode:
			print currNode.value
			currNode = currNode.next

	def findKthToLast(self, k):
		if not self.head:
			print 'List is empty'
			return

		count = 0
		currNode = self.head

		while currNode:
			count += 1
			currNode = currNode.next

		if count < k: return 'k is bigger than length'

		count -= k
		frontCount = 0
		currNode = self.head

		while frontCount < count:
			frontCount += 1
			currNode = currNode.next

		return currNode


myList = SList()

myList.addFront(8)
myList.addFront(6)
myList.addFront(7)
myList.addFront(5)
myList.addFront(3)
myList.addFront(0)

myList.printList()

print myList.findKthToLast(4)
