console.log("Decorators in JavaScript");

("use strict");

let sum = (...arg) => {
  return [...arg].reduce((num1, num2) => num1 + num2);
};

const Callfunction = (fn) => {
  let count = 0;

  return (...arg) => {
    console.log(`sum function has been called ${count + 1}
        times.`);
    return fn(...arg);
  };
};

sum = Callfunction(sum);

console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40, 50));

// Example 2
let rectangleArea = (length, width) => {
  return length * width;
};

const countParams = (fn) => {
  return (...arg) => {
    const name = fn.name;
    if (arg.length !== fn.length) {
      throw new Error(`Incorrect numbers of params for ${fn.name}`);
    }
    return fn(...arg);
  };
};

const requireIntegers = (fn) => {
  return (...arg) => {
    arg.forEach((element) => {
      if (!Number.isInteger(element)) {
        throw new TypeError(`Params for ${fn.name} must be integer.`);
      }
    });
    return fn(...arg);
  };
};

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);

console.log(rectangleArea(10, 20));
// console.log(rectangleArea(10, "Hi")); // error
