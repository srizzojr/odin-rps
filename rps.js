// JS File for Rock, Paper, Scissors Project

// Constants for choices
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const computerChoices = [ROCK, PAPER, SCISSORS];

// Initialize scores and rounds
let computerScore = 0;
let playerScore = 0;
let numOfRounds = 0;
const maxRounds = 5;

// Get HTML elements
const computerScoreHTML = document.getElementById('js-computer-score');
const playerScoreHTML = document.getElementById('js-player-score');
const messageContainer = document.getElementById('js-message');

// Function to set computer's choice
function setComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return computerChoices[randomIndex];
}

// Function to set player's choice
function setPlayerChoice(playerChoice) {
    playGame(playerChoice);
}

// Function to evaluate winner
function evalWinCondition(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }

    else if (
        (playerChoice === ROCK && computerChoice === SCISSORS) ||
        (playerChoice === PAPER && computerChoice === ROCK) ||
        (playerChoice === SCISSORS && computerChoice === PAPER) ) {
            return 'player';
    } 

    else {
        return 'computer';
    }
}

// Function to update scores and display round end
function setScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreHTML.innerText = playerScore;
    }

    else if (winner === 'computer') {
        computerScore++;
        computerScoreHTML.innerText = computerScore;
    }

    showRoundEnd(winner);
}

// Function to display round end message
function showRoundEnd(winner) {
    let showRoundEndText = '';

    if (winner === 'tie') {
        showRoundEndText = 'It was a tie';
    } 
    
    else {
        showRoundEndText = winner === 'player' ? 'You win!' : 'You lose';
    }
    
    messageContainer.innerText += showRoundEndText;
}

// Function to check for tie
function checkForTie() {
    return playerScore === computerScore;
}

function showGameOver() {
    if (checkForTie()) {
        messageContainer.innerText = 'GAME OVER: TIE\nClick the restart game button';
    } 
    
    else {
        const gameOverText = playerScore > computerScore ? 'YOU WIN!' : 'YOU LOSE';
        messageContainer.innerText = `GAME OVER: ${gameOverText}\nClick the restart game button`;
    }
}

// Function to restart the game
function restartGame() {
    // Update the score and round counts
    computerScore = 0;
    playerScore = 0;
    numOfRounds = 0;
    
    // Update the HTML elements
    computerScoreHTML.innerText = '0';
    playerScoreHTML.innerText = '0';
    messageContainer.innerText = 'Select an option to start the game';
}

// Function to play a round
function playGame(pChoice) {
    if (numOfRounds > maxRounds) {
        showGameOver();
    }

    else {
        const computerChoice = setComputerChoice();
        const playerChoice = pChoice;
        messageContainer.innerText = `Game has started: Round ${parseInt(numOfRounds + 1)} of ${maxRounds}\nComputer chose ${computerChoice.toUpperCase()}\n`;
        const winner = evalWinCondition(playerChoice, computerChoice);
        setScore(winner);

        if (numOfRounds === maxRounds) {
            showGameOver();
        }
    }

    numOfRounds++;
}