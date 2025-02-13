//! This keyword

// const student ={
//     name: 'Yash',
//     age: 20,
//     eng: 95,
//     math: 85,
//     science: 90,
//     getAvg(){
//         let avg = (this.eng + this.math + this.science) / 3;
//         console.log(avg);
//     }
// }

// student.getAvg();


//! Try..Catch

// try{
//     console.log("hello");
//     console.log("hello");
//     console.log(a);
// }catch(e){
//     console.log(e);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

//! Arrow Function 

// const sum = (a,b) =>{
//     return a + b;
// }
// console.log(sum(5,6));

//* Implicit function

// const sum = (a,b) => (a * b);
// console.log(sum(5,6));

//! setTimeout(function,timer)

// console.log("hi there!");

// setTimeout(() => {
//     console.log("Yash");
//     }, 2000);

// console.log("welcome");

//! setInterval(function,timer)

// let i = 0;
// let intervalId = setInterval(() => {
//     console.log(i);
//     i++;
    
//     if (i === 10) {  // Stop after 10 iterations
//         clearInterval(intervalId);
//     }
// }, 1000);


//! this in Arrow function

// const student = {
//     name: "Yash",
//     age: 20,
//     prop : this, //global scope

//     getName: function (){
//         console.log(this); // Parent scope -> student
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this); // parent scope -> window
//        return this.name;
//        },

//     getInfo1: function (){
//         setTimeout(() => {
//             console.log(this); // student
//         }, 2000);
//     },
//     getInfo2: function(){
//         setTimeout(function (){
//             console.log(this); // window
//         },2000)
//     }
// }

// console.log(student.getName()); 
// console.log(student.getMarks()); 
// console.log(student.getInfo1()); 
// console.log(student.getInfo2()); 
