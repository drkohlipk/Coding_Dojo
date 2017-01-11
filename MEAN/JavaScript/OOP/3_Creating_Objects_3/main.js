function VehicleConstructor (name, wheels, passengers, speed) {
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
	this.distance_travelled = 0;
}

VehicleConstructor.prototype.updateDistanceTravelled = function() {
	this.distance_travelled += this.speed;
};

VehicleConstructor.prototype.makeNoise = function() {
	console.log('Beep beep!');
};

VehicleConstructor.prototype.move = function() {
	this.updateDistanceTravelled();
	this.makeNoise();
};

VehicleConstructor.prototype.checkMiles = function() {
	console.log(this.distance_travelled);
};

VehicleConstructor.prototype.genVIN = function(num = 100000000) {
    this.vin = Math.floor(Math.random() * num);
    console.log(this.vin);
};
/******************End Constructor and Prototypes******************/

var bike = new VehicleConstructor('bike', 2, 1, 10);

bike.makeNoise = function() {
    console.log('Ring ring!');
};

bike.move();
bike.checkMiles();
bike.genVIN();

/************With ES6!***************/
let _distance_travelled = new WeakMap();
class Vehicle {
    constructor(name, wheels, passengers, speed) {
        this.name = name;
        this.wheels = wheels;
        this.passengers = passengers;
        this.speed = speed;

        this.makeNoise = () => {
            console.log('Beep beep!');
        };
        this.move = () => {
            this.updateDistanceTravelled();
            this.makeNoise();
        };
        _distance_travelled.set(this, 0);
        this.checkMiles = () => {
            console.log(_distance_travelled.get(this));
        };
    }

    updateDistanceTravelled() {
        let distance_travelled = _distance_travelled.get(this);
        distance_travelled += this.speed;
        _distance_travelled.set(this, distance_travelled);
    }
}

// var bike2 = new Vehicle('bike', 2, 1, 10);
//
// bike2.makeNoise = function() {
//     console.log('Ring ring!');
// };
//
// bike2.move();
// bike2.checkMiles();
// bike2.move();
// bike2.checkMiles();
