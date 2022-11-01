console.log("Property flags and descriptors");

// Property flags: writable, enumerable and configurable

let employee = {
  name: "Sajid Rajput",
  sapid: 70077989,
  nationality: "Pakistani",
  department: "Web3.0 and Metaverse",
};

console.log(Object.getOwnPropertyDescriptors(employee, "sapid"));

Object.defineProperty(employee, "sapid", { writable: false });
Object.defineProperties(employee, {
  name: { writable: false },
  nationality: { enumerable: false },
  department: { configurable: false },
});

employee.name = "Khan"; //Don't able to write the property
// console.log(employee);

for (const iterator in employee) {
  console.log(employee[iterator]);
} //Don't print nationality

delete employee["department"];

console.log(employee); // Don't delete department
