console.log("Here, we are learning about loops");

//Post and Pre Increment and Decrement Operator
let a = 34;
console.log(++a); //Pre Increment
console.log(a);

// For loop
// for(let i=0; i>=5; i++){
//     console.log(i);
// }

//while loop
// let i = 0;
// while(i>=5){
//     console.log(i++);
// }

//Do while loop
// let i = 0;
// do{
//     console.log(i++)
// }while(i<=5)

//Break Statement
// let i = 0;
// do{
//     if (i===5){
//         break;
//     }
//     console.log(i++);
// }while(i<=10);

//Continue Statement
// let i = 0;
// do{
//     if (i===5 || i===6){
//         i++;
//         continue;
//     }
//     console.log(i++);
// }while(i<=10);



//Array iteration with for loop
let array = [2,4,6,8,10,12,14];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

//Interate an array with the help of For each function
array.forEach(function(element, index, array){
    console.log(element, index, array);
});


//Iterate the object
let obj = {
    $name: "Muhammad Sajid Ali Khan",
    age: 21,
    type: 'Programmer',
    OS: 'Ubuntu'
};

for(key in obj){
    console.log(obj[key])
}