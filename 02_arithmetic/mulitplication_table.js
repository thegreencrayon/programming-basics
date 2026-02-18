// prints out a multiplication table up to a certain number

max_times = 14;

// print first line of multiplication table
first_line = "\tx";
for (let i = 1; i < max_times + 1; i++) {
    first_line += "\t" + i;
}
console.log(first_line);

// print remaining lines of multiplication table
let line = "";
// loop for y coordinate (dictates row quantity)
for (let i = 1; i < max_times + 1; i++) {
    line = "\t" + i;
    // loop for x coordinate (dictates row value)
    for (let j = 1; j < max_times + 1; j++) {
        // calculate multiplication values for that row
        line += "\t" + (i * j);
    }
    // print completed line for that row
    console.log(line);
    // reset row line 
    line = "";
}