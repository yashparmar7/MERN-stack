//! Object Literals

// const obj = {
//     name : "yash",
//     age : 20,
//     city : "Surat"
// };

// console.log(typeof obj);

// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);

//! change value

// obj.city = "Vadodara";
// console.log(obj);

//! add key value pair

// obj.gender = "Male";
// console.log(obj);

//! Delete property

// delete obj.gender;
// console.log(obj);


//! Object of Object

// const classInfo ={
//     aman : {
//         grade : "A+",
//         city : "Delhi"
//     },
//     om : {
//         grade : "A",
//         city : "Surat"
//     },
//     vikash : {
//         grade : "O+",
//         city : "Mumbai"
//     }
// };

// console.log(classInfo);
// console.log(classInfo.aman);
// console.log(classInfo.aman.city);


//! Array of Object

// const classInformation = [
//     {
//         name:"Yash",
//         age : 20
//     },
//     {
//         name:"Om",
//         age : 18
//     },
//     {
//         name:"Vikash",
//         age : 19
//     }
// ];

// console.log(classInformation);
// console.log(classInformation[1]);
// console.log(classInformation[1].name);

//! Math Objects 

console.log(Math.PI);
console.log(Math.E);


console.log(Math.abs(-12)); // positive values
console.log(Math.abs(12));

console.log(Math.pow(5,2)); // a ** b

console.log(Math.floor(5));
console.log(Math.floor(5.5)); // nearest lower  values

console.log(Math.ceil(5));
console.log(Math.ceil(5.5)); // nearest larger values

console.log(Math.random());  // gives 0 to 1 value but not include 1