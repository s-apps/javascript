function sum(arr, n) {
    if(n <= 0){
        return 0;
    }else{
        return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log('sum', sum([1], 0));
console.log('sum', sum([2, 3, 4], 1));
console.log('sum', sum([2, 3, 4, 5], 3));

/*------------------------------------------------------------------*/

function countdown(n){
    if (n <= 0) {
        return [];
      } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }    
}

console.log('countdown', countdown(-1));
console.log('countdown', countdown(10));
console.log('countdown', countdown(5));

/*-------------------------------------------------------------------*/

function rangeOfNumbers(startNum, endNum){
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

console.log('range of numbers', rangeOfNumbers(1, 5));
console.log('range of numbers', rangeOfNumbers(6, 9));
console.log('range of numbers', rangeOfNumbers(4, 4));