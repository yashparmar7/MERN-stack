//! Ques : 1

let arr = [2, 4, 5, 6, 7];

// let Square = (arr) =>{
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]*arr[i]);
//     }
// }
// Square(arr);
// Output : 4 16 25 36 49

//* OR

const square = arr.map((num) => num * num);
console.log(square); // Output : 4 16 25 36 49

// let sumArray = (arr) => {
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// };

// console.log(sumArray(arr));

//* OR

let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output : 24

// let avgArray = (arr) => {
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total / arr.length;
// };

// console.log(avgArray(arr));

//* OR

// let avg = sum / arr.length;
// console.log(avg); // Output : 4.8

let avg = arr.reduce((acc, num) => acc + num, 0) / arr.length;
console.log(avg); // Output : 4.8

//! Ques :2

let newArray = arr.map((num) => num + 5);
console.log(newArray);

//! Que : 3

let string = ["adam", "bob", "jhon"];

let newStr = string.map((str) => str.toUpperCase());
console.log(newStr); // Output : ["ADAM","BOB","JHON"]

//! Que :4

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2],10,4));


//! Que :5

const mergeObj =(obj1,obj2)=>({
    ...obj1,
    ...obj2
})
console.log(mergeObj({a:1,b:2},{c:3,d:4}));
