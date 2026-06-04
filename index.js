// Randomize the computer's choice between the three choices
let compChoice;
let userChoice;
let userScore = 0;
let compScore = 0;
let round = 1;
const gamePlayParent = document.querySelector("body");
const winnerTag = document.createElement("h1");
// Get the computer's random choice
function getComputerChoice() {

    // Choices
    switch(Math.floor(Math.random() * 3)){ 
        /* 
        Randomize the computer's choice each time this function 
        is called 
        */
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
    const gamePlayParent = document.querySelector("#gamePlay");

    gamePlayParent.addEventListener('click', (e) => {
        const clickedBtn = e.target;
        if (clickedBtn.tagName === "BUTTON") {
            return clickedBtn.textContent.toLowerCase();
        }
    } );
}

//Game play
function playRound(userChoice, compCh) {
    // handle ties immediately
    if (userChoice === compCh) {
        return "It's a tie!";
    }

    winnerTag.textContent = ""; // No winner yet

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

// Game-play function (main funtion)
function gamePlay() {
    console.log(`Round ${round++}!`); // Round number

    const gamePlay = document.querySelector("#gamePlay");
    const compChoiceParent = document.querySelector(".compChoice");
    const userChoiceParent = document.querySelector(".userChoice");
    const compScoreParent = document.querySelector(".compScore");
    const userScoreParent = document.querySelector(".userScore");
    const compScoreTag = document.createElement("h3");
    const compChoiceTag = document.createElement("h3");
    const UserChoiceTag = document.createElement("h3");
    const UserScoreTag = document.createElement("h3");
    compChoiceParent.appendChild(compChoiceTag);
    userChoiceParent.appendChild(UserChoiceTag);
    compScoreParent.appendChild(compScoreTag);
    userScoreParent.appendChild(UserScoreTag);

    gamePlay.addEventListener('click', (e) => {
        const clickedBtn = e.target;
        if (clickedBtn.tagName === "BUTTON") {
            if (userScore === 5 || compScore === 5) {
                if (userScore === 5) {
                    winnerTag.textContent = "Congratulations! You win the game!";
                } else {
                    winnerTag.textContent = "Sorry! You lose the game!";
                }
                gamePlayParent.append(winnerTag);
                userScore = 0;
                compScore = 0;
            }else{
                compChoice = getComputerChoice();
                userChoice = clickedBtn.textContent.toLowerCase();
                compChoiceTag.textContent = compChoice;
                UserChoiceTag.textContent = userChoice;
                playRound(userChoice, compChoice);
                UserScoreTag.textContent = userScore;
                compScoreTag.textContent = compScore;
            }
        }
    } );
}
gamePlay();