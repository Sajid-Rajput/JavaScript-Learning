export default class User{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

export function fullname(user){
    console.log(`${user.firstname} ${user.lastname}`);
}