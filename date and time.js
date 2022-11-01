console.log("Date and Time tutorial");

let now = new Date();
console.log(now);

let dt = new Date(1000); // 1000 represents seconds
console.log(dt);

// let newDate = new Date("2060-01-26");
// console.log(newDate);

// let newDate = new Date(year, month, date, hour, minute, second, millisecond)

let newDate = new Date(2060, 00, 26, 17, 12, 11, 17);
console.log(newDate);

let year = newDate.getFullYear();
console.log(year);
let month = newDate.getMonth();
console.log(month);
let date = newDate.getDate();
console.log(date);
let hour = newDate.getHours();
console.log(hour);


newDate.setDate(27);
newDate.setSeconds(59);

console.log(newDate);