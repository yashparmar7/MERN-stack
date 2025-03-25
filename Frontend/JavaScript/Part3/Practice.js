//*1

// let msg = "help!";

// console.log(msg.trim().toUpperCase());

//*2

// let name = "ApnaCollege";

// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));

//*3

// console.log(name.slice(4).replace("l","t"));

//*4

// let start = ['january','july','march','august']

// let deleteLetter1 = start.shift();
// let deleteLetter2 = start.shift();
// let addLetter1 = start.unshift("june");
// let addLetter2 = start.unshift("july");

// console.log(start);

//*5

// let start = ['january','july','march','august']

// let fn = start.splice(0,2,'july','june');

// console.log(fn);
// console.log(start);

//*6

// let lang =['c','c++','html','javascript','python','java','c#','sql']

// let rev = lang.reverse().indexOf('javascript')

// console.log(rev);

//*7

let ticTac = [
    ['X', null , 'O'],
    [null, 'X' , null],
    ['O', null , 'X']
];

console.log(ticTac);

console.log(ticTac[0][1] = 'O');
console.log(ticTac);