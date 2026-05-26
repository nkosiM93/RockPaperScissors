// Coding the Computer's choice of the game
console.log("Rock, paper, scissors ?"); // Game call

// Randomize the computer's choice between the three choices
let humanChoice = prompt("Your choice => ");
let compChoice = 0; //Computer's choice variable
let chooser = (Math.trunc(Math.random() * 10)) % 3; // Random number between 0 and 2

// Get the computer's random choice
function getComputerChoice(choice) {

    // Choices
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Get the user's choice
function getUserChoice() {
    userChoice = prompt("Your choice => ");
    return userChoice;
}

console.log(getComputerChoice(chooser)); // Computer's choice
console.log(getUserChoice()); // User's choice
