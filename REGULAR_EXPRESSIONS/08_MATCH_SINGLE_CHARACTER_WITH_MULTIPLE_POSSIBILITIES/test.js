let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = vowelRegex.test(quoteSample);
let response = quoteSample.match(vowelRegex);

console.log(result);
console.log(response);