# Iterate with JavaScript for loops

You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where a is the intialization statement, b is the condition statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.

`var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}`

ourArray will now have the value [0,1,2,3,4].

Use a for loop to push the values 1 through 5 onto myArray.

---

Você pode executar o mesmo código várias vezes usando um loop.

O tipo mais comum de loop JavaScript é chamado de loop for porque é executado por um número específico de vezes.

Os loops For são declarados com três expressões opcionais separadas por ponto e vírgula:

para (a; b; c), onde a é a declaração de inicialização, b é a declaração de condição ec é a expressão final.

A instrução de inicialização é executada apenas uma vez antes do início do loop. Normalmente é usado para definir e configurar sua variável de loop.

A instrução de condição é avaliada no início de cada iteração do loop e continuará enquanto for avaliada como verdadeira. Quando a condição for falsa no início da iteração, a execução do loop será interrompida. Isso significa que se a condição começar como falsa, seu loop nunca será executado.

A expressão final é executada no final de cada iteração de loop, antes da próxima verificação de condição e geralmente é usada para aumentar ou diminuir o contador de loop.

No exemplo a seguir, inicializamos com i = 0 e iteramos enquanto nossa condição i <5 é verdadeira. Iremos incrementar i em 1 em cada iteração de loop com i ++ como nossa expressão final.

`var ourArray = [];
for (var i = 0; i <5; i ++) {
  ourArray.push (i);
} `

ourArray agora terá o valor [0,1,2,3,4].