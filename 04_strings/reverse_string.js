// reverses a string

let word = "potato";
let word_mimic = "";
console.log("Original value of string: " + word);

// iterate through the original string backwards
for (let i = word.length - 1; i >= 0; i--) {
    // adds the original string's reverse character to the word mimic
    word_mimic += word[i];
}

// copy the value of word_mimic and make it into the value of word variable
word = word_mimic;

// print new value of word variable
console.log("Reversed value of string: " + word);
