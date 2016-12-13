/*********************Constructor functions*********************/
function BSTree() {
	this.root = null;
}

function BSTNode(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}
/*********************Constructor functions*********************/

/******************BSTree prototype functions*******************/
BSTree.prototype.add = function(val) {
	var node = new BSTNode(val); //creates new node based on the val argument
	if (this.root === null) { //if there is not yet a root to the BST...
		this.root = node; //create a root and set it equal to the new node
		return this;
	}
	var current = this.root; //since there is a root, create a variable named current and set it equal to the root
	while (current) { //while current is not null...
		if (val < current.value) { //if the val argument is less than the current node's value...
			if (current.left) { //if current's left is not null...
				current = current.left; //set current equal current's left
			} else { //if current's left is null...
				current.left = node; //set current's left equal to the new node
				break; //break the while loop! (don't want to loop forever while continuing to add the new node each iteration)
			}
		} else { //if the val argument is greater than or equal to the current node's value...
			if (current.right) { //if current's right is not null...
				current = current.right; //set current equal to current's right
			} else { //if current's right is null...
				current.right = node; //set current's right equal to the new node
				break; //break the while loop! (don't want to loop forever while continuing to add the new node each iteration)
			}
		}
	}
	return this;
};

BSTree.prototype.contains = function(val) {
	var current = this.root; //create a variable named current and set it equal to the BST's root
	while (current) { //while current is not null...
		if (current.value == val) { //if current's value is equal to the val argument...
			return true;
		} else if (val < current.value) { //if the val argument is less than current's value...
			current = current.left; //set current equal to current's left
		} else { //if the val argument is greater than or equal to current's value...
			current = current.right; //set current equal to current's right
		}
	}
	return false; //assuming we've reached an ending point (null) while searching the BST using left/right comparisons, the value has not been found, return null
};

/*************Tests*************/
// var myBST = new BSTree();
// myBST.add(10);
// myBST.add(5);
// myBST.add(15);
// myBST.add(3);
// myBST.add(7);
// myBST.add(13);
// myBST.add(17);
//
// console.log(myBST.contains(10));
// console.log(myBST.contains(5));
// console.log(myBST.contains(15));
// console.log(myBST.contains(17));
// console.log(myBST.contains(14));
/*************Tests*************/

/******************BSTree prototype functions*******************/

/***************Charlie's Node prototype examples***************/
BSTree.prototype.add = function(val) {
	if (!this.root) { //if the BST's root is null...
		this.root = new BSTNode(val); //set the root equal to a new node created with the val argument
		return;
	}
	return this.root.add(val); //if the root is not null, run the node prototype add function on the root with the val argument
};

BSTNode.prototype.add = function(val) {
	if (val < this.value) { //if val is less than the current node's value...
		if (this.left) { //if the current node's left is not null...
			return this.left.add(val); //run the node prototype add function on the current node's left and val argument
		}
		this.left = new BSTNode(val); //if the current node's left IS null, set the left equal to a new node created with the val argument
		return;
	} else { //if val is greater than or equal to the current node's value...
		if (this.right) { //if the current node's right is not null...
			return this.right.add(val); //run the node prototype add function on the current node's right and val argument
		}
		this.right = new BSTNode(val); //if the current node's right IS null, set the right equal to a new node created with the val argument
		return;
	}
};

BSTree.prototype.contains = function(val) {
	if (!this.root) { //if the BST's root is null...
		return false;
	}
	return this.root.contains(val);  //if the root is not null, run the node prototype contains function on the root with the val argument
};

BSTNode.prototype.contains = function(val) {
	if (this.value === val) { //if the current node's value is equal to the val argument...
		return true;
	}
	if (val < this.value) { //if the val argument is less than the current node's value...
		return (this.left) ? this.left.contains(val) : false; //if the current node's left is not null, run the node prototype contains function on the current node's left with the val argument, otherwise, return false
	} else { //if the val argument is greater than or equal to the current node's value...
		return (this.right) ? this.right.contains(val) : false; //if the current node's right is not null, run the node prototype contains function on the current node's right with the val argument, otherwise, return false
	}
};

/*************Tests*************/
// var myBST = new BSTree();
// myBST.add(10);
// myBST.add(5);
// myBST.add(15);
// myBST.add(3);
// myBST.add(7);
// myBST.add(13);
// myBST.add(17);
//
// console.log(myBST.contains(10));
// console.log(myBST.contains(5));
// console.log(myBST.contains(15));
// console.log(myBST.contains(17));
// console.log(myBST.contains(14));
/*************Tests*************/
/***************Charlie's Node prototype examples***************/
