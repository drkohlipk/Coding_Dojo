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

	def addBack(self, val):
		if not self.head:
			self.addFront(val)
			return

		tempNode = Node(val)
		currNode = self.head

		while currNode.next:
			currNode = currNode.next

		currNode.next = tempNode

	def printList(self):
		currNode = self.head
		arr = "[ "

		while currNode:
			arr += `currNode.value` + ", "
			currNode = currNode.next

		arr += "]"
		print arr

	def back(self):
		currNode = self.head

		while (currNode.next):
			currNode = currNode.next

		return currNode

	def removeBack(self):
		if not self.head:
			print "List is empty"
			return
		elif not self.head.next:
			self.head = None
			return

		currNode = self.head.next
		prevNode = self.head

		while currNode.next:
			prevNode = currNode
			currNode = prevNode.next

		prevNode.next = None

	def move_min_to_front(self):
		if not self.head:
			print "List is empty"
			return

		currNode = self.head
		prevNode = self.head
		minNode = self.head

		while currNode.next:
			if currNode.next.value < minNode.value:
				minNode = currNode.next
				prevNode = currNode

			currNode = currNode.next

		if minNode == self.head:
			return

		prevNode.next = minNode.next
		minNode.next = self.head
		self.head = minNode

	def move_max_to_back(self):
		if not self.head:
			print "List is empty"
			return

		currNode = self.head
		prevNode = self.head
		maxNode = self.head

		while currNode.next:
			if currNode.next.value > maxNode.value:
				maxNode = currNode.next
				prevNode = currNode

			currNode = currNode.next

		if currNode == maxNode:
			return
		if maxNode == self.head:
			self.head = maxNode.next
		else:
			prevNode.next = maxNode.next

		currNode.next = maxNode
		maxNode.next = None

myList = SList()

myList.addFront(8)
myList.addFront(6)
myList.addFront(7)
myList.addFront(5)
myList.addFront(3)
myList.addFront(9)
myList.addFront(41)

myList.addBack(1)

myList.printList()

print "BREAK BREAK BREAK"

myList.move_min_to_front()

myList.printList()
