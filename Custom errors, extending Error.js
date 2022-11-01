console.log("Custom errors, extending Error in JavaScript");

// Example 1: Extending Error
class ValidationError extends Error{
    constructor(msg){
        super(msg);
        this.name = "Validation Error";
    }
}

class NumberZeroError extends ValidationError{
    constructor(msg){
        super(msg);
        this.name = "NumberZero Error";
    }
}

function add(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new ValidationError(`Validation Failed!!!`);
    }
    if (x === 0 || y === 0){
        throw new NumberZeroError(`Number cannot be zero`);
    }
    return x+y;
}

try {
     const number = add(10, 20);
     console.log(number);
     
} catch (error) {
    if(error.name === "Validation Error"){
        console.log('Hey User! Kindly entered only number data.');
        
    }
    else if(error.name === "NumberZero Error"){
        console.log('Hey User! Data field cannot be zero');
    }
}