// Coding the Computer's choice of the game
console.log("Rock, paper, scissors ?"); // Game call

// Randomize the computer's choice between the three choices
let compChoice = 0; //Computer's choice variable
let chooser = (Math.random() * 10) % 3; // Random number between 0 and 2

// Choices
switch(chooser) {
    case 0:
        compChoice = "rock";
        break;
    case 1:
        compChoice = "paper";
        break;
    case 2:
        compChoice = "scissors";
        break;
}

console.log(compChoice); // Computer's choice