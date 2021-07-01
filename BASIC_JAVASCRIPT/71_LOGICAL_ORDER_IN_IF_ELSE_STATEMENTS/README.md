# Logical order in if else statements

Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:

`function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}`

And the second just switches the order of the statements:

`function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}`

While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0)
bar(0)
foo(0) will return the string Less than one, and bar(0) will return the string Less than two.

Change the order of logic in the function so that it will return the correct statements in all cases.

---

A ordem é importante nas declarações if, else if.

A função é executada de cima para baixo, portanto, você deve ter cuidado com a instrução que vem primeiro.

Veja essas duas funções como exemplo.

Aqui está o primeiro:

`função foo (x) {
   if (x <1) {
     return "Menos de um";
   } else if (x <2) {
     return "Menos de dois";
   } senão {
     return "Maior ou igual a dois";
   }
} `

E o segundo apenas muda a ordem das declarações:

`barra de funções (x) {
   if (x <2) {
     return "Menos de dois";
   } else if (x <1) {
     return "Menos de um";
   } senão {
     return "Maior ou igual a dois";
   }
} `

Embora essas duas funções pareçam quase idênticas, se passarmos um número para ambas, obteremos resultados diferentes.

foo (0)
bar (0)
foo (0) retornará a string Menor que um, e bar (0) retornará a string Menor que dois.

Altere a ordem da lógica na função para que ela retorne as instruções corretas em todos os casos.
