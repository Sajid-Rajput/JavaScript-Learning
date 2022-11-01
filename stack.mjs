import PromptSync from "prompt-sync";
const prompt = PromptSync();

("use strict");
console.log("Stack Data Structure");

let range = 0;
let stackArray = new Array(range);

function stackPush() {
  if (range <= 0) {
    range = 0;
    let number = +prompt("Enter a number: ");
    stackArray[range] = number;
    ++range;
  } else {
    let number = +prompt("Enter a number: ");
    stackArray[range] = number;
    ++range;
  }
}

function stackPop() {
  if (range <= 0) {
    console.log("Stack is empty right now");
  } else {
    --range;
    console.log(`Pop: ${stackArray[range]}`);
  }
}

function sizeofStack() {
  if (range <= 0) {
    console.log("Stack is empty right now");
  } else {
    console.log(`Size of Stack: ${range - 1}`);
  }
}

function displayStack() {
  if (range <= 0) {
    console.log("Stack is empty right now");
  } else {
    for (let index = 0; index < range; index++) {
      console.log(`Stack Element: ${stackArray[index]}`);
    }
  }
}

let choice = null;
while (true) {
  choice = +prompt("Enter your choice: ");
  switch (choice) {
    case 1:
      stackPush();
      break;

    case 2:
      stackPop();
      break;

    case 3:
      displayStack();
      break;

    case 4:
      sizeofStack();
      break;

    case 5:
      throw "Stop";
      break;

    default:
      alert("Invalid Choice");
      break;
  }
}
