console.log("Tutorial6 on JavaScript");

const myname = 'Sajid';
const greeting = 'Good Evening';
console.log(greeting + " " + myname)

let html;
html = "Hi! my name is Muhammad Sajid Ali Khan" + " " + "And I am 21 years old";

html = html.concat(" Hello!!!", " World");
console.log(html.length);
console.log(html.toLowerCase);
console.log(html.toUpperCase());
console.log(html)

console.log(html.indexOf("And"));
// If present returns 1 neither way return -1
console.log(html.lastIndexOf('d'));
console.log(html.charAt(12));
console.log(html.endsWith("old")); //Return Boolean Value
console.log(html.includes("Sajid")); //Return Boolean Value
console.log(html.substring(0,75));
console.log(html.slice(0,6));
console.log(html.slice(-4)); // Return the whole string acccept last 4 digits

console.log(html.split(" ")); //Return array with splitting.

console.log(html.replace("Hi", "Hello"));

let fruit1 = "Orange\'";
let fruit2 = "Apple";
let myName = "Sajid Ali Khan"

let myhtml = `Hello ${myName}
            <h1> This is tutorial 6 of JavaScript </h1>
            <p> You like ${fruit1} and ${fruit2}</p>`;

document.body.innerHTML = myhtml;
