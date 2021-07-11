# Prevent infinite loops with a valid terminal condition

The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or crash the browser, and cause general program execution mayhem, which no one wants.

There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the while loop inside loopy(). Do NOT call this function!

`function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}`

It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.

The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.

---

O tópico final é o temido loop infinito. Os loops são ótimas ferramentas quando você precisa que seu programa execute um bloco de código um certo número de vezes ou até que uma condição seja atendida, mas eles precisam de uma condição terminal que encerre o loop. Os loops infinitos podem congelar ou travar o navegador e causar um caos geral na execução do programa, o que ninguém quer.

Houve um exemplo de loop infinito na introdução a esta seção - ele não tinha nenhuma condição terminal para sair do loop while dentro de loopy (). NÃO chame esta função!

`function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}`

É trabalho do programador garantir que a condição do terminal, que diz ao programa quando sair do código de loop, seja eventualmente alcançada. Um erro é aumentar ou diminuir uma variável do contador na direção errada da condição do terminal. Outro está redefinindo acidentalmente um contador ou variável de índice dentro do código de loop, em vez de incrementá-lo ou decrementá-lo.

A função myFunc () contém um loop infinito porque a condição terminal i! = 4 nunca será avaliada como falsa (e interromperá o loop) - i aumentará 2 a cada passagem e pulará para a direita acima de 4, pois i é estranho para começar. Fixe o operador de comparação na condição do terminal para que o loop execute apenas para i menor ou igual a 4. 
