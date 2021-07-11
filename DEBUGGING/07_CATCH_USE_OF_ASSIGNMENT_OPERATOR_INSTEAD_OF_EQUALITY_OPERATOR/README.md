# Catch use of assignment operator instead of equality operator

Branching programs, i.e. ones that do different things if certain conditions are met, rely on if, else if, and else statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.

This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the =, or assignment operator. This leads to unexpected control flow in your program.

As covered in previous challenges, the assignment operator (=) in JavaScript assigns a value to a variable name. And the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same).

The code below assigns x to be 2, which evaluates as true. Almost every value on its own in JavaScript evaluates to true, except what are known as the "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

`let x = 1;
let y = 2;
if (x = y) {

} else {

}`

In this example, the code block within the if statement will run for any value of y, unless y is falsy. The else block, which we expect to run here, will not actually run.

Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.

---

Programas de ramificação, ou seja, aqueles que fazem coisas diferentes se certas condições forem atendidas, contam com instruções if, else if e else em JavaScript. A condição às vezes assume a forma de testar se um resultado é igual a um valor.

Essa lógica é falada (em inglês, pelo menos) como "se x for igual a y, então ...", que pode ser traduzido literalmente em código usando =, ou operador de atribuição. Isso leva a um fluxo de controle inesperado em seu programa.

Conforme abordado nos desafios anteriores, o operador de atribuição (=) em JavaScript atribui um valor a um nome de variável. E os operadores == e === verificam a igualdade (o triplo === testa a igualdade estrita, o que significa que tanto o valor quanto o tipo são iguais).

O código a seguir atribui x como 2, que é avaliado como verdadeiro. Quase todos os valores por si próprios em JavaScript são avaliados como verdadeiros, exceto os conhecidos como valores "falsos": falso, 0, "" (uma string vazia), NaN, indefinido e nulo.

`let x = 1;
let y = 2;
if (x = y) {

} else {

}`

Neste exemplo, o bloco de código dentro da instrução if será executado para qualquer valor de y, a menos que y seja falso. O bloco else, que esperamos ser executado aqui, não será executado de fato.

Corrija a condição para que o programa execute a ramificação certa e o valor apropriado seja atribuído ao resultado. 
