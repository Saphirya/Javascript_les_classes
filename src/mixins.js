const option = {
  startRadio() {
    console.log("radio on");
  },
  stopRadio() {
    consolelog("radio off");
  },
};

class Car {}

Object.assign(Car.prototype, option);

class Bus {}

const car = new Car();
car.startRadio();
console.log(car);
