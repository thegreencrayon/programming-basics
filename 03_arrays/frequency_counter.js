// prints the frequency of values in list

const favorite_flavors = ["vanilla", "chocolate", "chocolate", "strawberry",
     "pistacchio", "cookies & cream", "vanilla", "ube", "butter pecan", "strawberry",
    "chocolate", "pistacchio", "chocolate chip", "rocky road", "mint", "mint", "cookie dough"];

console.log("Favorite ice cream flavor votes: ");

// iterates through unique ice cream flavors
for (const flavor of make_unique(favorite_flavors)) {
    // counts frequency of that flavor
    let flavor_frequency = count_frequency(flavor, favorite_flavors);
    // prints name of flavor and its frequency
    console.log(flavor + "(" + flavor_frequency + ")");
}

// function that returns an array of unique values
function make_unique(array) {
    let unique_array = [];
    for (const item of array) {
        if (!unique_array.includes(item)) {
            unique_array.push(item);
        }
    }
    return unique_array;
}

// function that returns frequency of item in array
function count_frequency(specific_item, array) {
    let count = 0;
    for (const item of array) {
        // if current flavor matches specific flavor, increment count by 1
        if (item == specific_item) {
            count++;
        }
    }
    // return freq count
    return count;
}