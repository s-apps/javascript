# Returning boolean values from functions

You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

`function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}`

But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

`function isEqual(a,b) {
  return a === b;
}`

Fix the function isLess to remove the if/else statements.

---

Você deve se lembrar de Comparison with the Equality Operator que todos os operadores de comparação retornam um valor booleano verdadeiro ou falso.

Às vezes, as pessoas usam uma instrução if / else para fazer uma comparação, como esta:

`function isEqual (a, b) {
   if (a === b) {
     return true;
   } senão {
     return false;
   }
} `

Mas existe uma maneira melhor de fazer isso. Como === retorna verdadeiro ou falso, podemos retornar o resultado da comparação:

`function isEqual (a, b) {
   return a === b;
} `

Corrija a função isLess para remover as instruções if / else.