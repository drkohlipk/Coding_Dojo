/****************************Bind****************************/
$(document).ready(() => {
	var newObject = {
		name: "West Virginia, Montani semper liberi"
	};

	var customObject = {
		name: 'California, Eureka',
		onClick: function(myParam) {
			console.log("I've been clicked!");
			console.log(myParam, "I've been passed by bind!");
			console.log(this.name);
		}
	};

	$('button').click(customObject.onClick.bind(customObject,
		"Bind this argument!"));
});
/****************************Bind****************************/

/************************Call and Apply************************/
function Ninja(name, age) {
	this.name = name;
	this.age = age;
}

function BlackBelt(name, age) {
	Ninja.call(this, name, age);
	this.belt = 'black';
}

function YellowBelt(name, age) {
	Ninja.apply(this, [name, age]);
	this.belt = 'yellow';
}
var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
console.log(bB.name);
console.log(yB.name);

function levelUp() {
	console.log(this.name + " has learned a new kata, in " + this.gender +
		" favorite language: " + this.language);
}


var person = {
	name: 'Lisa',
	gender: 'her',
	language: 'JavaScript, duh!'
};


levelUp.call(person);
/************************Call and Apply************************/
