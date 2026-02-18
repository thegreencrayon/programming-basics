// prints the current time in 1 second intervals

// create date object
let now = new Date();


 let printTime = setInterval(() => {
    // updates now object to current time
    now = new Date();

    // determines if AM or PM
    let meridiem;
    if (now.getHours() >= 12) {
        meridiem = "PM";
    } else {
        meridiem = "AM";
    }

    // prints current time using date object
    let hours = cleanTime(now.getHours());
    let minutes = cleanTime(now.getMinutes());
    let milliseconds = cleanTime(now.getMilliseconds());
    let currentTime = hours + ":" + minutes + " " + milliseconds + "ms " + meridiem;
    console.log(currentTime); 
}, 1000);


// function that makes sure hours/minutes are in 00 format
function cleanTime(time) {
    let printedTime;
    if (time < 10) {
        printedTime = "0" + time;
    } else {
        printedTime = time;
    }
    return printedTime;
}

// for funsies, this is the recommended syntax, credit: gpt
/*
setInterval(() => {
    const now = new Date();

    const meridiem = now.getHours() >= 12 ? "PM" : "AM";

    const hours = cleanTime(now.getHours());
    const minutes = cleanTime(now.getMinutes());
    const milliseconds = cleanTime(now.getMilliseconds());

    const currentTime = `${hours}:${minutes} ${milliseconds}ms ${meridiem}`;

    console.log(currentTime);
}, 1000);

function cleanTime(time) {
    return time < 10 ? "0" + time : time;
}
*/