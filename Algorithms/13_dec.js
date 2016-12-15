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

BSTree.prototype.min = function() {
    if (!this.root) { //if the root doesn't exist...
        return false; //return false
    }
    var min = this.root; //set min to the root node
    while (min.left) { //while a left node exists on min...
        min = min.left; //set min equal to it's left node
    }
    return min.value; //once you reach a null value on the left, return the current min's value
};

BSTree.prototype.max = function() {
    if (!this.root) { //if the root doesn't exist...
        return false; //return false
    }
    var max = this.root; //set max to the root node
    while (max.right) { //while a right node exists on max
        max = max.right; //set max equal to it's right node
    }
    return max.value; //once you reach a null value on the right, return the current max's value
};

// BSTree.prototype.size = function() {
//     if (!this.root) { //if the root doesn't exist...
//         return 0; //return a size of 0
//     }
//     var count = this.root.counter(0); //assuming a root exists, run the node counter prototype function on it with an intial count value of 0 and create a variable to store the final count
//     return count; //return the count variable
// };

// BSTNode.prototype.counter = function(count) {
//     if (this.left) { //if the current node has a left node...
//         count = this.left.counter(count); //run the counter prototype function on the current node's left node recursively and store the returned count to the count parameter
//     }
//     if (this.right) { //if the current node has a right node...
//         count = this.right.counter(count); //run the counter prototype function on the current node's right node recursively and store the returned count to the count parameter
//     }
//     return count + 1; //if the current node's left and right are null...return the current count + 1
// };

/******************BSTree Size Recursive*******************/
BSTree.prototype.size = function(node = this.root) {
    if (!node) {
        return 0
    }
    return 1 + this.size(node.left) + this.size(node.right)
}

/*************Tests*************/
var myBST = new BSTree();
myBST.add(10);
myBST.add(5);
myBST.add(15);
myBST.add(3);
myBST.add(7);
myBST.add(13);
myBST.add(17);
myBST.add(20);
myBST.add(50);
myBST.add(100);
myBST.add(90);

console.log(myBST.size());
/*************Tests*************/

/******************BSTree prototype functions*******************/