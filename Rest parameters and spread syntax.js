console.log("Rest Parameter");

"use strict";

function sum(...values){
    console.log(...values); //1 2 3 4 5 6 7 8 9 10
    console.log(values); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let sum = 0;
    for (let i of values){
        sum += i;
    }
    console.log(sum); 55
}

sum(1,2,3,4,5,6,7,8,9,10);

function cricketPlayers(opener1, opener2, ...team){
    console.log(`${opener1} ${opener2}`);
    console.log(team, typeof team);
    console.log(team.length);
    console.log(team.indexOf('Shaheen'));
    console.log(team[0]);
}

cricketPlayers("Babar", "Rizwan", "Iftikhar", "Khushdil", "Nawaz", "Shadab", "Shaheen");

// <- Spread Operator ->

function testSum(a,b,c){
    console.log(a+b+c);
}

let arr = [1,2,3];

// testSum.apply(null, arr);

testSum(...arr); //6 Spread operator
console.log(...arr); // convert array into numbers

// Using spread operator for array concatenation
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];

let array4 = [...array1, ...array2, ...array3];
console.log(array4);

// Array referencing solution
let copyArr = [10,15,30,45,67];
let copyArr1 = copyArr;
copyArr1.push(100,200);

console.log(copyArr); //(7) [10, 15, 30, 45, 67, 100, 200]
console.log(copyArr1); //(7) [10, 15, 30, 45, 67, 100, 200]

// This issue happens because copyArr passes the reference to copyArr1

let copyArr3 = [...copyArr];
copyArr3.push(300,980);
console.log(copyArr3); //(9) [10, 15, 30, 45, 67, 100, 200, 300, 980]
