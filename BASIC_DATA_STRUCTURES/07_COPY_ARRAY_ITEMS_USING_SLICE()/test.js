function forecast(arr) {
    const newArray = arr.slice(2, 4);
    return newArray;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));