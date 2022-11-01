console.log("Inheritence in JavaScript");
("use strict");

class Employee {
  constructor(name, age, salary) {
    this.empName = name;
    this.empAge = age;
    this.empSalary = salary;
  }

  info() {
    console.log(
      `Employee Name: ${this.empName}  Employee Age: ${this.empAge}  Employee Salary: ${this.empSalary}`
    );
  }
}

class Manager extends Employee {
  positionIncrement() {
    let medical_allowance = 20000;
    let traveling_allowance = 40000;
    console.log(
      `Employee Name:${this.empName} Employee Age:${
        this.empAge
      } Employee Salary:${
        this.empSalary + medical_allowance + traveling_allowance
      }.`
    );
  }
}

let emp = new Employee("Sajid", 21, 200000);
let manager = new Manager("Rajput", 22, 12000000);

emp.info();
manager.positionIncrement();

// Example 2: Overriding Constructor
class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
}

class Rabbit extends Animal {
  constructor(name, earlength) {
    super(); // Always first call the parent constructor before using the keyword "this"
    this.speed = 0;
    this.name = name;
    this.earlength = earlength;
  }
}

let animal = new Rabbit("Rabit", 150);

let details = {
  name: "Muhammad Sajid Ali Khan",
  sayHi() {
    console.log(this);
  },
};

details.sayHi();