console.log("Call, apply and bind in JavaScript");

let name = {
  firstname: "Sajid",
  lastname: "Rajput",
};

const fullname = function (country, city) {
  console.log(
    this.firstname + " " + this.lastname + " " + country + "," + city
  );
};

let name1 = {
  firstname: "Muhammad Sajid",
  lastname: "Ali Khan",
};

// Function borrowing
// Call
fullname.call(name, "Pakistan", "Lahore");
fullname.call(name1, "UK", "London");

// Apply
fullname.apply(name1, ["UK", "London"]);

// Bind Method
let myfullname = fullname.bind(name1, "Pakistan", "Lahore");
console.log(myfullname);
myfullname();
