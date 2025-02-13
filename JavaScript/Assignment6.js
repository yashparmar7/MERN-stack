//! Qu : 1

let arrayAverage = () => {
    let numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        }
        let average = sum / numbers.length;
        return average;
}

console.log(arrayAverage());

//! Que : 2

let isEven = (number) => {
    if(number % 2 == 0){
        console.log(`${number} is Even`);
    }else{
        console.log(`${number} is Odd`);
    }
}
isEven(10);
isEven(9);

//! Que : 3

const obj ={
    message : 'Hello world',

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(obj.logMessage,1000);

//! Que : 4

let length = 4;

function callback(){
    console.log(this.length);
}

const object ={
    length : 5,
    method(callback){
        callback();
    },
};

object.method(callback,1,2);