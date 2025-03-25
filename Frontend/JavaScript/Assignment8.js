//1
let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = "Click me!"

document.querySelector('body').append(input);
document.querySelector('body').append(btn);

//2
btn.setAttribute = ("id","btn");

input.setAttribute =("placeholder","username");

//3
let btnS = document.querySelector('#btn');

btnS.style.backgroundColor = "blue";
btnS.style.color = "white";

//4
let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";

document.querySelector('body').append(h1);

h1.style.color = "purple";

//5

let p = document.createElement('p');
p.innerHTML = "Apna College<b> Delta</b> Practice";

document.querySelector('body').append(p);