# Count backwards with a for loop

A for loop can also count backwards, so long as we can define the right conditions.

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

`var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}`

ourArray will now contain [10,8,6,4,2]. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.

Push the odd numbers from 9 through 1 to myArray using a for loop.

---

Um loop for também pode contar para trás, desde que possamos definir as condições corretas.

Para diminuir em dois a cada iteração, precisaremos alterar nossa inicialização, condição e expressão final.

Começaremos em i = 10 e fazer um loop enquanto i> 0. Diminuiremos i em 2 cada loop com i - = 2.

`var ourArray = [];
para (var i = 10; i> 0; i -= 2) {
   ourArray.push (i);
} `

ourArray agora conterá [10,8,6,4,2]. Vamos mudar nossa inicialização e expressão final para que possamos contar regressivamente em dois para criar uma matriz de números ímpares descendentes.

Empurre os números ímpares de 9 a 1 para myArray usando um loop for.