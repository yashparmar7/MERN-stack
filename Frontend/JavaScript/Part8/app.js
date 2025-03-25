//! ForEach :-

// let arr = [1,2,3,4,5];

// let print = function(el){
//     console.log(el);
// }

// arr.forEach(print);

//* using arrow func
// arr.forEach((el)=>{console.log(el);})

//* array of object

// let arrObj = [
//     {
//         name: 'John',
//         age: 25
//     },
//     {
//         name: 'Jane',
//         age: 30
//     },
//     {
//         name: 'Jim',
//         age: 35
//     }
// ];

// arrObj.forEach((student) =>{
//     console.log(student.name);
//     console.log(student.age);
// });


//! Map :

// let num = [1,2,3,4,5];

// let doubleNum = num.map((el) => {
//     return el * 2;
//     });

//     console.log(doubleNum); // [2,4,6,8,10]
//     console.log(num); // [1,2,3,4,5] - original array

//! Filter :

// let nums = [2,4,1,5,6,2,7,8,9];
// let evenNums = nums.filter((el) => {
//     return el % 2 === 0;
//     });
    
//     console.log(evenNums); // [2,4,2,6,8]


//! Every :

// let con = [1,2,3,4].every((el) => (el%2 == 0));
// console.log(con); // false

// let conn =[2,4].every((el) => (el%2 == 0));
// console.log(conn); // true


//! Some

// let con = [1,2,3,4].some((el) => (el%2 == 0));
// console.log(con); // true

// let conn = [1,3].some((el) =>(el%2 == 0));
// console.log(conn); // false

//! Reduce :

// let nums = [1,2,3,4,5];

// let sum = nums.reduce((acc, el) => acc + el, 0);
// console.log(sum); // 15


//! Default Parameters :

// function greet(name = 'World'){
//     console.log(`Hello, ${name}!`);
//     }

//     greet(); // Hello, World!

// function sum(a,b=2){
//     console.log(a+b);
// }
    
//     sum(5); // 7


//! Spread :

// console.log(..."HelloWorld!");
//  H e l l o W o r l d

// let arr = [1,2,3,4,5]
// console.log(...arr); 
// 1 2 3 4 5


//* with array literals

// let arr1 = [1,2,3];
// let arr2 = [...arr1,4,5];
// console.log(arr2); // [1,2,3,4,5]


// let char =[..."hello"]
// console.log(char); //  h e l l o

//* with object literals


// let data ={
//     email : "yash@gmail.com",
//     passeord: 123
// }

// let dataCopy = {...data,id:1}
// console.log(dataCopy); // { email: 'yash@gmail.com', passeord: 123, id: 1 }

// let obj = {
//     a:1,
//     b:2,
//     c:3
// };
// let obj2 = {...obj,d:4,e:5};
// console.log(obj2); // { a: 1, b: 2, c:3, d: 4, e: 5 }


//! Rest :

// function sum(...args){
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }
// sum(1,2,3,4,5); // 1 2 3 4 5


//! Destructuring :

// let names = ["tony","bruce","steve","peter"];

// let [winner,runnerup] = names;
// console.log(winner,runnerup); // tony bruce

//* OR

// let winner = names[1];
// let runnerup = names[2];
// console.log(winner,runnerup); // bruce steve


//* with objects

const student ={
    name:"yash",
    age:20,
    class : 12,
    sub : ["hindi","english","math","science"],
    username : "yash123",
    password : 12345
};

// let username = student.username;
// let pass = student.password;

let {username,password} = student;
console.log(username,password); // yash123 12345

let {username : user,password : pass} = student;
console.log(user,pass); // yash123 12345



