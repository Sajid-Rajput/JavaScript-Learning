console.log("This is Tutorial 12 of JavaScript");

let a = document.all;

// a = document.body;

// a = document.forms;

// a = document.forms[0];

//Array.from() method convert the document elements into string

// Array.from(a).forEach(function(element) {
//     console.log(element);
// });


// Extracting and printing the links from the websites
// a = document.links;
// for (let index = 0; index < a.length; index++) {
//     console.log(a[index].href);
// }

// Method for getting scripts
// a = document.scripts[1];

//Method for getting images
a = document.images[0];
// for (let index = 0; index < a.length; index++) {
//     console.log(a[index].src);    
// }
console.log(a);