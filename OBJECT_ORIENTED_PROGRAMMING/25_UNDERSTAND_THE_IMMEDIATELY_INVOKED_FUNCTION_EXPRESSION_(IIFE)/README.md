# Understand the immediately invoked function expression (IIFE)

A common pattern in JavaScript is to execute a function as soon as it is declared:

`(function () {
  console.log("Chirp, chirp!");
})();`

This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

Note that the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

---

Um padrão comum em JavaScript é executar uma função assim que ela for declarada:

`(function () {
  console.log("Chirp, chirp!");
})();`

Esta é uma expressão de função anônima que é executada imediatamente e produz Chirp, chirp! imediatamente.

Observe que a função não tem nome e não é armazenada em uma variável. Os dois parênteses () no final da expressão da função fazem com que ela seja executada ou chamada imediatamente. Esse padrão é conhecido como expressão de função imediatamente chamada ou IIFE.

Reescreva a função makeNest e remova sua chamada para que seja uma expressão de função anônima imediatamente chamada (IIFE). 