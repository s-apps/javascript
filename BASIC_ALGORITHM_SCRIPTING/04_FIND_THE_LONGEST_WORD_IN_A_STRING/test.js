function findLongestWordLength(str) {
    const array = str.split(' ');
    let maior = array[0].length;
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > maior) {
            maior = array[i].length;
        }
    }
    return maior;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));