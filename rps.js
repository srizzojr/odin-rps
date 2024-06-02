// JS File for Rock, Paper, Scissors Project
let choices = ["rock", "paper", "scissors"];
let numOfRounds = 0;
let maxRounds = 5;

let computerChoice = "";
let computerScore = 0;
let computerScoreHTML = document.getElementById('js-computer-score');

let playerChoice = "";
let playerScore = 0;
let playerScoreHTML = document.getElementById('js-player-score');

function playGame(choice) {
    numOfRounds++;

    if (numOfRounds > maxRounds) {
        showGameOver();
    }

    else {
        alert('Game has started: Round ' + parseInt(numOfRounds) + " of " + maxRounds);
        computerChoice = getComputerChoice();
        playerChoice = choice;
        evalWinCondition();

        if (numOfRounds === maxRounds) {
            showGameOver();
        }
    }
}

function evalWinCondition() {
    if (playerChoice === computerChoice) {
        setScore('tie');
    }

    else {
        switch(computerChoice) {
            case 'rock':
                playerChoice === 'paper' ? setScore('player') : setScore('computer');
                break;
            case 'paper':
                playerChoice === 'scissors' ? setScore('player') : setScore('computer');
                break;
            case 'scissors':
                playerChoice === 'rock' ? setScore('player') : setScore('computer');
                break;
        }
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

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

function showRoundEnd(winner) {
    let showRoundEndText = "";

    if (winner === 'tie') {
        showRoundEndText = 'It was a tie';
    }

    else {
        showRoundEndText = winner === 'player' ? 'You win!' : 'You lose';
    }

    alert('You chose: ' + playerChoice + " | Computer chose: " + computerChoice);
    alert(showRoundEndText);
}

function showGameOver() {
    if (checkForTie()) {
        alert('GAME OVER: TIE')
    }

    else {
        let gameOverText = playerScore > computerScore ? 'You won!' : 'You lost';
        alert('GAME OVER: ' + gameOverText);
    }

    alert('Click the restart button to try again');
}

function checkForTie() {
    return playerScore == computerScore;
}

function restartGame() {
    alert('Restarting the game');
}