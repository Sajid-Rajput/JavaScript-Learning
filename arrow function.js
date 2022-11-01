console.log("Arrow Function");

let askQuestion = (question, yes, no) => confirm(question)?yes():no();

askQuestion("Are you want to download this file: ", () => alert("You confirmed"), () => alert("You disagreed"));

// Function that returns the square of any number

let square = (num1) => {
    return num1 * num1;
}

while(true){
    let inputNumber = +prompt("Enter a number: ");
    if (!inputNumber){
        break;
    }
    alert(square(inputNumber))
}