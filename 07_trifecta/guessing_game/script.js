// variables
let start = 0;
let end = 100;
let guess = 50;
let qType = "guess";

// access
const result = document.getElementById("result");
const promptBox = document.getElementById("prompt");
const yesBtn= document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");


makeGuess();

// yes button either confirms guess or says that guess needs to be bigger
yesBtn.addEventListener("click", function() {
    if (qType == "guess") {
        result.textContent = `The number is ${guess}!`;
        promptBox.style.display = "none";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    } else if (qType == "clarify") {
        start = guess;
        guess = Math.floor((guess + end) / 2);
        updateGuess();
    }
});


// no button either asks for clarification or says that guess needs to be smaller
noBtn.addEventListener("click", function() {
    if (qType == "guess") {
        askClarification();
    } else if (qType == "clarify") {
        end = guess;
        guess = Math.floor((start + guess) / 2);
        updateGuess();
    }
});


function askClarification() {
    promptBox.textContent = `Is the number greater than ${guess}?`

    qType = "clarify";
};

function makeGuess() {
    promptBox.textContent = `Is your number ${guess}?`;
}

function updateGuess() {
    qType="guess";
    // display updated guess
    makeGuess();
}

/* CONFUSING TAKEAWAYS
1. an access list is really helpful 
2. leave a single no listener, and a single yes listener per button
3. use a status variable to determine meaning for different yes/no presses
4. if you decide to do multiple no/yes listeners, prepare for dupes
*/