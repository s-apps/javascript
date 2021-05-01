/*
Write a greedy regex that finds one or more criminals within a group of other people. 
A criminal is represented by the capital letter C.
*/

let criminals = 'P6P2P7P4P5CCCCCP3P1';
let regexCriminals = /C+[C]*/g;
let result = criminals.match(regexCriminals);
console.log(result);
