// Reads the number input and checks if it's lucky in Chinese culture
function checkLucky() {
    const number = Number(document.getElementById("numberInput").value);
    const result = document.getElementById("result");

    if (number % 8 === 0) {
        result.textContent = number + " is very lucky! 🎉";
        result.style.color = "green";
    } else if (number % 6 === 0) {
        result.textContent = number + " is lucky! :)";
        result.style.color = "orange";
    } else {
        result.textContent = number + " is not lucky. :(";
        result.style.color = "red";
    }
}