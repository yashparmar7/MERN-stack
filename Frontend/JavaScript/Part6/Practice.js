//! Practice 1 - create a function that print a poem

// function printPoem() {
//     console.log("The sun shines bright in the morning light,");
//     console.log("The moon shines bright in the night.");
//     console.log("The stars twinkle in the sky,");
//     console.log("The birds fly high and high.");
// }

// printPoem();

//! Practice 2 - Create a funtion to roll a dice & always display the value of the dice(1-6)

// function rollDice() {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }

// rollDice();
// rollDice();
// rollDice();
// rollDice();

//! Practice 3 -  Create a function that gives us the average of 3 numbers

// function average(a, b, c) {
//     let avg = (a + b + c) / 3;
//     console.log(avg);
// }

// average(1, 2, 3);

//! Practice 4 - Create a function that print the multiplication table of a number

// function multiplicationTable(n){
//    for(let i = n; i <= n*10; i+=n){
//        console.log(i);
//    }
// }
// multiplicationTable(5);

//! Practice 5 : - Create a function that return the sum of numbers from 1 to n

// function sumReturn(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum;
// }
 
// console.log(sumReturn(10));
// console.log(sumReturn(5));

//! Practice 6 : - Create a function that return the concatenation of all strings in array.

// function concatArray(arr){
//     let result = '';
//     for(let i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     return result;
// }
// console.log(concatArray(['Hello', ' ', 'World', '!']));

//! Practice 7 : - What will be the output of the following code?

// let greet = "hello"; // global scope

// function changeGreet(){
//     let greet = "namaste"; // function scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet); //lexical scope
//     }
//     // innerGreet();
// }

// console.log(greet);
// changeGreet();

