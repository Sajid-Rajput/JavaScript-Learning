console.log('Now, we learning about arrays in Tutorial 7 of JavaScript');

let marks = [100, 93, 94, 89];
const fruits = ['Orange', 'Apple', 'Grapes ', 'Mango'];
const mixed = [100, 200, 'Sajid', [1,2,3]]
console.log(mixed, (typeof mixed))

const arr = new Array(10, 20, 40, 'Orange')
console.log(arr, (typeof arr))
console.log(mixed[3])

console.log(mixed.length)
console.log(Array.isArray(fruits))

mixed[2] = "M. Sajid Ali Khan Rajput"
console.log(mixed)

let arrelement = mixed[3]
console.log('element: ', arrelement)
console.log((typeof arrelement))

let value = marks.indexOf(89) // If present return the index if not present returns the -1
console.log(value, (typeof value))


// Mutating or Modifing an array
marks.push(1000)
console.log(marks)


marks.unshift(100200, 900)
marks.pop() // Removes the last element of an array
console.log(marks)

marks.splice(0,2)
marks.reverse()
console.log(marks)

let marks2 = [1,2,3,4]
marks = marks.concat(marks2)
console.log(marks)

let arrObject = {
    "name": 'Sajid Ali Khan',
    city: "Lahore",
    rollNo: 70077989,
    marks: 93
}

console.log(arrObject['name'])
console.log(arrObject['rollNo'])
console.log(arrObject.marks)