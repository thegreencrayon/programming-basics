// validates a password
let password = "Pass1234!!!";

// state of the password, valid or not valid
let valid = true;
let reasoning = "";

// validating by length, character variety, common names
if (password.toLowerCase() == "password") {
    valid = false;
    reasoning = "Password cannot be any variation of 'password'.";
} else if (password.length < 8) {
    valid = false;
    reasoning = "Password must be at least 8 characters.";
} else if (!hasRequiredChars(password)) {
    valid = false;
    reasoning = "Missing character variety. Must have at least 1 upper, 1 lower, 1 number, and 1 special character.";
} else {
    reasoning = "This password meets all requirements."
};

// prints outcome of validator
if (valid) {
    console.log(`\nThe password "${password}" is valid.`);
} else {
    console.log(`\nThe password "${password}" is not valid.`);
}
console.log(`Note: ${reasoning}\n`);


// function to check if character is uppercase
function isUpper(character) {
    const upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X','Y','Z'];

    return upperLetters.includes(character) ? true : false;
}

// function to check if character is lowercase
function isLower(character) {
    const lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
        'q','r','s','t','u','v','w','x','y','z'];

    return lowerLetters.includes(character) ? true : false;
}

// function to check if character is a number
function isNumber(character) {
    const numbers = ['0','1','2','3','4','5','6','7','8','9','0'];

    return numbers.includes(character) ? true : false;
}

// function to check if a character is a special one
function isSpecial(character) {
    const specials = ['!','@','#','%','^','&','*'];

    return specials.includes(character) ? true : false;
}

// function that checks if all required characters are included 
function hasRequiredChars(password) {
    // must have at least 1 uppercase letter
    let upper = false;
    // must have at least 1 lowercase letter
    let lower = false;
    // must have at least 1 number
    let number = false;
    // must have at least 1 special character
    let special = false;

    // iterates through string and checks if these conditions are satisfied
    for (const c of password) {
        if (isUpper(c)) {
            upper = true;
        }
        if (isLower(c)) {
            lower = true;
        }
        if (isNumber(c)) {
            number = true;
        }
        if (isSpecial(c)) {
            special = true;
        }
    }
    return (upper == true && lower == true && number == true && special == true) ? true : false;
}