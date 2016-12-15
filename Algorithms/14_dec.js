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

/**************************Sarah, Buzz, Jo, Alex, and PJ solution***********************/
/*************Implied*************/
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
/*************Implied*************/

// BSTree.prototype.height = function() {
// 	if (!this.root) { //if there is no root..
// 		return 0; //return 0 (there is no height)
// 	}
// 	var height = this.root.height(); //assuming there's a root, run the node prototype height function starting at root
// 	return height; //return the height
// };
//
// BSTNode.prototype.height = function() {
// 	var heightL = 0, //create a beginning left and right height
// 		heightR = 0;
// 	if (this.left) { //if there is a node on the left...
// 		heightL = this.left.height(); //run the node prototype height function on the left node
// 	}
// 	if (this.right) { //if there is a node on the right...
// 		heightR = this.right.height(); //run the node prototype height function on the right node
// 	}
// 	if (heightL >= heightR) { //if the returned height of this node's left children is greater than or equal to the height of the right children...
// 		return heightL + 1; //return the height on the left plus 1
// 	} else { //if the height on the right is bigger...
// 		return heightR + 1; //return the height on the right plus 1
// 	}
// };

BSTree.prototype.toArray = function() {
	if (!this.root) { //if there is no root...
		return []; //return an empty array
	}
	return this.root.toArray([]); //assuming there is a root, run the node prototype toArray function starting at the root and passing an empty array as an argument
};

BSTNode.prototype.toArray = function(arr) {
	if (this.left) { //if there is a node on the left of the current node...
		arr = this.left.toArray(arr); //run the node prototype toArray function on the left node and store the returned node in arr
	}
	if (this.right) { //if there is a node on the right of the current node...
		arr = this.right.toArray(arr); //run the node prototype toArray function on the right node and store the returned node in arr
	}
	arr.push(this.value); //push the value of the current node to arr (uncomment to not sort on add)
	/**********uncomment to sort array on add*********/
	// if (arr.length === 0 || (this.value >= arr[arr.length - 1])) { //if the array's length is 0 or the current node's value is greater than or equal to the last value of the array...
	// 	arr.push(this.value); //push the current node's value into the array
	// 	return arr; //return the array
	// } else { //if the array's length is greater than 0 and the current node's value is less than the last value of the array...
	// 	for (var i = arr.length - 1; i >= 0; i--) { //starting at the end of the array and ending at the beginning, start to iterate through the array...
	// 		if (this.value > arr[i - 1]) { //if the current node's value is greater than the value at the index of i-1...
	// 			for (var j = arr.length; j > i; j--) { //starting at the end of the array and ending at i+1...
	// 				arr[j] = arr[j - 1]; //shift the indexes up one
	// 			}
	// 			arr[i] = this.value; //once you reach index of i, set this index to equal the current node's value
	// 			break; //break the outside for loop
	// 		}
	// 	}
	// }
	/**********uncomment to sort array on add*********/
	return arr; //return the current array
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
// myBST.add(2);
// myBST.add(9);
//
// console.log(myBST.toArray());
/*************Tests*************/

/**************************Sarah, Buzz, Jo, Alex, and PJ solution***********************/

/********************************Team Snailed It solution*******************************/
BSTree.prototype.height = function(node = this.root) {
	if (!node) {
		return 0;
	}
	return 1 + Math.max(this.height(node.left), this.height(node.right));
};

/*************Tests*************/
var myBST = new BSTree();
myBST.add(10);
myBST.add(5);
myBST.add(15);
myBST.add(3);
myBST.add(7);
myBST.add(13);
myBST.add(17);
myBST.add(2);
myBST.add(9);

console.log(myBST.height());
/*************Tests*************/
/********************************Team Snailed It solution*******************************/
