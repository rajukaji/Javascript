function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}
 
function getUserChoice(){
    while(true){
        const prompt = require("prompt-sync")({ sigint: true});
        let choice = prompt("Enter your choice: ");
        choice = choice.toLowerCase();
        if (["rock", "paper", "scissors"].includes(choice)){
            return choice;
        }
    }
    
}
 
function determineOutcome(computerChoice, userChoice) {
    // if both the computer and user choose the same option, it's a draw
    if (computerChoice === userChoice) {
        return "Draw";
    }
 
    // user wins if they choose paper against rock
    else if (computerChoice === "rock" && userChoice === "paper") {
        return "Win";
    }
    // user wins if they choose scissors against paper
    else if (computerChoice === "paper" && userChoice === "scissors") {
        return "Win";
    }   
    // user wins if they choose rock against scissors
    else if (computerChoice === "scissors" && userChoice === "rock") {
        return "Win";
    } 
 
    // if none of the above conditions are met, the user loses
    else {
        return "Lose";
    }
}
 
let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
let result = determineOutcome(computerChoice, userChoice);
 
console.log(`Computer's pick: ${computerChoice}`);
console.log(result);