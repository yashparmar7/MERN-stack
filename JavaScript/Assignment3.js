//! Question : 1

// let numbers =[1,2,3,4,5,6,2,3];

// let num = 2;

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] === num){
//         numbers.splice(i,1);
//     }
// }
// console.log(numbers);

//! Question : 2

// let number = 287152;
// let count = 0;

// let copy = number;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// let number = 2871528;
// console.log(number.toString().length); 

//!Question : 3


//  let number = 287152;
//  let sum = 0;

//  let copy = number;

//  while(copy > 0){
//     digit = copy % 10;
//     sum += digit;
//      copy = Math.floor(copy/10);
//  }
//  console.log(sum);

//! Question : 4

// let n = 5;
// let factorial = 1;

// for(let i=1; i<=n;i++){
//     factorial *= i;
// }

// console.log(`factorial of ${n} is ${factorial}`);

//! Question : 5

// let arr = [2,5,10,4,2,7,1,9];

// let largest = 0;

// for(let i = 0; i<=arr.length;i++){
//     if(arr[i] > largest){
//         largest = arr[i];
//         }
// }

// console.log(largest);

let arr = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = Math.max(...arr);
console.log(largest); 

