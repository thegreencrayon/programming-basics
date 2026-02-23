// Reads the numbers and desired operation and calculates the result

function calculate() {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;
    const result = document.getElementById("result");
    let calculation = null;

    // doing the math
    if (operation == "add") {
        calculation = number1 + number2;
    } else if (operation == "substract") {
        calculation = number1 - number2;
    } else if (operation == "multiply") {
        calculation = number1 * number2;
    } else if (operation == "divide" && number2 != 0) {
        calculation = number1 / number2;
    } else if (operation == "power") {
        calculation = number1 ** number2;
    }
    // determining the output
    if (calculation == null) {
        result.textContent = "The calculation request couldn't be completed.";
        result.style.color = "red";
    } else {
        //result.textContent = `= ${calculation}`;
        result.textContent = `= ${calculation}`;
    }   
}

