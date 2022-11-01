console.log("setTimeout and setInterval tutorials");

// <- setTimeout: Allow us to run the function after the interval ->
// <- setInterval: Allows us to run the function repeatedly after the some interval of time ->

function greet(name, goodbye_msg) {
    console.log(`Hello! ${name} Good Morning ${goodbye_msg}`);
}

// alert: We only pass function name without paranthesis in setTimeout
timeOut = setTimeout(greet ,5000, "Muhammad Sajid Ali Khan", "Take Care"); //setTimeout returns the unique id

clearTimeout(timeOut);

// setInterval

let msgInterval = setInterval(greet, 5000, "Muhammad Sajid Ali Khan", "Take Care");
clearInterval(msgInterval);

// create a clock using setInterval
let breaker = 0;
function clock(){
    let time = new Date();
    console.log(time);
    breaker++;
    if (breaker >= 10){
        clearInterval(timeInterval);
    }
}

let timeInterval = setInterval(clock, 1000);

// Note: Once the setInterval function starts it never breaks it breaks only inside the function as show in "create a clock using setInterval"