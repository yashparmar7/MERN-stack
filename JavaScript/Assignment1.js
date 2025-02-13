// 1

// let number = 23;

// if(number%10 == 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }

//2

// let userName = prompt("Enter your name :");
// let userAge = prompt("Enter your age :");

// let msg = alert(`${userName} is ${userAge} year old`);

// console.log(msg);

//3

// let quarter = 4;

// switch(quarter){
//     case 1:
//         console.log("January,February,March");
//         break;
//     case 2:
//         console.log("April,May,June");
//         break;
//     case 3:
//         console.log("July,August,September");
//         break;
//     case 4:
//         console.log("October,November,December");
//         break;
//     default:
//         console.log("Quarter is Invalid!, Months not found!");
// }

//4

// let str = "Apples";

// if((str[0] == 'A' || str[0] == 'a') && (str.length > 5) ){
//     console.log(`${str} is golden string`);
// }else{
//     console.log(`${str} is not golden string`);
// }

//5

// let a = 25;
// let b = 78;
// let c = 50;

// if (a > b && a > c) {
//     console.log("a is the largest");
// } else if (b > a && b > c) {
//     console.log("b is the largest");
// } else {
//     console.log("c is the largest");
// }


//6

let num1 = 34;
let num2 = 47852;

if((num1%10) == (num2%10)){
    console.log("number have the same last digit which is", num1 %10);
}else{
    console.log("number don't have the same last digit");
}