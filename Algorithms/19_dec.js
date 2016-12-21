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
				console.log(this.list[i][z][0]);
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
myAdjList.AddEdge("B", "C", 1);
myAdjList.AddEdge("C", "A", 2);
console.log(myAdjList.list);
// myAdjList.RemEdge("A", "B", 2);
// console.log(myAdjList.list);
myAdjList.RemVector("B");
console.log(myAdjList.list);
/***********************************Tests***********************************/
