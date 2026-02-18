// counting down from N to 0 without use of global variable

countdownFrom(13);

// actual function that does the work
function countdownFrom(number) {

    let activeInterval = setInterval(() => {
        // prints current number then decrements by 1
        console.log(number);
        number--;
        
        // condition for ending printing
        if (number < 0) {
            clearInterval(activeInterval);
        }
    }, 250);
}