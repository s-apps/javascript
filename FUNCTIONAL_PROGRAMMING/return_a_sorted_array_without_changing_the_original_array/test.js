/*
Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
The function should return a new array, and not mutate the globalArray variable.
*/

var globalArray = [1, 30, 4, 21, 100000];
function nonMutatingSort(arr) {
    let newArray = arr.slice(0, arr.length);
    return newArray.sort((a, b) => a - b);
}
console.log(nonMutatingSort(globalArray));