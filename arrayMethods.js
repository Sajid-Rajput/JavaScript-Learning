console.log("Array Methods");

let arr = ['Sajid', 'Raza', 'Farhan', 'Wali'];

// <- slice() ->

let arr2 = arr.slice(1, -1);
// console.log(arr2);


// <- splice() ->
arr.splice(-1, 0, "hamza", "zain");
// console.log(arr);

//delete using splice()
arr.splice(3,3,"Muhammad Wali Ali Khan Rajput");
// console.log(arr);


// <- map() ->
let number = [1, 2, 3, 4, 5, 6];
let multiplyNumber = number.map(multiply);

function multiply(number) {
    return number * 10;
}

console.log(multiplyNumber);

let objectArray = [
    {fname: "Muhammad Sajid", lname: " Ali Khan"},
    {fname: "Muhammad Wali", lname: " Ali Khan"},
    {fname: "Muhammad Farhan", lname: "     Ali Khan"}
];

let fullname = objectArray.map(completeName);

function completeName(name) {
    return name.fname + name.lname;
}

console.log(fullname);

// find(), findIndex(), filter()
let checkArr = [1, 2, 5, 20, 144, 500];

let saveCheckArr = checkArr.filter((element, index, array) => {
    // console.log(`${element} at index ${index} of array ${array}`);
    return element > 20;
});

console.log(saveCheckArr);


// "Reduce" method in JavaScript
let Array1 = [1,2,3,4,5];

let reducedArray1 = Array1.reduce((e1, e2) => {
    return e1 + e2;
});

console.log(reducedArray1, typeof reducedArray1);