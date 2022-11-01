console.log("Private and protected properties and methods");

// We created the properties of a class protected using getter and setter and we represent that variable like _name

// In this example, we created the wateramount variable protected
class Coffee {
  _wateramount = 0;

  set wateramount(value) {
    if (value < 0) {
      value = 0;
    }

    this._wateramount = value;
  }

  get wateramount() {
    return this._wateramount;
  }

  constructor(power) {
    this.power = power;
  }
}

let cup1 = new Coffee(100);

cup1.wateramount = -10;

// Example 2: Now, we created the power varialbe read only
class Coffee1 {
  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

let cup2 = new Coffee1(100);

console.log(`Coffee Machine power is ${cup2.power}W`);

// Example 3: Private “#waterLimit”
class Coffee3 {
  #waterlimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) {
      return 0;
    }
    if (value > this.#waterlimit) {
      return this.#waterlimit;
    }
  }

  setWaterAmount(value) {
    this.#waterlimit = this.#fixWaterAmount(value);
  }
}

let cup3 = new Coffee3();
cup3.setWaterAmount(150);
// console.log(cup3.#waterlimit); //Error

// Modify Example 3 and enable get the value of wateramount
class CoffeeMachine {
  #waterAmount = 0;

  get wateramount() {
    return this.#waterAmount;
  }

  set wateramount(value) {
    if (value < 0) {
      value = 0;
    }
    this.#waterAmount = value;
  }
}

class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    // console(this.#waterAmount); //error because the variable is private.
  }
}

let cup4 = new CoffeeMachine();

cup4.wateramount = 400;
console.log(cup4.wateramount);

// Example 4
class User {
  #fieldName = "name";
  sayHi() {
    alert(`Hello, ${this.#fieldName}`);
  }
}

let obj = new User();
obj.sayHi();
