// function Car() {}

// Car.description = function () {
//   return console.log("sert a construire une voiture");
// };
// Car.description();
// const car = new Car();
class Vehicule {
  static description() {
    return console.log("je decris");
  }
  constructor() {}
}
class Car extends Vehicule {
  static compareCar(car1, car2) {}
}

Car.description();
const car = new Car();
Car.compareCar(car, car);

console.log(Car.__proto__ === Vehicule);
console.log(car.__proto__ === Car.prototype);
console.log(car.__proto__.__proto__ === Vehicule.prototype);
