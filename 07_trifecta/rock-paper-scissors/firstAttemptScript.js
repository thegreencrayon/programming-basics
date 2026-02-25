findWinner();
//playerShoot();

// computer decides rock paper or scissors at random
function cmpShoot() {
    const choices = ["rock","paper","scissors"];
    let computerChoice = "";

    let randomIndex = Math.floor(Math.random() * 2 + 1);
    computerChoice = choices[randomIndex];
    return computerChoice;
}
/*
function playerShoot() {
    // selects all option elements for player
    const playerChoices = document.querySelectorAll("player-choice");
    
    // loops through list of options
    playerChoices.forEach(choice => {
        // even listener for when player clicks on this choice
        choice.addEventListener("click", function(event) { // click is the type of event
            const choice = event.target.dataset.choice;
        });
    });
    const result = document.getElementById("result");
    result.textContent = choice;
    return choice;
}*/

function findWinner() {
    let playerChoice = document.getElementById("rock").dataset.choice;
    let computerChoice = cmpShoot();
    let winner = "";

    // determine winner
    if (playerChoice == computerChoice) {
        winner = "tie";
    } else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    }
    // determine the output
    result.textContent = choice;
    console.log("The winner is " + winner + " because the computer chose " + computerChoice);

}