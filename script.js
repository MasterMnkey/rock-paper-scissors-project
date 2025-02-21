var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let roundRandom = Math.floor(Math.random() * 3);

    if (roundRandom === 0){
        return "rock";
    } else if (roundRandom === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

// function untuk memainkan round dan increment score pemenang
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let resultMessage = " ";
    
    if (humanChoice === computerChoice){
        resultMessage = `Draw! it's same ${humanChoice.toUpperCase()}`;
    } else if ( 
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) { 
        humanScore++;
        resultMessage = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
    }

    // menampilkan hasil setiap round
    let roundOutput = document.querySelector("#round-result");
    roundOutput.textContent = resultMessage;

    // menambah score setiap round dimainkan
    document.querySelector("#human-score").textContent = humanScore;
    document.querySelector("#computer-score").textContent = computerScore;

    // memeriksa apakah salah satu pemain mencapai skor 3
    if (humanScore === 3 || computerScore === 3) {
        endGame();
    }
}

// function untuk mengakhiri permainan
function endGame() {
    handButtons.forEach(button => {
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    });

    playButton.disabled = false;
    playButton.style.cursor = 'pointer';
    playButton.textContent = "Play Again"

    let roundOutput = document.querySelector("#round-result");
    if (humanScore === 3) {
        roundOutput.textContent = "Congratulations! You won the game!";
    } else {
        roundOutput.textContent = "Game over! The Enemy won the game!";
    }
}

//ketika tombol di tekan akan memainkan setiap round dan memilih pilihan player
let pickHand = document.querySelector("#pick-hand");

pickHand.addEventListener("click", e => {
    let target = e.target;
    let humanSelection = " ";
    const computerSelection = getComputerChoice();

    switch (target.id) {
        case "rock":
            humanSelection = "rock";
            playRound(humanSelection, computerSelection);
            break;
        case "paper":
            humanSelection = "paper";
            playRound(humanSelection, computerSelection);
            break;
        case "scissors":
            humanSelection = "scissors";
            playRound(humanSelection, computerSelection);
            break;
    }
});

// memainkan game dengan menekan tombol play
// game di mainkan sampai salah satu pemain menang 3x
const playButton = document.querySelector("#play-button");
const handButtons = document.querySelectorAll(".hand-button");

function playGame(){
    humanScore = 0;
    computerScore = 0;
    document.querySelector("#human-score").textContent = humanScore;
    document.querySelector("#computer-score").textContent = computerScore;

    handButtons.forEach(button => {
        button.disabled = false;
        button.style.cursor = 'pointer';
    });

    let roundOutput = document.querySelector("#round-result");
    roundOutput.textContent = "Choose Your Hand!";

    //menonaktifkan tombol play
    playButton.disabled = true;
    playButton.style.cursor = 'not-allowed';
}

playButton.addEventListener("click", playGame);