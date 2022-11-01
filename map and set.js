console.log("Set in JavaScript");
"use strict";
// Set is stored different types of unique data
let set1 = new Set([1,2,3,4,5]);
set1.add(6);
set1.add(6);
set1.delete(6);

let obj1 = {
    name: "Muhammad Sajid Ali Khan",
};


set1.add(obj1);

// console.log(set1[1]); undefined
console.log(set1);
console.log(set1.has(obj1)); //true

// iterates Set()
// for(let setIterator of set1){
//     console.log(setIterator);
// }

// set1.forEach(element => {
//     console.log(element);
// });


// <- weakSet and weakMap ->
// weakSet and weakMap are the subsets of set and map respectively
// Both are not iterateable
// Both deals with object and other data type is not accepted

//Map
//Map is working on key and value concept
let map1 = new Map([[1, "Muhammad Sajid Ali Khan"]]);
map1.set('2', 'Muhammad Wali Ali Khan');
map1.set(true, 'Muhammad Raza Ali Khan');

console.log(map1);
console.log(map1.get(true));

//iterate Map
for(let [key, value] of map1){
    console.log(`key ${key}, value ${value}`);
}

map1.forEach((key, value) => {
    console.log(`key ${key}, value ${value}`);
});


// weakSet
let weakset = new WeakSet();

let object1 = {
    name: "Muhammad Sajid Ali Khan"
};
let object2 = {
    name: "Muhammad Raza Ali Khan"
};

weakset.add(object1);
weakset.add(object2);
// weakset.add(2); error
weakset.delete(object2);

console.log(weakset);

//WeakMap
// WeakMap assigns the value to the object as a key
let weakmap = new WeakMap();
let obj3 = {
    sapid1: 70077989
}
let obj4 = {
    sapid2: 70077855
}

weakmap.set(obj3, "Sajid SAPid");
weakmap.set(obj4, "Hamza SAPid");
console.log(weakmap);
console.log(weakmap.get(obj4));
console.log(weakmap.has(obj3));