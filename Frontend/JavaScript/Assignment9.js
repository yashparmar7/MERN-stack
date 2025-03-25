// let btn = document.querySelector("button");


//* Mouseout
// btn.addEventListener("mouseout", function(){
//   console.log("mouse out");
// })

//* Keypress
// document.addEventListener("keydown", function(event){
//   console.log("Key pressed: " + event.key);
// });

//* Scroll
// window.addEventListener("scroll", function(){
//   console.log("Page scrolled");
// });


//* load

// window.addEventListener("load", function(){
//     console.log("Page load");
//   });


//! question 2

// btn.addEventListener("click", function(){
//     btn.style.backgroundColor = "green";
//     console.log("btn click and changed color to green");    
// })


//! question 3

let input = document.querySelector("#name");

let h2 = document.querySelector("h2")

input.addEventListener("input", function(){
  let filterValue = input.value.replace(/[^a-zA-Z\s]/g,"")  ;
  input.value = filterValue;
  h2.textContent = filterValue || "Enter your name";

})