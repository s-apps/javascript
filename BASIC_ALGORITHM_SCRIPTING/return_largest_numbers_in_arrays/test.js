function largestOfFour(arr) {
    const maiores = [];
    for(let i = 0; i < arr.length; i++){
        let maior = arr[i][0];
        for(let j = 0; j <= arr[i].length; j++){
           if(arr[i][j] > maior){
             maior = arr[i][j];
           }
        }
        maiores[i] = maior;
    }
    return maiores;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));