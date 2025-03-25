let para1 = document.createElement('p')
para1.innerText = "Hey I'm red!";

let body = document.querySelector('body'); 
body.append(para1);

// or

//! document.querySelector('body').append(para1);

para1.style.color = "red";

// or/

//! para1.classList.add("red"); // insert red class and style css

let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
body.append(h3);

h3.style.color = "blue";



let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I'm in a div";
para2.innerText = "Me Too!";

div.append(h1);
div.append(para2)
div.classList.add("pract")

document.querySelector("body").append(div);