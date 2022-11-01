console.log("In this tutorial, we are learning about functions");


//Calling a Function
const mygreet = function (name, thanks = 'Thank you') {
    msg = `Hello! Happy Birthday ${name} Many many returns of the day. ${thanks}`;

    return msg;
}


let greeting = mygreet('M. Wali', 'Thanks a lot');
console.log(greeting);

//Create a function in the object
let myobj = {
    name: "Muhammad Sajid Ali Khan",
    greet: function(name) {
        return `Hello! ${name}`
    }
}

console.log(myobj.greet('Sajid'));

//var has function level scope
//let has block level scope

// if (true) {
//     var number = 1000;
// }

// function UI(name){
//     var number = 1;
//     console.log(number);
//     console.log(`This ${name}`);
// }

// UI("Sajid Rajput");
// console.log(number);

let number = 1000;


function UI(name){
    let number = 1;
    console.log(number);
    console.log(`This ${name}`);
}

UI("Sajid Rajput");
console.log(number);