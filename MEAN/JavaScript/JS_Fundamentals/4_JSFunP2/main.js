const sumFromTo = (num1, num2) => {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum);
};

const findMin = arr => {
    let min = Number.POSITIVE_INFINITY;
    for (let val in arr) {
        if (arr[val] < min) {
            min = arr[val];
        }
    }
    return min;
};

const findAvg = arr => {
    let avg = arr[0];
    for (let i = 1; i < arr.length; i++) {
        avg += arr[i];
    }
    return avg/arr.length;
};

let arr = [1, 5, 90, 25, -3, 0];

let myObj = {
	sumFromTo: (num1, num2) => {
	    let sum = 0;
	    for (let i = num1; i <= num2; i++) {
	        sum += i;
	    }
	    console.log(sum);
	},
	findMin: arr => {
	    let min = Number.POSITIVE_INFINITY;
	    for (let val in arr) {
	        if (arr[val] < min) {
	            min = arr[val];
	        }
	    }
	    return min;
	},
	findAvg: arr => {
	    let avg = arr[0];
	    for (let i = 1; i < arr.length; i++) {
	        avg += arr[i];
	    }
	    return avg/arr.length;
	}
};

myObj.sumFromTo(1,3);

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
