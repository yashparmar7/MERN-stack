//1

let color = "yellow";

if(color === "red"){
    console.log(`stop! light color is ${color}`);
}
if(color === "yellow"){
    console.log(`Slow Down! light color is ${color}`);
}
if(color === "green"){
    console.log(`Go! light color is ${color}`);
}

//2

let size = "S";

if(size === "S"){
    console.log("Popcorn Price is RS. 50");
}else if(size === "M"){
    console.log("Popcorn Price is RS. 100");
}else if(size === "L"){
    console.log("Popcorn Price is RS. 200");
}else if(size === "XL"){
    console.log("Popcorn Price is RS. 250");
}else{
        console.log("Size not available");
}

//3

let str = "Hello";

if((str[0] === "a") && (str.length > 3)){
    console.log("String is Good");
}else{
    console.log("String is Bad");
}

//4

let num = 12;

if((num%3 === 0) && ( (num+1 == 15) || (num-1 == 11) )){
    console.log(" Safe ");
}else{
    console.log(" Not Safe ");
} 

//5

let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}
