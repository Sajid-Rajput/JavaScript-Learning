console.log("Iterators in JavaScript");

// <- Creating own iterator ->
function ownIterator(obj){
    let nextNumber = 0;
    return{
        next(){
            if(nextNumber < obj.length){
                return {
                    value: obj[nextNumber++],
                    done: false
                }
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}

let number = [100, 200, 300, 400];

let string = "Muhammad Sajid Ali Khan";

let $number = number[Symbol.iterator]();
let $string = string[Symbol.iterator]();

let result = $string.next();

let iterateNumber = ownIterator(number);
console.log(iterateNumber.next());
console.log(iterateNumber.next());
console.log(iterateNumber.next());
console.log(iterateNumber.next());
console.log(iterateNumber.next());


// while (!result.done) {
//     console.log(result.value);
//     result = $string.next();
// }

// for (const num of number) {
//     console.log(num);
// }

let name = ['Sajid', 'Raza', 'Farhan', 'Wali'];

let $name = name[Symbol.iterator]();

console.log($name.next().value);
console.log($name.next().value);
console.log($name.next().value);
console.log($name.next().value);