# Comparisons with the logical and operator

Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

`if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";`

will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

`if (num > 5 && num < 10) {
  return "Yes";
}
return "No";`

Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

---

Às vezes, você precisará testar mais de uma coisa por vez. O operador lógico e (&&) retorna verdadeiro se e somente se os operandos à esquerda e à direita dele forem verdadeiros.

O mesmo efeito pode ser alcançado aninhando uma instrução if dentro de outra if:

`if (num> 5) {
   if (num <10) {
     retornar "Sim";
   }
}
return "Não"; `

só retornará Sim se num for maior que 5 e menor que 10. A mesma lógica pode ser escrita como:

`if (num> 5 && num <10) {
   retornar "Sim";
}
return "Não"; `

Substitua as duas instruções if por uma instrução, usando o operador &&, que retornará a string Sim se val for menor ou igual a 50 e maior ou igual a 25. Caso contrário, retornará a string No.