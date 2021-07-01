# Iterate with JavaScript do...while loops

The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

`var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);`

The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular while loop that will run the code in the loop as long as i < 5:

`var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}`

In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:

`var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);`

In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.

Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

---

O próximo tipo de loop que você aprenderá é chamado de loop do ... while. É chamado de loop do ... while porque fará primeiro uma passagem do código dentro do loop, não importa o que aconteça, e então continuará a executar o loop enquanto a condição especificada for avaliada como verdadeira.

`var ourArray = [];
var i = 0;
Faz {
  ourArray.push (i);
  i ++;
} enquanto (i <5); `

O exemplo acima se comporta de maneira semelhante a outros tipos de loops, e a matriz resultante será semelhante a [0, 1, 2, 3, 4]. No entanto, o que faz o fazer ... embora diferente de outros loops é como ele se comporta quando a condição falha na primeira verificação. Vamos ver isso em ação: aqui está um loop while regular que executará o código no loop enquanto i <5:

`var ourArray = [];
var i = 5;
enquanto (i <5) {
  ourArray.push (i);
  i ++;
} `

Neste exemplo, inicializamos o valor de ourArray para um array vazio e o valor de i para 5. Quando executamos o loop while, a condição é avaliada como falsa porque i não é menor que 5, então não executamos o código dentro o laço. O resultado é que nossoArray terminará sem nenhum valor adicionado a ele e ainda será semelhante a [] quando todo o código no exemplo acima tiver concluído a execução. Agora, dê uma olhada em um loop do ... while:

`var ourArray = [];
var i = 5;
Faz {
  ourArray.push (i);
  i ++;
} enquanto (i <5); `

Nesse caso, inicializamos o valor de i para 5, assim como fizemos com o loop while. Quando chegamos à próxima linha, não há condição para avaliar, então vamos para o código dentro das chaves e o executamos. Vamos adicionar um único elemento ao array e, em seguida, incrementar i antes de chegarmos à verificação de condição. Quando finalmente avaliamos a condição i <5 na última linha, vemos que agora i é 6, o que falha na verificação condicional, então saímos do loop e terminamos. No final do exemplo acima, o valor de ourArray é [5]. Essencialmente, um loop do ... while garante que o código dentro do loop será executado pelo menos uma vez. Vamos tentar fazer um loop do ... while funcionar, empurrando valores para um array.

Altere o loop while no código para um loop do ... while para que o loop empurre apenas o número 10 para myArray, e i será igual a 11 quando seu código terminar de ser executado.