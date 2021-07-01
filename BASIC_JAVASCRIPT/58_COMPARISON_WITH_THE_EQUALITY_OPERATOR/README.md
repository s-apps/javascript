# Comparison with the equality operator

There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

`function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}`

If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

`1 == 1`
`1 == 2`
`1 == '1'`
`"3" ==  3`

In order, these expressions would evaluate to true, false, true, and true.

Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

---

Existem muitos operadores de comparação em JavaScript. Todos esses operadores retornam um valor booleano verdadeiro ou falso.

O operador mais básico é o operador de igualdade ==. O operador de igualdade compara dois valores e retorna verdadeiro se eles forem equivalentes ou falso se não forem. Observe que a igualdade é diferente da atribuição (=), que atribui o valor à direita do operador a uma variável à esquerda.

`function EquityTest (myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  retornar "Diferente";
} `

Se myVal for igual a 10, o operador de igualdade retornará verdadeiro, então o código entre chaves será executado e a função retornará Equal. Caso contrário, a função retornará Diferente. Para que o JavaScript compare dois tipos de dados diferentes (por exemplo, números e strings), ele deve converter um tipo em outro. Isso é conhecido como Coerção de Tipo. Depois de fazer isso, no entanto, ele pode comparar os termos da seguinte forma:

`1 == 1`
`1 == 2`
`1 == '1'`
`" 3 "== 3`

Em ordem, essas expressões seriam avaliadas como verdadeiro, falso, verdadeiro e verdadeiro.

Adicione o operador de igualdade à linha indicada para que a função retorne a string Equal quando val for equivalente a 12.