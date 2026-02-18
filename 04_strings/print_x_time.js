// prints a word x times at t intervals


printWord(5, "bean");

// function accepts times and word to be printed
function printWord(max, word) {
    let count = 0;

    // makes a setInterval that prints a word until desired count is reached
    let activeInterval = setInterval(() => {console.log(word),
        count++

        // condition to end printing
        if (count == max) {
            clearInterval(activeInterval);
        }
        
    }, 200);
}