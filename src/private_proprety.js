class Car {
  #gaz;
  constructor() {
    this.key = false;
    this.#gaz = 80;
  }
  putKey() {
    this.key = true;
  }

  set gaz(value) {
    if (value < 0) {
      this.#gaz = 0;
    } else {
      this.#gaz = value;
    }
  }

  start() {
    console.log("car start");
    console.log(this.#gaz);
    if (this.key) {
      this.#startEngine();
    } else {
      console.log("pas de clef");
    }
  }
  #startEngine() {
    console.log("le moteur est allumé");
  }
}

const car = new Car();
car.start();
car.putKey();
car.start();
car.gaz = 100;
