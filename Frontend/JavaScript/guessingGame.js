// const max = prompt("Enter the Max Number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the Number");

// while(true){
//     if(guess == "quit"){
//         console.log("User Quit");
//         break;
//     }
    
//     if(guess == random){
//         console.log(`You are right! Congrats!! random number was ${random}`);
//         break;
//     }else if(guess < random){
//         guess =prompt("Hint : Your guess was to small, please try again!")
//     }else{
//         guess =prompt("Hint : Your guess was to large, please try again!")
//     }
// }


const maxNumberInput = document.getElementById("max-number");
const startGameButton = document.getElementById("start-game");
const gameSection = document.getElementById("game-section");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const quitButton = document.getElementById("quit-button");
const hintParagraph = document.getElementById("hint");

let randomNumber;
let max;

startGameButton.addEventListener("click", () => {
  max = parseInt(maxNumberInput.value);
  if (isNaN(max) || max <= 0) {
    alert("Please enter a valid maximum number!");
    return;
  }
  randomNumber = Math.floor(Math.random() * max) + 1;
  gameSection.classList.remove("hidden");
});

guessButton.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  if (isNaN(guess)) {
    hintParagraph.textContent = "Please enter a valid number!";
    return;
  }
  if (guess === randomNumber) {
    hintParagraph.textContent = `You are right! Congrats!! The random number was ${randomNumber}`;
    guessButton.disabled = true;
    guessInput.disabled = true;
  } else if (guess < randomNumber) {
    hintParagraph.textContent = "Hint: Your guess was too small, please try again!";
  } else {
    hintParagraph.textContent = "Hint: Your guess was too large, please try again!";
  }
});

quitButton.addEventListener("click", () => {
  hintParagraph.textContent = "User Quit the game.";
  guessButton.disabled = true;
  guessInput.disabled = true;
});
