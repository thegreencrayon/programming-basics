// prints "ping" & "pong" alternately, stops after N prints
printPingPong(7);

// function that prints ping & pong at set intervals
function printPingPong(max) {
    let iteration = 0;

    let activeInterval = setInterval(() => {
        // prints ping or pong depending on current iteration
        // if iteration is even, prints ping (should always start with ping since iteration begins with 0, which is even)
        if (iteration % 2 == 0) {
            console.log("Ping");
        } else {
            console.log("Pong");
        }
        // decrements remaining
        iteration++;

        // condition to end printing
        if (iteration == max) {
            clearInterval(activeInterval);
        }
    }, 250);

}