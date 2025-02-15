//! Max in array using reduce

// let arr =  [1,4,2,5,6,17,2,9,22];

// let max = -1;

// for (let i = 0; i < array.length; i++) {
//     if(max > arr[i]){
//         max = arr[i];
//     }  
// }
// console.log(max); // Output: 9

//* Reduce
// let max = arr.reduce((max,el)=>{
//     if(max > el){
//         return max;
//     }else{
//         return el;
//     }
// })
// console.log(max); // Output: 9


//! Practice 1: check if all numbers in our array are multiple of 10 or not
// let arr1 = [10, 20, 21, 40, 5, 60];


// let multi = arr1.every((el) =>{
//    el % 10 === 0;
// });

// console.log(multi);

//! Practice 2 : create a function to find the min number in an array.

// let arr = [1, 4, 2, 0, 6];

// let min = arr.reduce((min,el)=>{
//     if(min < el){
//         return min;
//     }else{
//         return el;
//     }
// })

// console.log(min);