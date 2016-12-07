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

sList.prototype.copy = function() {
	var list = new sList(),
		current = this.head;
	while (current) {
		list.add(current.value);
		current = current.next;
	}
	return list;
};

function kthLast(list, pos) {
	list.reverse();
	var current = list.head,
		count = 1;
	while (current) {
		if (count == pos) {
			return current;
		}
		current = current.next;
		count++;
	}
	return "Out of scope!";
}

function isPalindrome(list) {
	var list1 = list.copy(),
		list2 = list.reverse(),
		curr1 = list1.head,
		curr2 = list2.head;
	while (curr1) {
		if (curr1.value !== curr2.value) {
			return false;
		} else {
			curr1 = curr1.next;
			curr2 = curr2.next;
		}
	}
	return true;
}

myList = new sList();
myList.add("t");
myList.add("a");
myList.add("c");
myList.add("o");
myList.add("c");
myList.add("a");
myList.add("t");

// console.log(kthLast(myList, 2));
console.log(isPalindrome(myList));
