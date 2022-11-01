console.log(`Optional Chaining ?.`)

let obj = {
    person: {
        name: "Muhammad Sajid Ali Khan"
    }
};

console.log(obj.person && obj.person.name); //This statement is used to pretend from the error

//Optional Chaining
console.log(obj?.name?.person);

let x = "person";
let y = "name";

console.log(obj?.[x]?.[y])

// Access function and arrays using optional chaining
let testObject = {
    arr: [1,2,3,4,5,6,7,8],
    func: function(){
        return ("Hello! This is the test object");
    }
};

console.log(testObject?.arr?.[2]); //3
console.log(testObject?.func())


// Limitations in Optional Chaining

//<- Root Object must be exist ->
console.log(testObject1?.arr?.[2]); //error

// If we want to modify any property of object that doesn't exist they the error is shown

console.log(testObject?.arr?.[8]); //error