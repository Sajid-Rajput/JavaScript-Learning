console.log("Recursion in JavaScript");
"use strict";
let number = 1;

// function show(){
//     console.log(number);
//     number++;
//     if(number <= 1122){
//         show();
//     }
// }

// show();

// <- Real Uses of Recursion Function ->
let unsortedNumber = [1,8,7,9,10,22,33,67,98,900];
let i = 0;
let j = 1;
let breaker = false;

function sortingNumber(array) {
    while(true){
        for(let iter = 0; i <= array.length; i++){
            if (array[iter] < array[iter + 1]){
                breaker = true;
            }
        }
        if (breaker === true){
            console.log(array);
            return;
        }
        else if(array[i] < array[j]){
            i++;
            j++;
            sortingNumber();
        }
        else{
            [array[i], array[j]] = [array[j], array[i]];
            i = 0;
            j = 1;
            sortingNumber();
        }
    }
}

sortingNumber(unsortedNumber);

// Representation of factorial using recursion

function factorial(number) {
    if(number == 0){
        return 1;
    }
    else{
        return number * factorial(number - 1);
    }
}

let factNumber = 5;
let result = factorial(factNumber);

console.log(result);