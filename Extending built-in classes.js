console.log("Extending built-in classes");

// Example 1
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); //false

let filteredArr = arr.filter((element) => element >= 10);
console.log(filteredArr);
console.log(filteredArr.isEmpty()); //false
console.log(filteredArr.constructor === PowerArray); //true

//  Built-in methods like filter, map and others – return new objects of exactly the inherited type PowerArray.

// Example 2: Returning the array not the inhereted object
class PowerArray1 extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static get [Symbol.species]() {
    return Array;
  }
}

let arr1 = new PowerArray1(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); //false

let filteredArr1 = arr1.filter((element) => element >= 10);
console.log(filteredArr1);
// console.log(filteredArr1.isEmpty()); //error