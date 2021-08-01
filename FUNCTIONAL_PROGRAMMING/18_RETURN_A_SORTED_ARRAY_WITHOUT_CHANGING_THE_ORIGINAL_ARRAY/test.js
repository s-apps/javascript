var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
    const newArray = [...arr];
    return newArray.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
}
console.log(nonMutatingSort(globalArray));