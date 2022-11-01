"use strict"
let a = 10;

function add(a, b, c) {
    "use strict"
    return a+b+c;
}

console.log(add(a, 20, 30));

//Interaction: Prompt

// let result = prompt("Enter your age: ", ["Age"]);

// alert(`Your age is ${result}`);

//Interstion: confirm
let isBoss = confirm("Are you the boss"); //Returns true & false
console.log(isBoss);
