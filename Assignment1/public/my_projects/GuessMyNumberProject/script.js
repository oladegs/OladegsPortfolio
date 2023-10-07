"use strict";
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input fields
// 4. Also restore the original background color (#222) and number width (15rem)

// DOM is making JS interact w a web page
// DOM: Document Object Model :: Structured repr of HTML documents, it allows JS to access html elements and styles to manipulate them, is a connecting point btw html doc and js code, DOCUMENT::: Special object that is the entry point to the DOM , the WEB APIs::: they are the libraries browsers implement and can be accessed from JS code, they contain the DOM methods and properties

// Whenever a style is specified , we need to put the value as "string" and taget style as a prop, also use camelcase notation incase of 2 words

// Operations move from left to right
// when code reacts to smg in the DOM , we use an EventListener
// an event is something that happens on the page
/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number yaay!🎉";

document.querySelector(".number").textContent = 20;
document.querySelector(".score").textContent = 19;
const guez = (document.querySelector(".guess").value = 22);
console.log(guez); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Again ::: reset button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
});

// Check ::: checking button
document.querySelector(".check").addEventListener("click", function () {
  const guez = Number(document.querySelector(".guess").value);
  console.log(guez);

  // When there is no input
  if (!guez) {
    // document.querySelector(".message").textContent = "No Number ⛔";
    displayMessage("No Number ⛔");
  }
  // When player wins
  else if (guez === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number🎉";
    displayMessage("Correct Number🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } // When guess is wrong ::: we used ternary operator for the refactoring
  else if (guez !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guez > secretNumber ? "Too High 📈" : "Too Low 📉";
      displayMessage(guez > secretNumber ? "Too High 📈" : "Too Low 📉");
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor =
        guez > secretNumber ? "orange" : "blue";
    } else {
      //   document.querySelector(".message").textContent = "You Lost The Game 💥";
      displayMessage("You Lost The Game 💥");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//   // When guess is too high
//   else if (guez > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too High 📈";
//       score--;
//       document.querySelector(".score").textContent = score;
//       document.querySelector("body").style.backgroundColor = "red";
//     } else {
//       document.querySelector(".message").textContent = "You Lost The Game 💥";
//       document.querySelector(".score").textContent = 0;
//     }
//   } // When guess is too low
//   else if (guez < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too Low 📉";
//       score--;
//       document.querySelector(".score").textContent = score;
//       document.querySelector("body").style.backgroundColor = "blue";
//     } else {
//       document.querySelector(".message").textContent = "You Lost The Game 💥";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// Review all of this code w the html,css and js
