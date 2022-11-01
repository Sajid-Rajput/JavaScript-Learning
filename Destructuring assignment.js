console.log("Array Destructuring");

"use strict";
const array1 = ["JavaScript", "Python", "C++", undefined];

// let [Js, Py, Clang, GL] = array1;

// console.log(Js);
// console.log(Py);
// console.log(Clang);
// console.log(GL);

// let [Js,,,GL] = array1;
// console.log(`My two favourite languages are ${Js} and ${GL}`);

// let [Js, ...GL] = array1; // for coping the rest of the array
// console.log(`My two favourite languages are ${Js} and ${GL}`);
// console.log(GL);

// For setting the default values
let [Js, Py, Clang, Go = "golang"] = array1;
console.log(Js);
console.log(Py);
console.log(Clang);
console.log(Go);


// Object Destructuring

let testObject = {
    firstName: "Muhammad Sajid",
    lastName: "Ali Khan",
    sapid: 70077989,
    degree: {
        qualification: "BSCS"
    }
};

let {firstName, lastName, sapid:SAP, degree} = testObject;
console.log(`My name is ${firstName + " " +lastName}, my SapId is ${SAP} and my qualification is ${degree.qualification}`);

console.log(testObject);