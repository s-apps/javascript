# Usr recursion to create a countdown

In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

`function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));`

The value [1, 2, 3, 4, 5] will be displayed in the console.

At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

---

Em um desafio anterior, você aprendeu como usar a recursão para substituir um loop for. Agora, vamos examinar uma função mais complexa que retorna uma matriz de inteiros consecutivos começando com 1 até o número passado para a função.

Conforme mencionado no desafio anterior, haverá um caso base. O caso base informa à função recursiva quando ela não precisa mais se chamar. É um caso simples em que o valor de retorno já é conhecido. Haverá também uma chamada recursiva que executa a função original com diferentes argumentos. Se a função for escrita corretamente, eventualmente o caso base será alcançado.

Por exemplo, digamos que você queira escrever uma função recursiva que retorna uma matriz contendo os números de 1 a n. Esta função precisará aceitar um argumento, n, representando o número final. Em seguida, ele precisará chamar a si mesmo com valores progressivamente menores de n até atingir 1. Você pode escrever a função da seguinte maneira:

`contagem de função (n) {
  if (n <1) {
    Retorna [];
  } senão {
    Const countArray = countup (n - 1);
    countArray.push (n);
    return countArray;
  }
}
console.log (contagem (5)); `

O valor [1, 2, 3, 4, 5] será exibido no console.

A princípio, isso parece contra-intuitivo, pois o valor de n diminui, mas os valores na matriz final estão aumentando. Isso acontece porque o push acontece por último, após o retorno da chamada recursiva. No ponto em que n é colocado na matriz, a contagem (n - 1) já foi avaliada e retornada [1, 2, ..., n - 1].

Definimos uma função chamada contagem regressiva com um parâmetro (n). A função deve usar recursão para retornar uma matriz contendo os inteiros de n a 1 com base no parâmetro n. Se a função for chamada com um número menor que 1, a função deve retornar uma matriz vazia. Por exemplo, chamar esta função com n = 5 deve retornar a matriz [5, 4, 3, 2, 1]. Sua função deve usar recursão chamando a si mesma e não deve usar loops de nenhum tipo.