# Adding a default option in switch statements

In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

`switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}`

Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff

---

Em uma instrução switch, você pode não ser capaz de especificar todos os valores possíveis como instruções case. Em vez disso, você pode adicionar a instrução padrão que será executada se nenhuma instrução case correspondente for encontrada. Pense nisso como a instrução else final em uma cadeia if / else.

Uma declaração padrão deve ser o último caso.

`switch (num) {
   valor de caso 1:
     declaração1;
     pausa;
   valor de caso 2:
     declaração2;
     pausa;
...
   padrão:
     defaultStatement;
     pausa;
} `

Escreva uma declaração switch para definir a resposta para as seguintes condições:
Uma maçã
b - pássaro
c - gato
padrão - cois