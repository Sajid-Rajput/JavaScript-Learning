console.log("In this tutorial, we created a editable div");

let divElement = document.createElement("div");
divElement.setAttribute("class", "editDiv");
divElement.setAttribute("id", "editDiv1");
divElement.setAttribute("contenteditable", "true");
divElement.innerHTML = `<p>This is a line 1 of editable text</p>`

let findparent = document.getElementById("headingID");
findparent.parentElement.insertBefore(divElement, findparent.nextElementSibling);

function funcBlur() {
    localStorage.setItem("editedValue", divElement.innerText);
}

document.querySelector("#editDiv1").addEventListener('blur', funcBlur);

console.log(divElement);