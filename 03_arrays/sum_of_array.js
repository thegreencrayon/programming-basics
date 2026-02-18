// prints the sum of an array
const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

// iterates through the array values and contributes it to sum
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// prints final sum
console.log("The sum of the number array is: " + sum);