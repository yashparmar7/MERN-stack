let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li"); // Fixed variable name

div.addEventListener("click", function () {
  console.log("div clicked");
});

ul.addEventListener("click", function (event) {
  console.log("ul clicked");
  event.stopPropagation(); // Prevents bubbling up to UL and DIV
});

for (let li of lis) {
  li.addEventListener("click", function (event) {
    console.log("li clicked");
    event.stopPropagation(); // Prevents bubbling up to UL and DIV
  });
}
