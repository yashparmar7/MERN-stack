let form = document.querySelector("form");

// form.addEventListener("submit", function(e){
//     e.preventDefault();
    
    //access value
//    let user = document.querySelector("#user");
//    let pwd = document.querySelector("#pwd");

//    //*OR

//    let user = this.elements[0]; // form.elements[0]
//    let pwd = this.elements[1];

//    console.log(user.value);
//    console.log(pwd.value);

//    alert(`Hi ${user.value}, your password is set to ${pwd.value}`);
// });




let user = document.querySelector("#user");

//! Change event

// user.addEventListener("change", function() {
//     console.log("Input changed");
//     console.log("Final value:", this.value);
// });


//! Input event
user.addEventListener("input", function() {
    console.log("Input changed");
     console.log("Final value:", this.value);
 });
