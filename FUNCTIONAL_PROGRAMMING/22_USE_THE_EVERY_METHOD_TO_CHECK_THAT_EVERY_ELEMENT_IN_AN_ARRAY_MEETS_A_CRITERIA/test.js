function checkPositive(arr) {
    return arr.every(value => value > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));
console.log(checkPositive([1, 2, 3, 4, 5]));
console.log(checkPositive([1, -2, 3, -4, 5]));