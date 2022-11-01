console.log('Class checking: "instanceof"');

// Example 1
class Animal {}

class Rabbit extends Animal {}

let rabbit = new Rabbit();
console.log(rabbit instanceof Animal); // true

// Example 2: That can lead to interesting consequences when a prototype property is changed after the object is created.

function rabbitFunc() {}
let rabbit1 = new rabbitFunc();

rabbitFunc.prototype = {};
console.log(rabbit1 instanceof rabbitFunc); //false

// Example 3: Bonus: Object.prototype.toString for the type

let obj = {};

console.log(obj);
console.log(obj.toString());

// That’s their implementation of toString. But there’s a hidden feature that makes toString actually much more powerful than that. We can use it as an extended typeof and an alternative for instanceof.

let objectTostring = Object.prototype.toString;

let arr = [1, 2, 3, 4, 5];

console.log(objectTostring.call(arr));
console.log(objectTostring.call(123));
console.log(objectTostring.call("Sajid"));
console.log(objectTostring.call(null));
console.log(objectTostring.call(alert));
