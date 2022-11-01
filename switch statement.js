console.log("Switch Statement");
//Type matter in switch statement

let arg = prompt("Enter a number: ");
switch (arg) {
    case '0':
    case '1':
        console.log("zero or one");
        break;
    
    case '2':
        console.log("Two");
        break;

    case 3:
        console.log("three");
        break;
        
    default:
        console.log("Unknown Number");
        break;
}