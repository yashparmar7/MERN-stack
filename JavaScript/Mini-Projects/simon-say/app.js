let gameSequance = [];
let userSequance = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highScore = 0; // Track highest score

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSequance = [];
  level++;
  h2.innerText = `Level ${level} | High Score: ${highScore}`;

  let randomIndex = Math.floor(Math.random() * 4);
  let randColor = btns[randomIndex];
  let randbtn = document.querySelector(`.${randColor}`);

  gameSequance.push(randColor);
  console.log(gameSequance);
  gameFlash(randbtn);
}

function checkAns(idx) {
  if (userSequance[idx] === gameSequance[idx]) {
    if (userSequance.length == gameSequance.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    // Update high score if the current level is higher
    if (level > highScore) {
      highScore = level;
    }

    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> High Score: <b>${highScore}</b> <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSequance.push(userColor);

  checkAns(userSequance.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSequance = [];
  userSequance = [];
  level = 0;
}
