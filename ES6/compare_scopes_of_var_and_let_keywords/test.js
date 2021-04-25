// var numArray = [];
// for (var i = 0; i < 3; i++) {
//     numArray.push(i);
// }
// console.log(numArray);
// console.log(i);

// var numArray = [];
// var i;
// for (i = 0; i < 3; i++) {
//     numArray.push(i);
// }
// console.log(numArray);
// console.log(i);

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//     if ( i === 2) {
//         printNumTwo = function() {
//             return i;
//         }
//     }
// }
// console.log(printNumTwo());

// let printNumTwoLet;
// for (let x = 0; x < 3; x++) {
//     if (x === 2) {
//         printNumTwoLet = function() {
//             return x;
//         }
//     }
// }
// console.log(printNumTwoLet());
// console.log(x);

/*-------------------------------------------------------------------*/

function checkScope() {
    var i = 'function scope';
    if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
console.log('checkScope', checkScope());

/*
Fix the code so that i declared in the if statement is a separate variable than i declared in the first 
line of the function. Be certain not to use the var keyword anywhere in your code.
This exercise is designed to illustrate the difference between how var and let keywords assign scope 
to the declared variable. 
When programming a function similar to the one used in this exercise, 
it is often better to use different variable names to avoid confusion.
*/

function checkScopeLet() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;

}

console.log('checkScopeLet', checkScopeLet());
