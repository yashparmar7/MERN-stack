//! For Loop

// for (let i = 1; i <= 5; i++) {
//     console.log(i);   
// }


// for (let i = 10; i >= 1; i--) {
//     console.log(i);   
// }

//! Nested loop

// for(let i=1; i<=3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


//! While loop

// let i = 1;

// while(i<=5){
//     console.log(i);
//     i++;
// }

//! Break

// let i = 1;

// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }


//! Loops with array

// let fruits = ['apple','mango','banana','orange','kiwi'];

//  for(let i=0; i<fruits.length; i++){
//      console.log(i,fruits[i]);
//  }

// for(let i = fruits.length-1; i>=0; i-- ){
//     console.log(i,fruits[i]);
// }


//! Nested Loop with array 

// let heros = [
//     ['superman','batman','wonderwoman'],
//     ['spiderman','ironman','captain america'],
//     ['hulk','thor','black widow']
// ]


// for(let i=0; i<heros.length; i++){
//     console.log(`Team ${i+1}`);
//     for(let j=0; j<heros[i].length; j++){
//         console.log(heros[i][j]);
//     }
// }

// let vegetables = [  
//     ['potato', 'tomato', 'onion'],
//     ['carrot', 'cabbage', 'broccoli'],
//     ['spinach', 'lettuce', 'kale']
// ];

// for (let i = 0; i < vegetables.length; i++) {
//     console.log(`Vegetables ${i+1}`);  
//     for (let j = 0; j < vegetables[i].length; j++) {
//         console.log(vegetables[i][j]);  
//     }
// }


//! for of loop

// let toys = ['car','bike','plane','train','bus'];

// for(let toy of toys){   
//     console.log(toy);
// }

// for of loop with string

// for (char of "hello"){
//     console.log(char);
// }

//! for of in Nested loop

 let heros = [
    ['superman','batman','wonderwoman'],
    ['spiderman','ironman','captain america'],
    ['hulk','thor','black widow']
]

for (hero of heros){
    for(list of hero){
        console.log(list);
    }
}
