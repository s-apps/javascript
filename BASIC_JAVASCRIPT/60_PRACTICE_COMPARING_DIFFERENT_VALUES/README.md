# Practice comparing different values

In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

`typeof 3`
`typeof '3'`

typeof 3 returns the string number, and typeof '3' returns the string string.

The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

---

Nos últimos dois desafios, aprendemos sobre o operador de igualdade (==) e o operador de igualdade estrita (===). Vamos fazer uma revisão rápida e praticar o uso desses operadores um pouco mais.

Se os valores que estão sendo comparados não forem do mesmo tipo, o operador de igualdade executará uma conversão de tipo e, em seguida, avaliará os valores. No entanto, o operador de igualdade estrita comparará o tipo de dados e o valor no estado em que se encontram, sem converter um tipo em outro.

Exemplos

3 == '3' retorna verdadeiro porque o JavaScript realiza a conversão de tipo de string em número. 3 === '3' retorna falso porque os tipos são diferentes e a conversão de tipo não é executada.

Nota: Em JavaScript, você pode determinar o tipo de uma variável ou um valor com o operador typeof, da seguinte maneira:

`typeof 3`
`typeof '3'`

typeof 3 retorna o número da string e typeof '3' retorna a string da string.

A função compareEquality no editor compara dois valores usando o operador de igualdade. Modifique a função para que ela retorne a string Equal apenas quando os valores forem estritamente iguais.