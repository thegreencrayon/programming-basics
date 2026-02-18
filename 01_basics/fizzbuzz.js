// prints results of fizzbuzz round up to a certain number

let last_number = 15;


for (let i = 1; i < last_number + 1; i++ ) {
    // prints Fizz Buzz if multiple of 3 & 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
        // only prints Fizz if multiple of 3
        console.log("Fizz");
    } else if (i % 5 == 0) {
        // only prints Buzz if multiple of 5
        console.log("Buzz");
    } else {
        // prints the number if not a multiple of either
        console.log(i);
    }
}