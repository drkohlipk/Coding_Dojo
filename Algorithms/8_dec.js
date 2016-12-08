/************************Start singly linked lists*****************************/
/******************************Base Functions**********************************/
function sList() {
	this.head = null;
}

function Node(val) {
	this.value = val;
	this.next = null;
}

sList.prototype.add = function(val) {
	var node = new Node(val);
	if (!this.head) {
		this.head = node;
	} else {
		var current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = node;
	}
	return this;
};
/******************************Base Functions**********************************/

sList.prototype.makeLoop = function(val) {
	if (!this.head) { //if this list does not have a head...
		return this;
	}
	var current = this.head,
		temp;
	while (current.next) { //iterate through the list and look for a node value corresponding to the val argument
		if (current.value == val) {
			temp = current; //store the found node in temp
		}
		current = current.next;
	}
	current.next = temp; //set the last node's next to temp
	return this;
};

sList.prototype.hasLoop = function() {
	if (!this.head) { //if this list does not have a head...
		return null;
	}
	var turtle = this.head, //set the walker to the head
		heir = turtle.next; //set the runner to the node after head
	while (heir) { //while the runner isn't null...
		if (turtle === heir) { //if at any point the walker and runner point to the same node
			return turtle; //return that node.
		}
		turtle = turtle.next; //make the walker (turtle) move at a rate of one node at a time
		heir = heir.next.next; //make the runner (heir (no, this is no misspelt!)) move at a rate of two nodes at a time
	}
	return null; //if a loop is not found, return null
};

sList.prototype.breakLoop = function() {
	var walk2 = this.hasLoop(); //create walk2 (variable to store either the node or null depending on whether or not the list has a loop)
	if (!walk2) { //if walk2 is null (no list exists)...
		return this;
	}
	var walk1 = this.head; //assuming walk2 is a node, set walk1 to the head of the list
	while (walk1 !== walk2.next) { //while the current node from the beginning of the list (walk1) does not equal walk2's next (walk 2 is inside of the loop!)
		walk1 = walk1.next; //increment both walk1 and 2 at a rate of one node at a time
		walk2 = walk2.next;
	}
	walk2.next = null; //set walk2's next to null when walk1 and walk2.next are equal to one another (break the loop, this was based on the pattern as discussed in class)
	return this;
};

sList.prototype.printVals = function() { //function to print the values of the list for testing purposes
	if (!this.head) {
		console.log("Empty list");
		return this;
	}
	var current = this.head;
	while (current.next) {
		console.log(current.value);
		current = current.next;
	}
	console.log(current.value);
	console.log("This is the end");
	return this;
};
/***************Uncomment below to test, change as you see fit!****************/
// myList = new sList();
// myList.printVals();
// myList.add("t");
// myList.add("a");
// myList.add("c");
// myList.add("o");
// myList.add("c");
// myList.add("a");
// myList.add("t");
// myList.printVals();
//
// myList.makeLoop("o");
//
// console.log(myList.hasLoop());
//
// myList.breakLoop();
//
// myList.printVals();
// console.log(myList.hasLoop());
/**************************End singly linked lists*****************************/

/************************Start doubly linked lists*****************************/
function dList() { //create empty dList
	this.head = null;
	this.tail = null;
}

function dNode(val) { //create unpaired node
	this.value = val;
	this.prev = null;
	this.next = null;
}

dList.prototype.addDnode = function(val) { //adds node to end of list
	var node = new dNode(val); //create a new node based on the value passed as an argument
	if (!this.head) { //if the list does not have a head...
		this.head = node; //set the head to point to the new node
		this.tail = node; //set the tail to point to the new node (doubly linked!)
		return this;
	}
	this.tail.next = node; //if head does exist...set the tail node's next to point to the new node
	node.prev = this.tail; //set the new node's prev value ot the tail node
	this.tail = node; //set the tail pointer to point at the new node
	return this;
};

dList.prototype.insertAfter = function(val, at) { //inserts new node with a value of val after a node with value of at
	if (!this.head) { //if the list does not have a head...run addDnode to insert a new node into the list
		addDnode(val);
		return this;
	}
	var node = new dNode(val), //assuming there is a head, create a new node
		current = this.head; //set current to the head of the list
	while (current.next) { //as long as there is a current.next...
		if (current.value == at) { //if the value of the current node is equal to the at argument
			node.prev = current; //set the new node's prev to the current node
			node.next = current.next; //set the new node's next to the current.next node
			current.next.prev = node; //set the node after current's prev to the new node
			current.next = node; //set the current node's next to the new node
			return this;
		}
		current = current.next; //continue to iterate through the list assuming the node corresponding to at isn't found
	}
	this.add(val); //if you get to the end of the list and a node corresponding to val isn't found, add the new node to the end of the list
	return this;
};

dList.prototype.printVals = function() { //function to print the values of the list for testing purposes
	if (!this.head) {
		console.log("Empty list");
		return this;
	}
	var current = this.head;
	while (current.next) {
		console.log(current.value);
		current = current.next;
	}
	console.log(current.value);
	console.log("This is the end");
	return this;
};

/***************Uncomment below to test, change as you see fit!****************/

// myList = new dList();
// myList.printVals();
// myList.addDnode("t");
// myList.addDnode("a");
// myList.addDnode("c");
// myList.addDnode("o");
// myList.addDnode("c");
// myList.addDnode("a");
// myList.addDnode("t");
// myList.printVals();
//
// myList.insertAfter("f", "o");
//
// myList.printVals();
/**************************End doubly linked lists*****************************/
