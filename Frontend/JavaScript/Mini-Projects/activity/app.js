let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  input.value = "";
});

// for (let delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let parent = this.parentElement;
//     parent.remove();
//   });
// }

//* Event Delegation for delete functionality
ul.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    let listItem = e.target.parentElement;
    listItem.remove();
    alert("Item Deleted");
  }
});
