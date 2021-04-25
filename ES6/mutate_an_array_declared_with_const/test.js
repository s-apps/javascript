// const s = [5, 6, 7];
// s = [1, 2, 3];
// s[2] = 45;
// console.log(s);

/*
An array is declared as const s = [5, 7, 2]. 
Change the array to [2, 5, 7] using various element assignments.
*/

const s = [5, 7, 2];
console.log('original', s);
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log('updated', s);