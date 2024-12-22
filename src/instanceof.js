class Car {}
const car = new Car();

console.log(car instanceof Car);

car.__proto__ === Car.prototype; //false
car.__proto__.__proto__ === Object.prototype; //true
