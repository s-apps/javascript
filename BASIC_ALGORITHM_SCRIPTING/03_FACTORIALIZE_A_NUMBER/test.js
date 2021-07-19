function factorialize(num) {
    if(num == 0){
        return 1;
    }
    const result = num * factorialize(num - 1);
    return result;
}

console.log(factorialize(5));