// checks if a word is a palidrome
let word = "bob";

// starting off, assume word is a palidrome
let is_palidrome = true;

// create a pointer for the character at oppsite end being compared
let reverse_pointer = word.length - 1;

// iterate through each character in word in order
for (let i = 0; i < word.length; i++) {
    // compare the current character with its reverse
    // if they are not the same char, it is not a palidrome
    if (word[i] !== word[reverse_pointer]) {
        is_palidrome = false;
    }

    // modify reverse pointer location
    reverse_pointer--;
}

// prints if the word is a palidrome or not
if (is_palidrome) {
    console.log("'" + word + "' is a palidrome.");
} else {
    console.log("'" + word + "' is not a palidrome.");
}

