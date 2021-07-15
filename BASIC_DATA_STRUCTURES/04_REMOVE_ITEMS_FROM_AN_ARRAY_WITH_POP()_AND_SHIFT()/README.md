# Remove items from an array with pop() and shift()

Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). As you may have guessed by now, instead of adding, pop() removes an element from the end of an array, while shift() removes an element from the beginning. The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

Let's take a look:

`let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();`

greetings would have the value ['whats up?', 'hello'].

`greetings.shift();`

greetings would have the value ['hello'].

We can also return the value of the removed element with either method like this:

`let popped = greetings.pop();`

greetings would have the value [], and popped would have the value hello.

We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

---

Push () e unshift () têm métodos correspondentes que são quase opostos funcionais: pop () e shift (). Como você já deve ter adivinhado, em vez de adicionar, pop () remove um elemento do final de um array, enquanto shift () remove um elemento do início. A principal diferença entre pop () e shift () e seus primos push () e unshift (), é que nenhum dos métodos usa parâmetros e cada um permite que um array seja modificado por um único elemento por vez.

Vamos dar uma olhada:

`let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();`

saudações teria o valor ['e aí?', 'olá'].

`greetings.shift();`

saudações teria o valor ['whats up?', 'hello'].

Também podemos retornar o valor do elemento removido com qualquer método como este:

`let popped = greetings.pop();`

saudações teria o valor [] e popped teria o valor hello.

Definimos uma função, popShift, que recebe um array como argumento e retorna um novo array. Modifique a função, usando pop () e shift (), para remover o primeiro e o último elementos da matriz de argumento e atribua os elementos removidos às suas variáveis ​​correspondentes, de modo que a matriz retornada contenha seus valores. 
