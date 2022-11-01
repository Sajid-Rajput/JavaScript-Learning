console.log("Object Constructor");

"use strict"

//Normal way for creating multiple objects with a single template
function profile(f_name, l_name){

    var profileObject = {
        firstname: f_name,
        lastname: l_name,
        fullname: function(){
            console.log(`My fullname is ${this.firstname} ${this.lastname}`)
        }
    };
    return profileObject;

}

let printProfile = profile("Muhammad Sajid", "Ali Khan");

console.log(printProfile);

// Preferred Method for object constructor
function Profile(firstname, lastname){

    this.firstname = firstname;
    this.lastname = lastname;
    this.full_name = () => {
        console.log(`My fullname is ${firstname} ${lastname}`);
    }

}

let Printprofile = new Profile("Muhammad Sajid", "Ali Khan")

Printprofile.full_name();