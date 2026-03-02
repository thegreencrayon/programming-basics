// access
const masterPlusBtn = document.getElementById("plus-button");
const addTaskContainer = document.getElementById("add-task-container");

// states
let masterPlusState = "show";

// master plus: makes the add task container visible / invisible
masterPlusBtn.addEventListener("click", function() {
    if (masterPlusState == "show") {
        addTaskContainer.style.display = "none";
        masterPlusState = "hide";
    } else if (masterPlusState == "hide") {
        addTaskContainer.style.display = "flex";
        masterPlusState = "show";
    }
});
// master minus: makes the delete buttons visible

// add button: adds the inputed text into list of pending items

// delete button: deletes task in its entirety

// check button: marks task for css so it has a visible line