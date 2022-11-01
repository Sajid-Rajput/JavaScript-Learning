// Type Conversion 
console.log('Welcome to Tutorial 5');

let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr1 = String([1,2,3,4,5,6]);
console.log(arr1, (typeof arr1));

let num = 75;
console.log(num.toString(), (typeof num));

let stri = Number('1234');
stri = Number('222d333'); //NaN
stri = Number([1,2,3,4,5]);
stri = Number(true);
stri = Number(false);
// console.log(stri, (typeof stri))

let str = parseInt('12.34');
str = parseFloat('12.5667666');
console.log(str.toFixed(9), (typeof str));


// Type coercion 
// let number1 = "1234";
let number1 = Number("1234");
let number2 = Number("0");
console.log(number1+number2);