// let btn = document.querySelector("button");

// btn.onclick = () =>{
//     console.log("Button clicked");
// }

// btn.onmouseenter =() =>{
//     console.log("you entered the btn");
// }


//! addEventListener

// btn.addEventListener("click", () => {
//     console.log("Button clicked");
//     });


//! This keyword 
// btn.addEventListener("click",function (){
//     console.dir(this);
//    });

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "gray";
// }

// btn.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);


//! Keyboard Events :

// let input = document.querySelector("input");

// input.addEventListener("keydown", function(e){
//     console.log("key =", e.key);
//     console.log("code =", e.code);
//     console.log("key down");
// })


//! Form Events :

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("form submitted");
})