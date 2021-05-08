/*
Use the every method inside the checkPositive function to check if every element in arr is positive. 
The function should return a Boolean value.
*/

function checkPositive(arr) {
    return arr.every(value => value >= 0);
}
console.log(checkPositive([1, 5, 8, 0, 10, 11]));