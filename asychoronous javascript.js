console.log("Asychoronous JavaScript");

function seven_second_delay() {
  let delay = 7000 + new Date().getTime();

  while (new Date() < delay) {}
}

console.log("Opening...");

setTimeout(() => {
  console.log("Inside the Asychoronous function");
}, 0);

seven_second_delay();

console.log("Closing...");

// The Asychronous function and the code inside that calls at the last after empty the call stack

// Asychronous function and the code inside that stores in Web Apis and after empty the call stack web apis send the data to call back queue then send to call stack and then run.
