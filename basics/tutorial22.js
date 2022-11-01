console.log("Problem 1");

let input = [0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1]

let sequence1 = 0
let sequence0 = 0
let danger = false;

input.forEach(function(element) {
    if (element === 1 && danger === false){
        sequence0 = 0;
        ++sequence1;
        if (sequence1 === 7){
            console.log("Danger");
            danger = true;
        }
    }
    else if (element === 0 && danger === false){
        sequence1 = 0;
        ++sequence0;
        if (sequence0 === 7){
            console.log("Danger");
            danger = true;
        }
    }
});

if (danger === false){
    console.log("Not in Danger");
}

console.log(sequence0);
console.log(sequence1);