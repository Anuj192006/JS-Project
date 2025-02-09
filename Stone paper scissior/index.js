const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computer = document.getElementById("computer");
const player = document.getElementById("player");
const result = document.getElementById("answer");
const playerNameInput = document.getElementById("player-name");
const startGameButton = document.getElementById("start-game");
const score = document.getElementById("score");
const rounds = document.getElementById("rounds");
const resetButton = document.getElementById("reset-game");
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let isGameStarted = false;

startGameButton.addEventListener("click", () => {
    if (playerNameInput.value.trim() !== "") {
        player.textContent = `Welcome, ${playerNameInput.value}! Click on any button to start.`;
        isGameStarted = true;
    } else {
        alert("Please enter your name to start the game!");
    }
});

function getComputerChoice() {
    const choices = ["Stone", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScoreBoard() {
    score.textContent = `Score - ${playerNameInput.value}: ${playerScore} | Computer: ${computerScore}`;
    rounds.textContent = `Rounds Played: ${roundCount}`;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    isGameStarted = false;
    playerNameInput.value = "";
    player.textContent = "Click on any to Start!";
    computer.textContent = "";
    result.textContent = "";
    updateScoreBoard();
}

function highlightResult(isWin) {
    if (isWin) {
        result.classList.add("highlight");
        result.classList.remove("loser");
        result.classList.remove("tie");
    } else if (isWin==false) {
        result.classList.add("loser");
        result.classList.remove("highlight");
        result.classList.remove("tie");
    }
    else{
        result.classList.add("tie");
        result.classList.remove("highlight")
        result.classList.remove("loser");
    }
}

function playGame(playerChoice) {
    if (!isGameStarted) {
        alert("Please enter your name and click Start Game to play!");
        return;
    }

    result.textContent = "";
    const computerChoice = getComputerChoice();

    computer.textContent = `Computer: ${computerChoice}`;
    player.textContent = `${playerNameInput.value}: ${playerChoice}`;

    let isWin = false;
    if (playerChoice === computerChoice) {
        isWin=null
        result.textContent = "Result: It's a Tie!";
    } else if (
        (playerChoice === "Stone" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Stone") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        result.textContent = "Result: You Win!";
        playerScore++;
        isWin = true;
    } else {
        result.textContent = "Result: You Lose!";
        computerScore++;
    }

    highlightResult(isWin);
    roundCount++;
    updateScoreBoard();
}

resetButton.addEventListener("click", resetGame);

rock.onclick = () => playGame("Stone");
paper.onclick = () => playGame("Paper");
scissors.onclick = () => playGame("Scissor");

updateScoreBoard();
