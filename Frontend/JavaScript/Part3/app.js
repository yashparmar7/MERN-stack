// //! trim

// let str = "   Hello      ";
// let trim = str.trim();

// console.log(str);
// console.log(trim);

// //! toUppperCase & toLowerCase
// let str1 = "Hello world!"

// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

// //! indexOf

// console.log(str1.indexOf('o'));

// //! Slice

// console.log(str1.slice(2,7));

// //! Replace

// console.log(str1.replace("world","Yash"));

// //! Repeat

// console.log(str1.repeat(3));

// //* Method Chaning :-

// console.log(str.toUpperCase().trim());


//! Array :-

// let fruits = ['apple','banana','orange']

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[0][0]);

//! Push , Pop , Unshift , Shift

//1

// let cars = ['Audi','BMW','Xuv','Maruti','Toyota']

// console.log(cars.push("Ferrari"));
// console.log(cars);

// console.log(cars.pop());
// console.log(cars);


// console.log(cars.unshift("Ferrari"));
// console.log(cars);

// console.log(cars.shift());
// console.log(cars);

//! indexOf

// console.log(cars.indexOf("Xuv"));


//! include

// console.log(cars.includes("Xuv"));

//! Concate

// let primary = ['red','yellow','blue']

// let secondary = ['orange', 'green','violet']

// let merge = primary.concat(secondary);
// console.log(merge);

//! Reverse

// console.log(primary.reverse());

//! Slice

// console.log(cars.slice());
// console.log(cars.slice(2));
// console.log(cars.slice(2,4));
// console.log(cars.slice(-2));

//! Splice
// let cars = ['Audi','BMW','Xuv','Maruti','Toyota']

// console.log(cars.splice(4));
// console.log(cars);
// console.log(cars.splice(0,1));
// console.log(cars);
// console.log(cars.splice(0,1,"black","gray"));
// console.log(cars);

//! Sort

// let Alphabets = ['A','D','Z','E','B']

// console.log(Alphabets.sort());

//! Nested Array

let nums = [
    [1,2],
    [3,4],
    [5,6]
];

console.log(nums[0]);
console.log(nums[0][1]);