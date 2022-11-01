console.log("Getter and Setter in object");
// getter and setter in object acts as a property

let employee = {
  name: "SAJID RAJPUT",
  sapid: 70077989,
  nationality: "Pakistani",
  department: "Web3.0 and Metaverse",

  get getname() {
    console.log(this.name);
  },

  set setname(name) {
    this.name = name.toUpperCase();
  },
};

employee.getname;
console.log(employee);

employee.setname = "Muhammad Sajid Ali Khan";
console.log(employee);
