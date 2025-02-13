//!1 print odd number 1 to 15

//* Odd
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}
console.log("odd numbers");


//!2 print even number 2 to 10

for (let i = 0; i <= 10; i = i + 2) {
    console.log(i);
}
console.log("even numbers");

//!3 print multiplication table for 5

for (let i = 5; i <=50 ; i = i + 5) {
   console.log(i);
}

// let n = prompt("Write your number :");

// n = parseInt(n);

// for (let i = n; i <=n*10 ; i = i + n) {
//     console.log(i);
//  }


//! Favorite movie Game

let Favorite = "sanam teri kasam";
let guess = prompt("Guess My Favorite Movie :")

while((guess != Favorite)){
    if(guess == 'quit'){
        console.log("You Quit");
        break;
    }
    guess = prompt('wrong! Please try again!');
}

if(guess == Favorite){
    console.log(`Congrates My Favorite Movie is : ${Favorite}`);
}
