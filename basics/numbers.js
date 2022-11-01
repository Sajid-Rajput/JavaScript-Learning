console.log("Dealing with Numbers");

// <- Diffrent methods for writing in billions ->
let num1 = 1000000000;
let num2 = 1_000_000_000; // underscore ignores
let num3 = 1e9; // underscore ignores


// console.log(num1 === num3); //true

// console.log(3.7e9 === 3.7 * 1000000000); ~true

let num4 = 0.000000789;
let num5 = 7.89e-7;

// console.log(num5 === num4); ~true don't count zero after point
// console.log(num5 === 7.89/10000000); ~true


// <- Get number in any base power ->
let number = 255;
// console.log(number.toString(16)); ~ Number to HexaDecimal
// console.log(number.toString(2)); ~ Number to binary
// console.log(1234567798..toString(36)); ~ When we direct write the then we use 2 dots (1234567798).toString(36)

let testNumber = 2.5;
// console.log(Math.ceil(testNumber));
// console.log(Math.floor(testNumber));
// console.log(Math.round(testNumber));
// console.log(Math.trunc(testNumber)); // remove the decimal portion


// <- Rounding Techniques ->
let testRound = 1.25674
// console.log(Math.round(testRound * 1000) / 1000);

// console.log(testRound.toFixed(3));
// console.log(testRound.toFixed(10)); // returns string value

let checkToFixed = +testRound.toFixed(10);
// console.log(typeof checkToFixed);console.log(testRound.toFixed(10)); 

// alert(0.1 + 0.2); ~0.30000000000000004

let sum = 0.1 + 0.2;
// console.log(sum.toFixed(2)); ~0.30
// console.log(+sum.toFixed(2)); ~0.3

// Hello! I'm a self-increasing number!
// alert( 9999999999999999 ); ~ shows 10000000000000000



// <- Tests: isFinite and isNaN ->
// alert(isNaN(NaN)); ~true
// alert(isNaN("string")); ~true
// alert(isNaN(123)); ~false

//NaN is unique
// alert(NaN === NaN); //false

// alert(isFinite(15)); //true
// alert(isFinite("15")); //true
// alert(isFinite("string")); //false
// alert(isFinite(Infinity)); //false


// let $number = +prompt("Enter a number: ", "");

// will be true unless you enter Infinity, -Infinity or not a number
// alert( isFinite($number) );



// alert(Number.isNaN(NaN)); 
// alert(Number.isNaN("string" / 2)); // === NaN
// alert(Number.isNaN("sting")); // false because does not belong to the number class
// alert(isNaN("str")); // True 


// alert(Number.isFinite(123)); //true
// alert(Number.isFinite(2 / 0)); //false
// alert(Number.isFinite("123")); //false
// alert(Number.isFinite(Infinity)); //false
// alert(isFinite("123"));  // true, because isFinite converts string "123" into a number 123

let name1 = "Sajid";
let name2 = "Sajid";
// alert(Object.is(name1, name2));


// <- parseInt and parseFloat ->
// alert( +"100px" );
// alert( parseInt('100px') );
// alert( parseFloat('10.8989898px') );
// alert( parseInt('10.8989898') );
// alert( parseFloat('10.8989898.99') );
// alert( parseInt('a1234') ); //NaN


// The second argument of parseInt(str, radix)

// alert( parseInt('0xff', 16) ); // 255
// alert( parseInt('ff', 16) ); // 255, without 0x also works

// alert( parseInt('2n9c', 36) ); // 123456

// alert(Math.random());
// alert(Math.random());

alert(Math.max(10, -1, 20, 34, 56, 78));
alert(Math.min(10, -1, 20, 34, 56, 78));