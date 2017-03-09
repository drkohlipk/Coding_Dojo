class SList:
	def __init__(self):
		self.head = None

	def addFront(self, val):
		tempNode = Node(val)
		tempNode.next = self.head
		self.head = tempNode

	def printList(self):
		currNode = self.head
		lst = '[ '
		while currNode:
			lst += `currNode.value` + ', '
			currNode = currNode.next
		lst += ']'
		print lst

	def getLength(self):
		currNode = self.head
		counter = 0
		while currNode:
			counter += 1
			currNode = currNode.next
		return counter

	def getMax(self):
		if not self.head:
			return 'no list'
		currNode = self.head.next
		maximum = self.head.value
		while currNode:
			if currNode.value > maximum:
				maximum = currNode.value
			currNode = currNode.next
		return maximum

	def getMin(self):
		if not self.head:
			return 'no list'
		currNode = self.head.next
		minimum = self.head.value
		while currNode:
			if currNode.value < minimum:
				minimum = currNode.value
			currNode = currNode.next
		return minimum

	def getAvg(self):
		if not self.head:
			return 'no list'
		length = 1
		currNode = self.head.next
		avg = self.head.value
		while currNode:
			avg += currNode.value
			length += 1
			currNode = currNode.next
		return avg / length

class Node:
	def __init__(self, val):
		self.value = val
		self.next = None


myList = SList()

myList.addFront(8)
myList.addFront(6)
myList.addFront(7)
myList.addFront(5)
myList.addFront(3)
myList.addFront(0)
myList.addFront(9)

myList.printList()

print myList.getAvg()
