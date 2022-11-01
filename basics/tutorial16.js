console.log("Creating, Replacing and Delete Element");

// Creating and append an Element
let element = document.createElement("li");

element.className = 'myclass';
element.id = 'newElement';
element.setAttribute("title", "mytitle");
// element.innerText = "Pathan";
let textNode = document.createTextNode("Pathan");
element.append(textNode);

// let findElement = document.querySelector("#first");
// findElement = findElement.firstElementChild;
// findElement.appendChild(element);

// //Replacing a element
// let element2 = document.createElement("li");
// let textnode2 = document.createTextNode("<b>Pathan</b>");
// element2.append(textnode2);

// element2.class = "myclass";
// element2.id = "newElement2";
// element2.setAttribute("title", "mytitle2");
 
// let findElement2 = document.querySelector("#first");
// findElement2 = findElement.lastElementChild.previousElementSibling;
// findElement2.replaceWith(element2)
// // console.log(findElement2);   


// element.replaceWith(element2);

// console.log(element2);

// Remove a element


//Another way to replace the element
let reElement = document.getElementById("first");
reElement = reElement.children[0];
reElement.replaceChild(element, document.getElementById("cast"));
reElement.removeChild(element, document.getElementById("cast"));
console.log(reElement);



//Now, we play with attributes
let testElement = document.getElementById("second");
// testElement = testElement.getAttribute('class');
// testElement = testElement.hasAttribute("id"); // returns true and false
testElement = testElement.setAttribute("class", "testClass"); //It's successfully change the class name


console.log(testElement);
