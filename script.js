let score = 0;
let timeLeft = 10; // Time limit in seconds
let gameActive = true;

const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameOverText = document.getElementById("gameOver");
const restartBtn = document.getElementById("restartBtn");

function moveBox() {
    if (!gameActive) return; // Stop moving if the game is over
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}

box.addEventListener("click", () => {
    if (!gameActive) return;
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

// Timer countdown
function startTimer() {
    const countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            endGame();
        }
    }, 1000);
}

// End game function
function endGame() {
    gameActive = false;
    box.style.display = "none"; // Hide the box
    gameOverText.style.display = "block";
    restartBtn.style.display = "block";
}

// Restart game function
restartBtn.addEventListener("click", () => {
    score = 0;
    timeLeft = 10;
    gameActive = true;

    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    gameOverText.style.display = "none";
    restartBtn.style.display = "none";
    box.style.display = "block";

    moveBox();
    startTimer();
});

// Start the game
moveBox();
startTimer();
