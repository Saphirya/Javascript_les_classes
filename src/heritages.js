class Vehicule {
  constructor() {
    this.hasEngine = true;
  }
  stop() {
    console.log("engine stop");
  }
  start() {
    console.log("engine start");
  }
}

class Car extends Vehicule {
  constructor() {
    super();
    this.wheels = 4;
  }
  start() {
    super.start();
    console.log(" car start");
  }
}

const car = new Car();
console.log(car);

// function vehicule() {
//   this.hasEngine = true;
// }
// vehicule.prototype.stop = function () {
//   console.log("engine stop");
// };

// function Car() {
//   vehicule.call(this);
//   this.wheels = 4;
// }
// const car = new Car();

// car.prototype = Object.create(vehicule.prototype);
// Car.prototype.start = function () {
//   console.log(" car start");
// };
// car.prototype.constructor = Car;

// console.log(car);
