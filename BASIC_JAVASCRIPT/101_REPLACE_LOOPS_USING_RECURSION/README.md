# Replace loops with recursion

Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

  `function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }`

However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

  `function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }`

The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

---

Recursão é o conceito de que uma função pode ser expressa em termos de si mesma. Para ajudar a entender isso, comece pensando na seguinte tarefa: multiplique os primeiros n elementos de um array para criar o produto desses elementos. Usando um loop for, você poderia fazer isso:

  `função multiply (arr, n) {
    var product = 1;
    para (var i = 0; i <n; i ++) {
        produto * = arr [i];
    }
    devolver o produto;
  } `

No entanto, observe que multiply (arr, n) == multiply (arr, n - 1) * arr [n - 1]. Isso significa que você pode reescrever, multiplicar em termos de si mesmo e nunca precisar usar um loop.

  `função multiply (arr, n) {
    if (n <= 0) {
      return 1;
    } senão {
      retorno multiplicar (arr, n - 1) * arr [n - 1];
    }
  } `

A versão recursiva de multiplicação é quebrada assim. No caso base, onde n <= 0, ele retorna 1. Para valores maiores de n, ele se chama, mas com n - 1. Essa chamada de função é avaliada da mesma maneira, chamando multiply novamente até n <= 0. Nesse ponto, todas as funções podem retornar e a multiplicação original retorna a resposta.

Nota: As funções recursivas devem ter um caso base quando retornam sem chamar a função novamente (neste exemplo, quando n <= 0), caso contrário, nunca poderão terminar a execução.

Escreva uma função recursiva, sum (arr, n), que retorna a soma dos primeiros n elementos de uma matriz arr.