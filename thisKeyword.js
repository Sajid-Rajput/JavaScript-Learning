"use strict"
console.log("this keyword");

console.log(this);

//When we use use strict mode the "this" keyword in function is undefined.
function addition(){
    console.log(`This is given number is 4`);
    console.log(this);
}

addition();

// Always use fuction keyword in object
let profile = {
    name: "Muhammad Sajid Ali Khan",
    degree: "BSCS",
    sibling: function(){
        console.log(this);
        console.log(this.degree);
    }
};

profile.sibling();