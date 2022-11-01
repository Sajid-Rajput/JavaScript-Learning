console.log("In the tutorial, we learned about If and Else statements");

const age = 100;
const var1 = 34;
const doesDrive = true

// '==' this operator is used for comparison, it compares the value not the data type
// '===' this operator compares the values and the data type as well
if (age === 19){
    console.log('Age is equal to 19');
}

else if (age !== 19){
    console.log('Age is 19');
}
// else{
//     console.log('Age is not equal to 19');
// }

// if (typeof var1 !== 'undefined'){
//     console.log("var1 is defined");
// }

if (typeof var1 !== "undefined"){
    console.log("var1 is defined");
}

else{
    console.log("var1 is not defined");
}
 
if (doesDrive == true && age>=18);
if (doesDrive == true || age>=18){
    console.log("You're eligible for driving.");
}
else{
    console.log("Not eligible for driving");
}

//Ternary operator
console.log(age==19? "Age is 19": "Age is not 19");

switch (age) {
    case 18:
        console.log("Your age is 18");
        break;

    case 32:
        console.log("Your age is 32");
        break;

    case 45:
        console.log("Your age is 45")
        break;

    default:
        console.log("Your age is unknown");
        break;
}