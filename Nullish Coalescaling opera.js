let obj = {
    score: 0
};

console.log(`The cricket match score is ${obj.score || 200}`); // Return the other value when the left hand value is false.

// List of falsy values: 0, Nan, false, undefined, null
//Nullish values: undefined, null
//Nullish Coalescaling expression: ??

console.log(`The cricket match score is ${obj.score ?? 200}`);


//Output of this program is 200 and 0 respectively



// Iterate the object
let bill = {
    electricity: 100,
    water: 500,
    gas: 1000,
    internet: 2000
};

for (key in bill){
    console.log(bill[key]);
}