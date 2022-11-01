console.log("Mixins in JavaScript");

// Example 1
let sayHiMixins = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixins);

new User("Sajid").sayHi();

// Example 2
let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

let sayHiMixin = {
  __proto__: sayMixin,

  sayHi() {
    super.say(`Hello ${this.name}`);
  },
  sayBye() {
    super.say(`Bye ${this.name}`);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Person.prototype, sayHiMixin);

new Person("Wali").sayHi();
new Person("Wali").sayBye();
