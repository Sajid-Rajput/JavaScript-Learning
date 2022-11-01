console.log("Promise Api");

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 17000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Error"));
  }, 1000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3");
  }, 1000);
});

// let promise_all = Promise.all([promise1, promise2, promise3]); //fails if any of the promise is rejected

// let promise_all = Promise.allSettled([promise1, promise2, promise3]) // continue reject is throw

// let promise_all = Promise.race([promise1, promise2, promise3]); // Returns the reject and resolve to those promise that executes first and if error is through it fails

// let promise_all = Promise.any([promise1, promise2, promise3]); // ignores the error and shows results of that promise who firstly executed if all promises through error it "Aggregate Error"

// let promise_all = Promise.resolve(10); creates resolved promise
// let promise_all = Promise.reject(new Error("Error")); //creates reject promise
// promise_all.then((value) => {
//   console.log(value);
// });

async function promiseRunner() {
  let p1 = await promise1;
  console.log(p1);
  let p2 = await promise2;
  console.log(p2);
  let p3 = await promise3;
  console.log(p3);
}

promiseRunner();

promise2.finally(() => {
  console.log("Finally always run");
});
