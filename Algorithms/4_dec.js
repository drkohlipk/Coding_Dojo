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

sList.prototype.reverse = function() {
	if (!this.head) {
		return this;
	} else {
		var current = this.head,
			after = current.next;
		current.next = null;
		while (after) {
			this.head = current;
			current = after;
			after = current.next;
			current.next = this.head;
		}
		this.head = current;
		return this;
	}
};

myList = new sList();
console.log(myList.add(4));
console.log(myList.add(3));
console.log(myList.add(2));
console.log(myList.add(1));
console.log(myList.reverse());
