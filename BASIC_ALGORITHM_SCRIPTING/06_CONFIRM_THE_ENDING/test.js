function confirmEnding(str, target) {
    return str.substring(str.length - target.length) == target;
}

console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));