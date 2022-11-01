console.log("Objects in JavaScript");

let sajidDoc = {
    fname: "Muhammad Sajid",
    "lname": "Ali Khan",
    age: 21,
    studied: "BS(Computer Science",
    siblings: {
        "1": "Raza",
        "2": "Farhan",
        "3": "Wali"
    },
    fullname: function(){
        return this.fname + ' ' + this.lname;
    },
    relationship: undefined,
    result: {
        english: 99,
        urdu: 95,
        ComputerScience: 100
    }
}

for (let key in sajidDoc.siblings){
    console.log(key);
    console.log(sajidDoc.siblings[key]);
}

console.log(sajidDoc.fullname());
console.log(sajidDoc.noSuchproperty === undefined);
console.log(sajidDoc.relationship);
console.log("relationship" in sajidDoc);


delete sajidDoc["relationship"];
console.log("relationship" in sajidDoc);


let countryCodes = {
    "+92": "Pakistan",
    "+91": "India",
    "+93": "Saudia Arabia",
    "+94": "Afghanistan",
    "+1": "America"
};

for (let key in countryCodes){
    console.log(key);
    console.log(countryCodes[key]);
}


// Important Property
let fruit = 'Apple';
let bag = {
    [fruit + "Computers"]: 5
}

console.log(bag.AppleComputers);



/*
  #Object Referencing and Coping
*/

// When we copy the object into another object we pass the reference of memory
let copySajidDoc = sajidDoc;

//It's also change our original object
copySajidDoc.studied = "BS(CS)";
console.log(sajidDoc.studied, copySajidDoc.studied);

//The correct way to copy the object

let copySajidDoc2 = {}
for (let key in sajidDoc){
    copySajidDoc2[key] = sajidDoc[key];
}

copySajidDoc2.studied = "BS (Computer Science)";
console.log(sajidDoc.studied, copySajidDoc2.studied);

console.log(copySajidDoc2)


/*
  **Object.assign() Function
  **But, still this function generates a shallow copy
*/

let user = {
    user1: "Johnny Albert"
}

let permission1 = { canView: true };
let permission2 = { EditView: true };

Object.assign(user, permission1, permission2);
user.permission2 = false;

console.log( user , permission2 );

let copySajidDoc3 = Object.assign({}, sajidDoc);

console.log(sajidDoc.siblings === copySajidDoc3.siblings); //True

sajidDoc.result.english++;
console.log(copySajidDoc3.result.english); // result is change

copySajidDoc3.result.urdu++;
console.log(sajidDoc.result.urdu);// result still changes whenever I am increment in the shallow copy

//Use loadash library for deep copy an object

//Use Json.stringyfy and Json.parse method for create a deep copy but it does'nt copy functions
let copySajidDoc4 = JSON.parse(JSON.stringify(sajidDoc));
copySajidDoc4.result.ComputerScience++;
console.log(copySajidDoc4.result.ComputerScience, sajidDoc.result.ComputerScience); // runs successfully


//Constant object also change its keys and values of that associated key
const test = {
    fname: "Muhammad Sajid",
    "lname": "Ali Khan",
    age: 21,
    studied: "BS(Computer Science)"
};
test.studied = "BS(CS)";

console.log(test); //studied = BS(CS)
 