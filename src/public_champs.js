const prefix = "class";
class Car {
  brand = "BMW";
  engine = "V12";
  roues;
  [`${prefix}-car`] = true;

  constructor(roues) {
    this.roues = roues;
  }
}

const car = new Car(4);
console.log(car);
