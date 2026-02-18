// calculates your grade based on a score

const score = 95;
let grade = "";

// determines grade from given score
if (score < 0) {
    grade = "Invalid";
} else if (score < 60) {
    grade = "F";
} else if (score < 70) {
    grade = "D";
} else if (score < 80) {
    grade = "C";
} else if (score < 90) {
    grade = "B";
} else {
    grade = "A";
}

// prints grade
if (grade == "Invalid") {
    console.log("Score cannot be negative. Unable to calculate grade.");
} else {
    console.log("For a score of " + score + " you earned a grade of " + grade + ".");
}