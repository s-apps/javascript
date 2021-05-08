function sumAll(arr) {
    const firstNumber = Math.min(...arr);
    const lastNumber = Math.max(...arr);
    let total = 0;
    for(let i = firstNumber; i <= lastNumber; i++){
        total += i;
    }
    return total;
}
console.log(sumAll([10, 5]));