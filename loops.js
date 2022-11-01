// continue statement in for loop
// In this program we output the even numbers

for(let number = 0; number <= 10; number++){
    if (number%2 === 0) continue;
    console.log(number);
}

// break statememnt in loops
let sum = 0;
while(true){
    let value = +prompt("Enter a number: ");
    // if an empty string or canceled, then break out the loop
    if(!value) break;
    sum += value;
}

console.log("addition: ", sum);