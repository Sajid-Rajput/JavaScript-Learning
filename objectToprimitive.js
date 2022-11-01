console.log("Object to primitive conversion");

let detail = {
    name: "Muhammad Sajid Ali Khan",
    sapid: 70077989,

    [Symbol.toPrimitive](hint){
        alert(`hint: ${hint}`);
        return (hint === "string")? `name: ${this.name}` : this.sapid;
    }
};

// alert(detail);
// alert(+detail);
// alert(detail + 1);

let user = {
    name: "Muhammad Sajid Ali Khan",
    sapid: 70077989,

    toString(){
        return `name: ${this.name}`;
    },

    valueOf(){
        return this.sapid;
    }
};

// alert(user);
// alert(+user);
// alert(user + 1); // return value

// Only for ToString
let employeeName = {
    name: "Muhammad Sajid Ali Khan",

    toString(){
        return this.name;
    }
};

// alert(employeeName);
// alert(employeeName + 500);

// Only for valueOf

let employeeSap = {
    sapid: 70077989,

    valueOf(){
        return this.sapid;
    }
};

console.log(employeeSap);
console.log(employeeSap + 1);