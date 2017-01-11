class Person {
	constructor(name) {
		this.name = name;
		this.distance_traveled = 0;
		this.sayName = () => console.log(`Hello, my name is ${this.name}`);
		this.saySomething = param => console.log(`${this.name} says ${param}`);
		this.crawl = () => {
			this.distance_traveled += 1;
			console.log(`${this.name} is crawling`);
		};
		this.walk = () => {
			this.distance_traveled += 3;
			console.log(`${this.name} is walking`);
		};
		this.run = () => {
			this.distance_traveled += 10;
			console.log(`${this.name} is running`);
		};
	}
}

let person = new Person('PJ');

person.crawl();
console.log(person.distance_traveled);

class Ninja {
	constructor(name, cohort) {
		this.name = name;
		this.cohort = cohort;
		this.beltLevel = 'yellow-belt';
		this.levelUp = () => {
			this.beltLevel = 'black-belt';
		};
	}
}
