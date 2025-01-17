/*
Write a function fizzBuzz(max) that accepts a number as an arg. The function
should return an array containing all positive numbers less than max that are
divisible by either 3 or 5, but not both.
*/

// Your code here 

function fizzBuzz(max){

    let array = []

    for(let i=1; i<max; i++){
        
        if(i%3===0 || i%5===0 && not both (i%3===0 && i%5===0)){
            array.push(i)
        }
    }

    return array
}


// console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
// console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fizzBuzz;