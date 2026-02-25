const moves = document.querySelectorAll(".moves");

// sets things in motion when one of the three moves are clicked
moves.forEach(move => {
    move.addEventListener("click", function() {
        // assigns move of player
        const playerMove = this.dataset.move;

        // assigns move of computer
        const cmpMove = cmpShoot();

        // determine winner
        let outcome = analyzeMatch(playerMove,cmpMove);
        let message = "";
        if (outcome == "tie") {
            message = "It was a tie!";
        } else if (outcome == "player") {
            message = "You won!";
        } else {
            message = "You lost!";
        }

        // displays result
        document.getElementById("text-result").textContent = `${message} You chose ${playerMove}. The computer had chosen ${cmpMove}: `
        let visualResult = document.getElementById("visual-result");
        // update image of what the computer chose
        let image = visualResult.querySelector("img");
        image.src = getCmpMoveImg(cmpMove);
        visualResult.querySelector("label").textContent = cmpMove;
        
    })    
})

// function that generates random computer move
function cmpShoot() {
    let options = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}
// function that determines outcome of match
function analyzeMatch(player,computer) {
    let winner = "";
    if (player == computer) {
        winner = "tie";
    } else if (player == "rock") {
        if (computer == "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (player == "paper") {
        if (computer == "scissors") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (player == "scissors") {
        if (computer == "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    }
    return winner;
}
// helper function to get image of winning move
function getCmpMoveImg(cmpMove) {
    let cmpImage = "";
    if (cmpMove == "rock") {
        cmpImage = "https://pokestop.io/img/pokemon/geodude-256x256.png";
    } else if (cmpMove == "paper") {
        cmpImage = "https://cld-assets.dick-blick.com/image/upload/c_limit,w_256/f_auto/q_auto/v1/13408-1005-1-4ww?_a=BAVAZGB00";
    } else {
        cmpImage = "https://cld-assets.dick-blick.com/image/upload/c_limit,w_256/f_auto/q_auto/v1/57040-1005-1-4ww?_a=BAVAZGB00";
    }
    return cmpImage;
}