

/* We created a new variable createCounter and assigned function execution*/
function createCounter(){
    let counter = 0;
    const myFunction = function (){
        counter = counter +1;//This function adds 1 to the variable counter and returns its value
        return counter;
    }
    return myFunction;
}


const increment = createCounter(); // We created a variable with an undefined statement

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);