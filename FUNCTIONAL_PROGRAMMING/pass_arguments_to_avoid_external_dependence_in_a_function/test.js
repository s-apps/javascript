/*
Let's update the incrementer function to clearly declare its dependencies.
Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.
*/

// The global variable
var fixedValue = 4;

function incrementer (result) {
    result = fixedValue + 1;
    return result;
}