//! Practice 1 Write an arrow function that return the square of a number 'n'.

let square = (n) => (n*n) ; 

console.log(square(5));


//! Write a function that print "hello world" 5 times at intervals of 2s each.

let count = 0;
let intervalId = setInterval(() => {
    console.log("hello world");
    count++;

    if (count === 5) {  // Stop after printing 5 times
        clearInterval(intervalId);
    }
}, 2000);

