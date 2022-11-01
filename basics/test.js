class User {

  constructor(age) {
    // invokes the setter
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 4) {
      alert("Name is too short.");
      return;
    }
    this._age = value;
  }

}

let user = new User(5);
alert(user.age);

user = new User(3); // Name is too short.