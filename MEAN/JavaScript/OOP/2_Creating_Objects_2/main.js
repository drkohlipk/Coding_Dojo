function VehicleConstructor (name, wheels, passengers, speed) {
    var distance_travelled = 0;
    var updateDistanceTravelled = function() {
        distance_travelled += this.speed;
    }.bind(this);

    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;

    this.makeNoise = function() {
        console.log('Beep beep!');
    };
    this.move = function() {
        updateDistanceTravelled();
        this.makeNoise();
    };
    this.checkMiles = function() {
        console.log(distance_travelled);
    };
}

// var bike = new VehicleConstructor('bike', 2, 1, 10);
//
// bike.makeNoise = function() {
//     console.log('Ring ring!');
// };
//
// bike.move();
// bike.checkMiles();

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

var bike2 = new Vehicle('bike', 2, 1, 10);

bike2.makeNoise = function() {
    console.log('Ring ring!');
};

bike2.move();
bike2.checkMiles();
bike2.move();
bike2.checkMiles();
