/*There are 3 data types in JavaScript: var, let, const.
var is data type of old javaScript. Note: var datatype have global scope and let has the block scope.
In const we can't change the variable or string but push and pop the array. */

/*
Most common programming case types:
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/

/*
Variable Declaration Rules in JavaScript
1. variable name can't start with numbers
2. can start with letters, _ or $
3. case sensetive
*/
var city = 'Islamabad'; //We should the use of var variable
{
    let city = 'Lahore';
    console.log(city);
}

console.log(city);


// const developerName; We don't do this whenever we declared the variable assign the value at the same time, the next one is right.
const developerName = "Muhammad Sajid Ali Khan Rajput";
// developerName = "M. Sajid"

console.log(developerName)


const arr1 = [1,2,3,4,5]
// arr1 = [5,6,7] this is wrong
arr1.push(6)
console.log(arr1)
