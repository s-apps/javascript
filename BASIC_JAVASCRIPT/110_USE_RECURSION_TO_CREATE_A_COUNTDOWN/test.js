function countdown(n){
    if (n < 1) {
        return [];
    }
    const count = countdown(n - 1);
    count.unshift(n)
    return count;
}
console.log(countdown(10));