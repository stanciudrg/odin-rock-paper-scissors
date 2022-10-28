/* UI program

let startContainer = document.querySelector(".start-game-container");
let startButton = document.querySelector(".start-game-button");
console.log(startButton);
let loadingElement = document.querySelector("#loading");
console.log(loading);
let gameContainer = document.querySelector(".game-container");


// Replace Start Game button with loading animation
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    loadingElement.style.display = 'block';

    // Display the loading animation for 3s and start the game
    setTimeout(() => {
        loadingElement.style.display = 'none';
        startContainer.style.display = 'none';
        gameContainer.style.display = 'flex';
        // Adds transition for Game Container
        setTimeout(() => {
            gameContainer.style.opacity = '1';
            gameContainer.style.transform = 'scale(1)';
        }, 10)
    }, 3000);
})
*/

// Game

// Game info text
let gameInfo = document.querySelector('.game-info p');

// Game score
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

// Player icons
let rockIconPlayer = document.querySelector('#rock-icon-player');
let paperIconPlayer = document.querySelector('#paper-icon-player');
let scissorsIconPlayer = document.querySelector('#scissors-icon-player')

// Computer icons
let rockIconComputer = document.querySelector('#rock-icon-computer');
let paperIconComputer = document.querySelector('#paper-icon-computer');
let scissorsIconComputer = document.querySelector('#scissors-icon-computer');

let playerSelection;
let computerSelection;

rockIconPlayer.addEventListener('click', () => {
    playerSelection = 'ROCK';
    computerSelection = getComputerChoice();
});
paperIconPlayer.addEventListener('click', () => {
    playerSelection = 'PAPER';
    computerSelection = getComputerChoice();
});
scissorsIconPlayer.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    computerSelection = getComputerChoice();
});

function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS']
    return (choices[Math.floor(choices.length * Math.random())]);
}

/* Console program

let computer = 0;
let player = 0;


function convertPlayerChoice() {
    let choice = prompt('Rock, Paper or Scissors?');
    if (choice != null) {
        return choice.toUpperCase();
    } else {
        return null;
    }
}

function checkPlayerChoice() {
    let choice = convertPlayerChoice();
    while (choice !== 'ROCK' && choice !== 'PAPER' && choice !== 'SCISSORS' && choice !== null) {
        alert('Please enter a correct value');
        return checkPlayerChoice();
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `\nYou both chose ${playerSelection}, it's a tie!\n\n`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        computer++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nPAPER beats ROCK. You lost!\n\n`;
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        player++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nROCK beats SCISSORS. You won!\n\n`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        player++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nPAPER beats ROCK. You won!\n\n`;
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        computer++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nSCISSORS beats PAPER. You lost!\n\n`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computer++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nROCK beats SCISSORS. You lost!\n\n`;
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        player++;
        return `\nYou chose ${playerSelection} and the computer chose ${computerSelection}. \nSCISSORS beats PAPER. You won!\n\n`;
    } else {
        return "\nYou cancelled the game. Enter 'startGame()' in the console if you want to play again.\n\n";
    }
}

function startGame() {

    computer = 0;
    player = 0;

    for (let i = 0; i < 5; i++) {

        const playerSelection = checkPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

        if (playerSelection !== null) {
            console.log(`Computer: ${computer} | Player: ${player}`);
        } else {
            computer = null;
            player = null;
            break;
        }
    }

    if (computer == null && player == null) {
        return;
    } else if (computer == player) {
        return console.log("\nYou both have the same score, I recommend playing another game to decide the winner. Type 'startGame()' in the console to begin. Have fun!\n\n")
    } else if (computer > player) {
        return console.log("\nYou lost the game, the computer has a higher overall score. Type 'startGame()' in the console to play again.\n\n")
    } else {
        return console.log("\nLooks like you won the game, as you have the higher overall score. Good job! Type 'startGame()' in the console to play again.\n\n")
    }
} */
