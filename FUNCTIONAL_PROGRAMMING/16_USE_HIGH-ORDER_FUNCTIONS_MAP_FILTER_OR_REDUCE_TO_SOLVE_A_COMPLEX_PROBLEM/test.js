const squareList = arr => {
    return arr = arr.filter((number) => { 
        return number > 0 && number % 1 == 0; 
    }).map((integerNumber) => {
        return integerNumber * integerNumber;
    });
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

console.log(squaredIntegers);