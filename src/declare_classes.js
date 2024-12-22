const Bar = function Bar(name) {
  this.name = "name";
};

Bar.prototype.sayHello = function () {
  console.log(`Hello`);
};

Bar.prototype.hi = function () {
  console.log("hi");
};

const bar = new Bar("bar");
console.log(bar);

const Foo = class Foo {
  constructor(name) {
    this.name = name;
    this.test = null;
  }
  get doubleName() {
    return this.name + this.name;
  }

  set changeName(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello`);
  }

  hi() {
    console.log("hi");
  }
};

const foo = new Foo("foo");
console.log(foo);
console.log(foo.doubleName);
foo.changeName = "foo2";
console.log(foo.name);
