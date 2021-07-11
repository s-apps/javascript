let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/gi;
let result = unRegex.test(exampleStr);
let response = exampleStr.match(unRegex);
console.log(result);
console.log(response);