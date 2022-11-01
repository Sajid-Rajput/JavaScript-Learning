console.log("Creatin a heading and below the heading create heading tag");

let heading = document.createElement("h3");
let headingText = document.createTextNode("CodeWithHarry");
heading.append(headingText);
heading.className = "quizElement";
heading.id = "quizID";

let findElement = document.getElementById("mycontainer");
// findElement = findElement.nextSibling;s

findElement.parentNode.insertBefore(heading, findElement.nextSibling)// very very important code


let headingAnchor = document.createElement("a");
headingAnchor.className = ("AnchorClass");
headingAnchor.id = ("AnchorID");
headingAnchor.setAttribute("href", "https://www.codewithharry.com");
headingAnchor.innerHTML = "<br>Click on the Website Link";

let findElement2 = document.getElementById("quizID");
findElement2.append(headingAnchor);


// console.log(findElement.parentNode, (typeof findElement));

// console.log(heading);