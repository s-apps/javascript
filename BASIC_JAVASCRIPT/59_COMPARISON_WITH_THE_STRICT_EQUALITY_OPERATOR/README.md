# Comparison with the strict equality operator

Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

`3 === 3`
`3 === '3'`

These conditions would return true and false respectively.

In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7

---

Igualdade estrita (===) é a contraparte do operador de igualdade (==). No entanto, ao contrário do operador de igualdade, que tenta converter os dois valores sendo comparados a um tipo comum, o operador de igualdade estrita não executa uma conversão de tipo.

Se os valores comparados tiverem tipos diferentes, eles serão considerados desiguais e o operador de igualdade estrita retornará falso.

Exemplos

`3 === 3`
`3 === '3'`

Essas condições retornariam verdadeiro e falso, respectivamente.

No segundo exemplo, 3 é um tipo de número e '3' é um tipo de string.

Use o operador de igualdade estrita na instrução if para que a função retorne a string Igual quando val for estritamente igual a 7