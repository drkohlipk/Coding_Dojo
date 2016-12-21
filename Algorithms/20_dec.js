/***************************Constructor functions***************************/
function AdjList() {
	this.list = {}; //creates empty object to start with
	return this;
}
/***************************Constructor functions***************************/

/****************************Prototype functions****************************/
AdjList.prototype.AddVector = function(key) {
	this.list[key] = [];
	return this;
};

AdjList.prototype.RemVector = function(key) {
	for (let i in this.list) {
		for (let z = 0; z < this.list[i].length; z++) {
			if (this.list[i][z][key]) {
				this.list[i].splice(z, 1);
				z--;
			}
		}
	}
	delete this.list[key];
	return this;
};

AdjList.prototype.AddEdge = function(from, to, weight) { //creates connection between the two indexes
	let newObj = {};
	newObj[to] = weight;
	this.list[from].push(newObj);
	return this;
};

AdjList.prototype.RemEdge = function(from, to, weight) { //removes connection between the two indexes
	for (let i = 0; i < this.list[from].length; i++) {
		if (this.list[from][i][to] == weight) {
			this.list[from].splice(i, 1);
		}
	}
	return this;
};

AdjList.prototype.Adjacency = function(vec) { //returns all vectors that are accessible from the passed vector
	if (this.list[vec]) {
		return this.list[vec];
	}
	return false;
};


/*A little bit of a brute force method to follow, but it works!  Any ideas on optimization? (Aside from changing the structure of the initial graph?)*/
AdjList.prototype.Neighbors = function(vec) { //returns all neighbors of the passed vector
	let tempArr = []; //create empty array to store result
	for (let i = 0; i < this.list[vec].length; i++) { //for every item in the array stored at the key of vec...
		for (let l in this.list[vec][i]) { //for each object stored at the index of the array stored at the key of vec...
			for (let j = 0; j < this.list[l].length; j++) { //now search the array located at the key of l in this.list
				for (let k in this.list[l][j]) {
					if (k == vec) { //if the key in this second array matches that parameter passed as vec...
						tempArr.push(l); //push the outer key (connection) to the temp array
					}
				}
			}
		}
	}
	return tempArr;
};
/****************************Prototype functions****************************/

/***********************************Tests***********************************/
var myAdjList = new AdjList();
console.log(myAdjList.list);
myAdjList.AddVector("A");
myAdjList.AddVector("B");
myAdjList.AddVector("C");
console.log(myAdjList.list);
myAdjList.AddEdge("A", "B", 4);
myAdjList.AddEdge("A", "B", 2);
myAdjList.AddEdge("A", "C", 3);
myAdjList.AddEdge("B", "A", 1);
myAdjList.AddEdge("C", "A", 2);
console.log(myAdjList.list);
myAdjList.RemEdge("A", "B", 2);
console.log(myAdjList.list);
// myAdjList.RemVector("B");
console.log(myAdjList.list);
console.log(myAdjList.Adjacency("A"));
console.log(myAdjList.Neighbors("A"));
/***********************************Tests***********************************/
