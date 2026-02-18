// counts the number of individual words in a string

let sentence = "I went to the dog park \t \t and saw a golden retriever    (no)   & cocker spaniel."
let word_count = 0;

// considered a word if a non-white space is followed by a whitespace
for (let i = 0; i < sentence.length; i++) {
    if (!is_whitespace(sentence[i]) && is_whitespace(sentence[i + 1])) {
        word_count++;
    }
}
// in case there is no ending white space, add +1 to word count to include last word
let last_character = sentence[sentence.length - 1];
if (!is_whitespace(last_character)) {
    word_count++;
}

// prints final word count
console.log("Total words in string: " + word_count);

function is_whitespace(char) {
    let whitespace =  [' ', '\t', '\n', '\r', '\f']
    if (whitespace.includes(char)) {
        return true;
    } else {
        return false;
    }
}