function randomRange(myMin, myMax) {
    myMin = Math.ceil(myMin);
    myMax = Math.floor(myMax);
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; 
}

console.log(randomRange(0, 9));