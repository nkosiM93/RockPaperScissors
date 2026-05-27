// Coding the Computer's choice of the game
console.log("Rock, paper, scissors ?"); // Game call

// Randomize the computer's choice between the three choices
let compChoice = getComputerChoice(); // computer choice
let userChoice = getUserChoice(); //User choice variable
let userScore = 0;
let compScore = 0;

// Get the computer's random choice
function getComputerChoice() {

    // Choices
    switch(Math.trunc(Math.random() * 10) % 3){ 
        /*Randomize the computer's choice each time this function 
        is called */
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
    return prompt("Your choice => ").toLowerCase();
}

//Game play
function playRound(userChoice, compCh) {



    // handle ties immediately
    if (userChoice === compCh) {
        return "It's a tie!";
    }

    // Game Scenario 1
    if (userChoice === 'rock') {
        if (compCh === 'paper') {
            compScore++;
            return `You lose, ${compCh} beats ${userChoice}`;
        }
        userScore++;
        return `You win, ${userChoice} beats ${compCh}`;
    }

     // Game Scenario 2
    if (userChoice === 'paper') {
        if (compCh === 'scissors') {
            compScore++;
            return `You lose, ${compCh} beats ${userChoice}`;
        }
        userScore++;
        return `You win, ${userChoice} beats ${compCh}`;
    }

     // Game Scenario 3
    if (userChoice === 'scissors') {
        if (compCh === 'rock') {
            compScore++;
            return `You lose, ${compCh} beats ${userChoice}`;
        }
        userScore++;
        return `You win, ${userChoice} beats ${compCh}`;
    }

    return "Invalid choice, refresh the browser";
}

/*console.log(`Player 1 choice: ${compChoice}`); // Computer's choice
console.log(`Your choice: ${userChoice}`); // User's choice
console.log(playRound(userChoice, getComputerChoice(chooser))); // Play the game
console.log(`Your score: ${userScore}`);
console.log(`Computer score: ${compScore}`);*/

