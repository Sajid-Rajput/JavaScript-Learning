console.log("Local and Session Storage");

//Method for localStorage Items
localStorage.setItem("first_name", "Sajid");
localStorage.setItem("last_name", "Ali Khan");

// console.log(window.localStorage);


// localStorage.clear(); // Removes local storage from the browser

//Method for get localStorage items
// let getItem = localStorage.getItem("first_name");
// getItem = localStorage.getItem("last_name");
// console.log(getItem);

//Method for Delete local Storage single element
// localStorage.removeItem("last_name");

//Method for Adding and Retriving an Array from Local Storage
let nameArray = ['Sajid','Hamza','Zain'];
localStorage.setItem('friends', JSON.stringify(nameArray));
console.log((JSON.parse(localStorage.getItem('friends'))));

// Session Storage 
//When browser restart this storage get removes
sessionStorage.setItem("first_name", "Sajid");
sessionStorage.setItem("last_name", "Ali Khan");
let sessionalArray = ['Sajid','Hamza','Zain'];
sessionStorage.setItem('friends', JSON.stringify(sessionalArray));

sessionStorage.clear();