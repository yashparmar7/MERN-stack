let btns = document.querySelectorAll("button");

for (btn of btns) {
  btn.addEventListener("click", () => {
    alert("1 person following you");
  });
}
