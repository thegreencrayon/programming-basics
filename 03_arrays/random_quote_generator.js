// prints a random quote from an array

quotes = ["Life is a box of chocolates, you never know what you're going to get.",
    "On Tuesdays we wear pink.",
    "Jack, don't let go.",
    "Just keep swimming, just keep swimming!",
    "I've a feeling we're not in Kansas anymore.",
    "May the Force be with you.",
    "I'll have what she's having.",
    "My precious.",
    "Ohana means family."
]
// prints a quote from array using a random index determined by function
console.log(quotes[getRandomInt(quotes.length)]);

// function that generates a random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}