// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Get the input and message elements
const guessInput = document.getElementById("guess");
const message = document.getElementById("message");

// Create the function to check the guess
function checkGuess() {
  // Get the user's guess
  const guess = Number(guessInput.value);

  // Check if the guess is correct
  if (guess === secretNumber) {
    message.textContent = "Congratulations! You guessed the number!";
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Guess again.";
  } else if (guess > secretNumber) {
    message.textContent = "Too high! Guess again.";
  }

  // Clear the input field
  guessInput.value = "";
}