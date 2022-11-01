console.log("Welcome! to the tutorial 14");

/*
There are two types of sellector in JavaScript:
1. Single Element Selector 
2. Multi Element Selector
*/


// Element Selector
let element = document.getElementById('first');
// element = document.getElementsByClassName('myclass');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;

// element.style.color = 'red';

// element.innerText = 'Sajid Rajput';
element.innerHTML = "<h3>This is Muhammad Sajid Ali Khan Rajput</h3>"
console.log(element);


//Query Selector
// let select = document.querySelector("#second");
// select = document.querySelector(".myclass");
// select = document.querySelector("div");

// select.style.color = "green";

// console.log(select.innerText);


//Multiple Selector
let elements = document.getElementsByClassName('myclass');
// elements = document.getElementsByClassName('container');

// console.log(elements[0].getElementsByClassName("myclass"));


element = document.getElementsByTagName('div');

// Array.from(elements).forEach(function(element) {

//     element.style.color = 'green'
    
// });

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    console.log(element);
    element.style.color = "yellow";
    
}
// console.log(elements)