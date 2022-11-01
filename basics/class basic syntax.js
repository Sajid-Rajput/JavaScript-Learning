console.log("Classes in Javascript");

class Test {
  constructor(n1, n2) {
    this.num1 = n1;
    this.num2 = n2;
  }

  sum() {
    console.log(this.num1 + this.num2);
  }
}

let obj1 = new Test(10, 20);

obj1.sum();
console.log(Test === Test.prototype.constructor); // true
console.log(Test.prototype.sum); // return the sum code
console.log(Object.getOwnPropertyNames(Test.prototype)); // ['constructor', 'sum']

class AllFunction {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hi! ${this.name}`);
  }

  static greeting1(age) {
    console.log(`Your age is ${age}`);
  }
}

let obj = new AllFunction("Sajid", 21);
obj.greeting();
AllFunction.greeting1(21);

