"use strict"
function watchMovie(age){
    if (age >= 18){
        return true;
    }
    else{
        return confirm("Your parents give the permission to watch the movie? ");
    }
}

let permission = watchMovie(prompt("Enter your age: ", [18]));

if (permission){
    console.log("Access Granted", !permission /*false*/);
}

else{
    console.log("Access Not Granted");
}