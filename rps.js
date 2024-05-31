// JS File for Rock, Paper, Scissors Project
let choices = ["rock", "paper", "scissors"];
let computerChoice = gameChoices => gameChoices[Math.floor(Math.random() * 3)];
let playerChoice = "";
let playerScore = computerScore = 0;

function playGame() {
    alert('Game has started');
    alert('Computer picked: ' + computerChoice(choices));
}

function evalWinCondition() {

}

function setScore(winner) {
   
}

function endGame() {

}