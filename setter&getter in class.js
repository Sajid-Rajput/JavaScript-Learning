console.log("Getter and Setter in Classes");

// Setter and Getter in JavaScript
class myclass {
  name = "Muhammad Sajid Ali Khan";

  constructor(age) {
    this.current_age = age;
    console.log(`Constructor: ${this.current_age}`);
  }

  get current_age() {
    return this._age;
  }

  set current_age(value) {
    if (value == 18) {
      console.log("Age is too short");
      return;
    }
    this._age = value;
  }
}

let variable = new myclass(19);
console.log(variable.current_age);

// Example 2
class RectangleArea {
  counter = 0;

  constructor(length) {
    this.calculated_Area = length;
  }

  get calculated_Area() {
    return this._length * this._length;
  }

  set calculated_Area(value) {
    if (!Number.isInteger(value)) {
      console.log("Parameter must be integer");
      return;
    }

    this._length = value;
  }
}

let value1 = new RectangleArea(12);
console.log(value1.calculated_Area);

// Example 3
class Color {
  favouriteColor = "Blue";

  get color() {
    return this.favouriteColor;
  }

  set color(arg) {
    this.favouriteColor = arg;
  }
}

let new1 = new Color();
console.log(new1.color);

new1.color = "Red";
console.log(new1.color);


// Example 4
class Greeting{
    constructor(msg){
        this.message = msg
    }

    click = () => {
        console.log(`Hi! ${this.message}`);
    }
}

let greet = new Greeting("Good Morning");
set