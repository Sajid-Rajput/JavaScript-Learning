//Node Type
// 1. element
// 2. attribute
// 3. text Node
// 4. comment
// 5. document
// 6. doctype

console.log("Parent, Child and Traversing");

let element = document.querySelector("div.container");
// element = element.childNodes; //return text comments etc
element = element.children; // don't return text comments and other useless attributes

// let nodeName = element.childNodes[1].nodeName;
// let nodeType = element.childNodes[1].nodeType;

// console.log(nodeName);
// console.log(nodeType);



console.log(element);

let container = document.querySelector("div.container");


// console.log(container.children[1].children[0].children[1].innerText);


// nextSibling, firstChild, lastChild are the attributes of childNodes
console.log(container)
console.log(container.lastElementChild);
console.log(container.firstElementChild);

console.log(container.lastChild);   
console.log(container.firstElementChild.parentNode);


console.log(container.firstChild);
console.log(container.firstElementChild.nextElementSibling)