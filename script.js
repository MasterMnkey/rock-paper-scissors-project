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
    };
}

function getHumanChoice() {
    let handSign = prompt("choose your hand sign");

    return handSign;
};

function playRound(humanChoice, computerChoice) {
    // function untuk memainkan round dan increment score pemenang
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        return console.log (`Draw! it's same ${humanChoice.toUpperCase()}`);
    } else if ( 
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) { humanScore++;
        return console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
    } else {
        computerScore++;
        return console.log (`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
    };
}

function playGame() {
    let round = 0;

    while (round < 5){
        console.log(`Score : You ${humanScore} vs Computer ${computerScore}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        round++;
    }

    if (round = 5){
        if (humanScore > computerScore){
            return console.log(`You win!! Score : You ${humanScore} vs Computer ${computerScore}`)
        } else if (humanScore < computerScore){
            return console.log(`You lose!! Score : You ${humanScore} vs Computer ${computerScore}`)
        } else {
            return console.log(`Draw!! Score : You ${humanScore} vs Computer ${computerScore}`)
        }
    }
}

playGame();