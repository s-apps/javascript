//let criminals = 'P6P2P7P4P5CCCCCP3P1';
let criminals = 'P1P5P4CCCcP2P6P3';
let reCriminals = /C+/g;
let result = criminals.match(reCriminals);
console.log(result);