// Select all buttons with the attribute [data-selection]
const selectionButtons = document.querySelectorAll("[data-selection]");

// Select the final column in the UI
const finalColumn = document.querySelector("[data-final-column]");

// Select the span element representing computer score
const computerScoreSpan = document.querySelector("[data-computer-score]");

// Select the span element representing your score
const yourScoreSpan = document.querySelector("[data-your-score]");

// Array of possible selections with their properties
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];

// Event listener for each selection button
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    // Retrieve the name of the selected option
    const selectionName = selectionButton.dataset.selection;

    // Find the selection object corresponding to the selected option
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );

    // Perform actions based on the selected option
    makeSelection(selection);
  });
});

// Function to process the selected option
function makeSelection(selection) {
  // Generate a random selection for the computer
  const computerSelection = randomSelection();

  // Check if you win based on your selection and computer's selection
  const yourWinner = isWinner(selection, computerSelection);

  // Check if the computer wins based on its selection and your selection
  const computerWinner = isWinner(computerSelection, selection);

  // Add the result of the computer's selection to the UI
  addSelectionResult(computerSelection, computerWinner);

  // Add the result of your selection to the UI
  addSelectionResult(selection, yourWinner);

  // Increment your score if you win
  if (yourWinner) incrementScore(yourScoreSpan);

  // Increment computer's score if it wins
  if (computerWinner) incrementScore(computerScoreSpan);

  // Check if either player has reached a score of 5
  if (parseInt(computerScoreSpan.innerText) === 5) {
    alert("Computer won! Try harder");
  } else if (parseInt(yourScoreSpan.innerText) === 5) {
    alert("You won! Good job");
  }
}

// Function to increment the score displayed on the UI
function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

// Function to add the result of a selection to the UI
function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");

  // Add a class to the result indicating if it's a winner or not
  if (winner) div.classList.add("winner");

  // Add the result to the UI
  finalColumn.after(div);
}

// Function to determine if a selection wins against another
function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

// Function to generate a random selection for the computer
function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}
