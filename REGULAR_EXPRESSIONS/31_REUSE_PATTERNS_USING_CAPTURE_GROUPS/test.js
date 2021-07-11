let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
let response = repeatNum.match(reRegex);
console.log(result);
console.log(response);