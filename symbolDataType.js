console.log("Symbol Datatypes");

let person1 = Symbol("Adnan");

let person2 = Symbol("Adnan");

console.log(person1);
console.log(person1.description)
console.log(person1 === person2); // False

// Iterate Symbol
let qualification = Symbol("qualification");

let testObject = {
    name: "Muhamamad Sajid Ali Khan",
    sapid: 70077989,
};

testObject[qualification] = "BSCS";

//We can not iterate the symbol object
for(key in testObject){
    console.log(key);
}

console.log(testObject);

// We can not able to access the Symbol() inside the object
console.log(testObject.qualification); //undefined

// We can not convert Symbol() into JSON format
console.log(JSON.stringify(testObject));