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

	def remFront(self):
		if not self.head:
			print 'List is empty'
			return

		delNode = self.head
		self.head = delNode.next
		delNode.next = None

		return delNode

	def findNode(self, val):
		if not self.head:
			return 'List is empty'

		currNode = self.head

		while currNode:
			if currNode.value == val: return currNode

			currNode = currNode.next

		return 'Node not found'

	def printList(self):
		if not self.head:
			print 'List is empty'
			return

		currNode = self.head

		while currNode:
			print currNode.value
			currNode = currNode.next

	def remKnownNode(self, delNode):
		if not delNode: return 'No node provided'

		if self.head == delNode:
			self.head = delNode.next
			delNode.next = None
			return delNode

		currNode = self.head

		while currNode:
			if currNode.next == delNode:
				currNode.next = delNode.next
				delNode.next = None
				return delNode

			currNode = currNode.next

		return 'Error: Node provided not in list'

myList = SList()

myList.addFront(8)
myList.addFront(6)
myList.addFront(7)
myList.addFront(5)
myList.addFront(3)
myList.addFront(0)
myList.addFront(9)

myList.printList()

remNode = myList.findNode(8)
print myList.remKnownNode(remNode)

print '\n'
print 'BREAK BREAK BREAK'
print '\n'

myList.printList()
