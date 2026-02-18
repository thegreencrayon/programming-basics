// counts the vowels in a string
let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let vowel_count = 0;
let word = "potAto";

// iterates through each character 
for (let i = 0; i < word.length; i++) {
    // adds to vowel count if character is in vowel list
    if (vowels.includes(word[i])) {
        vowel_count++;
    }
}

// print total vowels
console.log("Total number of vowels: " + vowel_count);