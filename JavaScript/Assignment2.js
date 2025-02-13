//*1

// let arr = [7,9,0,-2]

// let n = 3;

// console.log(arr.slice(0,n));

//*2

// console.log(arr.slice(arr.length-n));

// OR

// console.log(arr.splice(0,1));
// console.log(arr);

//*3

// let str = "";

// if(str.length == 0){
//     console.log("String is not blank");
// }else{
//     console.log("String is blank");
// }

//* 4

//  let str = "ApNaCoLlEgE";
//  let idex = 3;

//  if(str[idex] == str[idex].toLowerCase()){
//      console.log("char is lowercase");
//  }else{
//      console.log("char is not lowercase");
//  }


//* 5

// let str = "   Hello How are you";

// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

//* 6 

let arr = ["hello", 'a', 23, 64, 99, -6]

let item = 64;

if(arr.indexOf(item) != -1){
    console.log("element is already exist!");
}else{
    console.log("element doesn't exist");
}