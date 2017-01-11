function VehicleConstructor (name, wheels, passengers) {
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;

    this.makeNoise = function() {
        console.log('Beep beep!');
    };
}

var bike = new VehicleConstructor('bike', 2, 1);

bike.makeNoise = function() {
    console.log('Ring ring!');
};

var sedan = new VehicleConstructor('sedan', 4, 5);

sedan.makeNoise = function() {
    console.log('Honk honk!');
};

var bus = new VehicleConstructor('bus', 4, 0);

bus.addPassengers = function(pickUp) {
    this.passengers += pickUp;
};

/************With ES6!***************/
class Vehicle extends VehicleConstructor {
    constructor(name, wheels, passengers) {
        super();
    }
}

var bike2 = new Vehicle('bike', 2, 1);

bike2.makeNoise = () => console.log('Ring ring!');

bike2.makeNoise();
