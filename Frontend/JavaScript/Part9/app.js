//! getElementByClassName 

// let smallImg = document.getElementsByClassName("oldImg");

// console.dir(smallImg);

// for (let i = 0; i < smallImg.length; i++) {
//     console.dir(smallImg[i]);  
//     console.dir(smallImg[i].src = "./assets/spiderman_img.png");  
//     console.log(`value of IMG no. ${i} is changed.`);
// }


//! getElementByTagName
// - same as other 

//! Query Selectors

// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// //* nested selecting
// console.dir(document.querySelector(".box a"));

// //! Query Selectors All

// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelectorAll(".box a"));


//! manipulate style

let links = document.querySelectorAll(".box a");

 for(link of links){
     link.style.color = "red";
 }

// for(let i =0; i < links.length; i++){
//     links[i].style.color = "green";
// }