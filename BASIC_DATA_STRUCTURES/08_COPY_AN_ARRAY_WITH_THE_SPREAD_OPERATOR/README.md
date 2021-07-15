# Copy an array with the spread operator

While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...

In practice, we can use the spread operator to copy an array like so:

`let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];`

thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged and thatArray contains the same elements as thisArray.

We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

---

Enquanto slice () nos permite ser seletivos sobre quais elementos de um array copiar, entre várias outras tarefas úteis, o novo operador de propagação do ES6 nos permite copiar facilmente todos os elementos de um array, em ordem, com uma sintaxe simples e altamente legível. A sintaxe de propagação simplesmente se parece com isto: ...

Na prática, podemos usar o operador spread para copiar uma matriz assim:

`let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];`

thatArray é igual a [true, true, undefined, false, null]. thisArray permanece inalterado e thatArray contém os mesmos elementos que thisArray.

Definimos uma função, copyMachine, que recebe arr (uma matriz) e num (um número) como argumentos. A função deve retornar uma nova matriz composta de várias cópias de arr. Fizemos a maior parte do trabalho para você, mas ainda não funciona bem. Modifique a função usando a sintaxe de propagação para que funcione corretamente (dica: outro método que já abordamos pode ser útil aqui!). 