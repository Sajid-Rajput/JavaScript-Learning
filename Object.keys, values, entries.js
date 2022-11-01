console.log("Object.keys, values, entries");

let object1 = {
    name: "Muhammad Sajid Ali Khan",
    sapid: 70077989,
    department: "Bachelors in Computer Science"
};

Object.keys(object1).forEach(element => {
    console.log(element);
});

console.log(Object.values(object1));
console.log(Object.entries(object1));
console.log(Object.entries(object1)[2][1]);