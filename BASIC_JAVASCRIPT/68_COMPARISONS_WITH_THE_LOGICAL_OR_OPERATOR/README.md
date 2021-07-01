# Comparisons with the logical or operator

The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

`if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";`

will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

`if (num > 10 || num < 5) {
  return "No";
}
return "Yes";`

Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

---

O operador lógico ou (||) retorna verdadeiro se qualquer um dos operandos for verdadeiro. Caso contrário, retorna falso.

O operador lógico ou é composto de dois símbolos de barra vertical: (||). Isso normalmente pode ser encontrado entre as teclas Backspace e Enter.

O padrão abaixo deve parecer familiar de pontos de referência anteriores:

`if (num> 10) {
   return "Não";
}
if (num <5) {
   return "Não";
}
return "Sim"; `

retornará Sim somente se num estiver entre 5 e 10 (5 e 10 incluídos). A mesma lógica pode ser escrita como:

`if (num> 10 || num <5) {
   return "Não";
}
return "Sim"; `

Combine as duas instruções if em uma instrução que retorna a string Outside if val não está entre 10 e 20, inclusive. Caso contrário, retorne a string Inside.