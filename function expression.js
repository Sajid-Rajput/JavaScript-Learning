console.log("Function Expression");

let add = function(num1, num2){
    return num1+num2;
}

let sum = add;

console.log(add); // return the code
console.log(add(10, 10));
console.log(sum(10, 10));

// Call back function in JavaScript
//Example 1
function askQuestion(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}

function showOK() {
    alert("You Agreed");
}

function showCancel() {
    alert ("You canceled the request");
}

// askQuestion("Downloading Start", showOK, showCancel);
// Alternative way
askQuestion("Are you want to download the file",
function name() {
    alert("You Agreed");
}, function name() {
    alert ("You canceled the request");
});