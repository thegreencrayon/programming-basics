// adds 2 to the sum variable & prints it (repeats x times)

addTwo(7);

// function that prints the sum of multiple +2s
function addTwo(times) {
    let sum = 0;

    let activeInterval = setInterval(() => {
        // print sum +2
        sum += 2;
        console.log(sum);
        // decrement times, since an addition was successfully done
        times--;

        // condition to end printing
        if (times == 0) {
            clearInterval(activeInterval);
        }
    }, 250);
}