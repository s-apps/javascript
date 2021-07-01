# Use the conditional (ternary) function

The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:

`function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}`

This can be re-written using the conditional operator:

`function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}`

Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

---

O operador condicional, também chamado de operador ternário, pode ser usado como uma expressão if-else de uma linha.

A sintaxe é um? b: c, onde a é a condição, b é o código a ser executado quando a condição retorna verdadeira e c é o código a ser executado quando a condição retorna falsa.

A função a seguir usa uma instrução if / else para verificar uma condição:

`function findGreater (a, b) {
   if (a> b) {
     return "a é maior";
   }
   senão {
     return "b é maior";
   }
} `

Isso pode ser reescrito usando o operador condicional:

`function findGreater (a, b) {
   return a> b? "a é maior": "b é maior";
} `

Use o operador condicional na função checkEqual para verificar se dois números são iguais ou não. A função deve retornar a string Equal ou a string Not Equal.