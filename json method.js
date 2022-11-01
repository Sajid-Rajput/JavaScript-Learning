console.log("JSON methods");

let user = {
    name: "Muhammad Sajid Ali Khan",
    sapid: 70077989,

    toString() {
        return `username: ${this.name}`;
    },

    valueOf() {
        return `password: ${this.sapid}`;
    }
};

// let stringifyUser = JSON.stringify(user);
// console.log(stringifyUser, typeof stringifyUser);

let student = {
    name: "Muhammad Sajid Ali Khan",
    sapid: "70077989",
    isAdmin: false,
    courses: ["Data Mining", "Artificial Intelligence", "Organizational Behaviour"],
    spouse: null
};

let studentTostring = JSON.stringify(student);
// console.log(studentTostring);

// console.log(JSON.stringify(1));
// console.log(JSON.stringify('test'));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify([1, 2, 3]));

// Functional Properties, Symbols and properties that stores undefined cannot supported by Json

let uselessObject = {
    sayHi() {
        alert(`Hello! Muhammad Sajid Ali Khan`);
    },
    [Symbol("SAP")]: 70077989,
    position: undefined
};

// console.log(JSON.stringify(uselessObject)); // empty

// JSON fucntion supports nested objects

let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ['CEO', 'CFO', 'COO', 'Manager'] 
    }
};

let room = {
    number: 233,

    toJSON() {
        return this.number;
    }
}


// EXAMPLE TO CREATE A CIRCULAR OBJECT
meetup.place = room; 
room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup)); // JSON does not support circular object
// console.log(JSON.stringify(room));


// toJSON

let meetup1 = {
    title: "Conference",
    participants: ['CEO', 'CFO', 'COO', 'Manager'],
    room
};

let meetupObject = JSON.stringify(meetup1);
console.log(JSON.parse(meetupObject));