// removes duplicates from an array

let flowers = ["lily", "rose", "tulip", "rose", "chrystanthemum", "orchid", "orchid", "daisy", "lily", "lavender"];
let unique_flowers = [];

// iterates through each item in the array of flowers
for (let i = 0; i < flowers.length; i++) {
    // if the flower isn't in unique_flowers array, permit its addition
    if (!unique_flowers.includes(flowers[i])) {
        unique_flowers.push(flowers[i]);
    }
}

// print original value of flowers array
console.log("Original flower array: " + flowers);

// copy unique_flowers value into flowers array
flowers = unique_flowers;

// print new value of flowers array
console.log("Updated flower array: " + flowers);
