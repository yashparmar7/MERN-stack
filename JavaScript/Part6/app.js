//! Function 

// function sayHello() {
//     console.log('Hello');
// }

// sayHello(); 

//! Function with Arguments

// function greet(name) {
//     console.log('Hello ' + name);
// }

// greet('Yash');

// ex :- 2

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(5, 10);


//! Return Statement

// function add(a, b) {
//     return a + b;
// }

// let p = add(5, 10); // This will not print anything
// console.log(p); // This will print 15

// console.log(add(5, 10)); // This will print 15

 
//! Function Expression

// let greet = function() {
//     console.log('Hello');
// }
// greet();


//! Higher Order Function

// function multipleGreet(func,n){
//     for(let i = 0; i <= n; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("Hello");
// }

// multipleGreet(greet,5);

// multipleGreet(function(){ console.log("Hello"); },5);

//! Higher Order Function (Returning Function)

// function oddEvenTest(request){ // Factory Function
//     if(request === 'odd'){
//         return function(n){
//            console.log(!(n % 2 === 0));
//         }
//     }else if(request === 'even'){
//         return function(n){
//             console.log(n % 2 === 0);
//         }
//     }else{
//         console.log('Invalid Request');
//     }
// }


// let isOdd = oddEvenTest('odd');
// let isEven = oddEvenTest('even');


// console.log(isOdd(5)); // This will print true
// console.log(isEven(5)); // This will print false


//! Method 

// const calc ={
//     add: function(a,b){
//         return a + b;
//     },
//     subtract: function(a,b){
//         return a - b;
//     },
//     multiply: function(a,b){
//         return a * b;
//     }
// }

// console.log(calc.add(5,10)); // This will print 15
// console.log(calc.subtract(5,10)); // This will print -5
// console.log(calc.multiply(5,10)); // This will print 50

//* Short Hand Method
//! 1
const calc1 = {
    add(a, b) { return a + b; },        
    subtract(a, b) { return a - b; },   
    multiply(a, b) { return a * b; }    
};

console.log(calc1.add(5, 10)); // Now prints 15 
console.log(calc1.subtract(10, 5)); // Prints 5 
console.log(calc1.multiply(5, 2)); // Prints 10 

//!2
const calc2 = {
    add: (a, b) => a + b,        
    subtract: (a, b) => a - b,   
    multiply: (a, b) => a * b    
};

console.log(calc1.add(5, 10)); // 15 
console.log(calc1.subtract(10, 5)); // 5 
console.log(calc1.multiply(5, 2)); // 10 


