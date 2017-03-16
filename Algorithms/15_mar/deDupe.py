class Node:
	def __init__(self, val):
		self.value = val
		self.next = None

class SList:
	def __init__(self):
		self.head = None

	def addNode(self, val):
		tempNode = Node(val)
		tempNode.next = self.head
		self.head = tempNode

	def remNode(self, val):
		if not self.head:
			print 'List is empty'
			return

		currNode = self.head

		while currNode.next:
			if currNode.next.value == val:
				retNode = currNode.next
				currNode.next = currNode.next.next
				retNode.next = None
				return retNode
			currNode = currNode.next

		return 'Not in list'

	def remKnownNode(self, prevNode):
		if not prevNode or not prevNode.next:
			print 'Error: node was not supplied'
			return

		retNode = prevNode.next
		prevNode.next = prevNode.next.next
		retNode.next = None
		return retNode

	def deDupe(self):
		if not self.head:
			print 'List is empty'
			return

		valDict = {}
		currNode = self.head
		valDict[self.head.value] = 1

		while currNode.next:
			if currNode.next.value not in valDict: valDict[currNode.next.value] = 1
			else: self.remKnownNode(currNode)
			currNode = currNode.next
			if not currNode: return

	def printList(self):
		if not self.head:
			print 'List is empty'
			return

		currNode = self.head

		while currNode:
			print currNode.value
			currNode = currNode.next

myList = SList()

myList.addNode(9)
myList.addNode(8)
myList.addNode(6)
myList.addNode(7)
myList.addNode(5)
myList.addNode(3)
myList.addNode(0)
myList.addNode(9)

myList.printList()

myList.deDupe()

print '\n'
print 'BREAK BREAK BREAK'
print '\n'

myList.printList()
