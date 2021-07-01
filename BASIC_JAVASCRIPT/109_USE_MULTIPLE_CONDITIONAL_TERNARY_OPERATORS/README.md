# Use multiple conditional (ternary) operators

In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

The following function uses if, else if, and else statements to check multiple conditions:

`function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}`

The above function can be re-written using multiple conditional operators:

`function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}`

It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:

`function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}`

In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.

---

No desafio anterior, você usou um único operador condicional. Você também pode encadear os dois para verificar várias condições.

A função a seguir usa instruções if, else if e else para verificar várias condições:

`function findGreaterOrEqual (a, b) {
  if (a === b) {
    return "aeb são iguais";
  }
  else if (a> b) {
    return "a é maior";
  }
  senão {
    retornar "b é maior";
  }
} `

A função acima pode ser reescrita usando vários operadores condicionais:

`function findGreaterOrEqual (a, b) {
  retornar (a === b)? "a e b são iguais"
    : (a> b)? "a é maior"
    : "b é maior";
} `

É considerada prática recomendada formatar vários operadores condicionais de forma que cada condição esteja em uma linha separada, conforme mostrado acima. Usar vários operadores condicionais sem indentação adequada pode tornar seu código difícil de ler. Por exemplo:

`function findGreaterOrEqual (a, b) {
  retornar (a === b)? "a e b são iguais": (a> b)? "a é maior": "b é maior";
} `

Na função checkSign, use vários operadores condicionais - seguindo o formato recomendado usado em findGreaterOrEqual - para verificar se um número é positivo, negativo ou zero. A função deve retornar positivo, negativo ou zero.