// prints the second largest value in an array

const numbers = [100, 100, 100, null, 200];
let largest = null;
let second_largest = null;

// sets largest variable as first value numbers arrays given it is not empty
if (numbers.length != 0) {
    largest = numbers[0];
}
// iterate through array
for (let i = 0; i < numbers.length; i++) {
    // checks if current number is greater than the current "largest"
    if (numbers[i] > largest) {
        // checks if there are at least two values in array to assign a "second_largest"
        if (i > 0) {
            // turns the current "largest" into "second_largest" instead
            second_largest = largest;
            // update the current "largest"
            largest = numbers[i];
        }
    }
    // checks if current number is less than current "largest"
    if (numbers[i] < largest) {
        // assigns current number as second_largest if it is null
        if (second_largest == null) {
            second_largest = numbers[i];
        }
        // assigns current number as second_largest if it is greater than second_largest's current value
        if (numbers[i] > second_largest) {
            second_largest = numbers[i];
        }
    }

}
// prints the second largest value in array
if (largest == null && second_largest == null) {
    console.log("There is no second largest because the array is empty.");
} else if (second_largest == null) {
    console.log("There is no second largest value.");
} else {
    console.log("Second largest value in array: " + second_largest);
}