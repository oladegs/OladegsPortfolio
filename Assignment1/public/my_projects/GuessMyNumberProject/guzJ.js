"use strict";
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields
// 4. Also restore the original background color (#222) and number width (15rem)

// Declarations:::
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (mess) {
  // The `message` parameter holds the value passed to the function
  document.querySelector(".message").textContent = mess;
};

// Check::: Check Button
document.querySelector(".check").addEventListener("click", function () {
  const guezzz = Number(document.querySelector(".guess").value);

  if (!guezzz) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guezzz === secretNumber) {
    displayMessage("Oshey Winner");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "pink";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guezzz !== secretNumber) {
    if (score > 1) {
      displayMessage(guezzz > secretNumber ? "O ti high" : "O ti Low");
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor =
        guezzz > secretNumber ? "green" : "blue";
    } else {
      displayMessage("Loser Oshi");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again::: Again Button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
