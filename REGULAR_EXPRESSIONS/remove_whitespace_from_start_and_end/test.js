/*
Sometimes whitespace characters around strings are not wanted but are there. 
Typical processing of strings is to remove the whitespace at the start and end of it.
*/

let hello = '   Hello, World!  ';
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, '');
console.log(result);