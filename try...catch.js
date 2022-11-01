console.log('Error handling, "try...catch" in JavaScript');

let name = undefined;

if (name !== undefined) {
  throw new Error("This is not undefined"); //When the error through the rest of the code is not working
} else {
  console.log("This variable is undefined");
}

console.log("Hello World");

try {
  console.log("Aoa! Sajid Rajput");
  new SumFunction();
} catch (error) {
  console.log(error);
  console.log(error.message); // Displays the error message
  console.log(error.name);
} finally {
  console.log("Finally is a function, Any code inside finally() definitly run");
}
