// access
const masterPlusBtn = document.getElementById("plus-button");
const masterMinusBtn = document.getElementById("minus-button");
const addTaskContainer = document.getElementById("add-task-container");
const addBtn = document.getElementById("add-button");
const taskListContainer = document.getElementById("task-list-container");

// states
let masterPlusState = "show";
let masterMinusState = "hide";

// master plus: makes the add task container visible / invisible
masterPlusBtn.addEventListener("click", function() {
    if (masterPlusState == "show") {
        addTaskContainer.style.display = "none";
        masterPlusState = "hide"; 
        masterPlusBtn.classList.remove("green-lit"); // change color
        masterPlusBtn.classList.add("white-lit")
    } else if (masterPlusState == "hide") {
        addTaskContainer.style.display = "flex";
        masterPlusState = "show";
        masterPlusBtn.classList.add("green-lit"); // change color
        masterPlusBtn.classList.remove("white-lit")
    }
});

// master minus: makes the delete buttons visible / invisible
masterMinusBtn.addEventListener("click", function() {
    const deleteButtons = document.querySelectorAll(".delete-button");
    // loop through each button 
    if (masterMinusState == "hide") {
        // permission granted to show the buttons now
        masterMinusBtn.classList.remove("white-lit");
        masterMinusBtn.classList.add("red-lit");
        deleteButtons.forEach(button => {
            button.style.display = "inline-block";
        });
    } else if (masterMinusState == "show") {
        // permission denied to show the buttons now
        masterMinusBtn.classList.remove("red-lit");
        masterMinusBtn.classList.add("white-lit");
        deleteButtons.forEach(button => {
            button.style.display = "none";
        });
    };
    // change the toggle
    if (masterMinusState == "show") {
        masterMinusState = "hide";
    } else {
        masterMinusState = "show";
    }
});

// add button: adds the inputed text into list of pending items
addBtn.addEventListener("click", function() {
    // do nothing if input is blank
    const input = document.getElementById("text-input").value;
    if (input.trim() == "") {
        return;
    }
    // create a "task-container" div
    const taskContainer = document.createElement("div");
    taskContainer.className = "task-container"; 
    // dataid
    // put a (1)checkbox (2) text input (3) delete button in the "task-container"
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";

    // text input
    const taskText = document.createElement("p");
    taskText.className = "defaultText"; // for formatting dashed line eventually
    taskText.textContent = input; // the input is the task in the checklist

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"; 
    deleteBtn.className = "delete-button";
    deleteBtn.style.display = "none"; // delete button is invisible by default

    taskContainer.appendChild(taskCheckbox);
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(deleteBtn);

    // append the "task-container" into the "task-list-container"
    taskListContainer.appendChild(taskContainer);

    // clear the input box
    document.getElementById("text-input").value = "";
});


// delete button: deletes task in its entirety
taskListContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-button")) {
        e.target.parentElement.remove();
    }
});

// check button: marks task for css so it has a visible line

/*
For next time
    1. functional delete button ✅
    2. css for master buttons to be right next to title ✅
    3. css for each task container to be flex horizontal
    4. css for delete button color ✅
    5. css for strike-through effect when task complete
*/