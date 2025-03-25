// let n = 5;

// for (let i = 1; i < n; i++) {
//   console.log("Hello", i);
// }

//! Process.argv

// console.log(process.argv);

// let args = process.argv;

// for (let i = 2; i < args.length; i++) {
//   console.log("Hello to", args[i]);
// }

//! module export

// const math = require("./math");

// console.log(math);

// console.log(math.sum(1, 2));
// console.log(math.mul(2, 3));
// console.log(math.PI);

//! Export Directories
// const info = require("./Fruits");

// console.log(info);

//! Using import

import { sum, PI } from "./math.js";

console.log(sum(1, 2));
console.log(PI);
