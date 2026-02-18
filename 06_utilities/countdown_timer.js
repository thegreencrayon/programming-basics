// prints a count down from N to 0
// global variable (n)
let n = 14;

// counts down from N every second
setInterval(countdown, 250);

function countdown() {
    // if n hasn't reached 0, print the current value of n, then decrement its value
    if (n >= 0) {
        console.log(n);
        n--;
    }
}