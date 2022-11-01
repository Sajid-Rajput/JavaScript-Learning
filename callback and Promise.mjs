console.log("Callbacks in JavaScript");

// function delay() {
//   let delay_time = 3000 + new Date().getTime();
//   while (new Date() < delay_time) {}
// }

function registration() {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Registration End");
      resolve("Email registered successfully!");
    }, 3000);
  });
}
function getEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Error! Email Server is down");
      console.log("Email End");
      resolve();
    }, 1000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login End");
      resolve();
    }, 2000);
  });
}
function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got User Data");
      resolve();
    }, 3000);
  });
}
function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Display User Data");
      resolve();
    }, 1000);
  });
}

// Callbacks helps us to run the code in the sequence but too much callbacks leads us to "callback hell" that is not a good programming approach.
// registration(function () {
//   getEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// registration()
//   .then(getEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((error) => {
//     console.log(error);
//   });

// async await
async function validation() {
  try {
    const result = await registration();
                   await getEmail();
                   await login();
                   await getUserData();
                   await displayUserData();
                   console.log(result);
  } catch (error) {
    throw new Error();
  }
} 

validation().catch((error) => {
  console.log(error);
});
console.log("Other Application Work!!!");
