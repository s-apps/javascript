# Add items to an array with push() and unshift()

An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are mutable. In this challenge, we will look at two methods with which we can programmatically modify an array: Array.push() and Array.unshift().

Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning. Consider the following:

`let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');`

romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII'].

`romanNumerals.push(twentyThree);`

romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.

We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

---

O comprimento de um array, como os tipos de dados que ele pode conter, não é fixo. Os arrays podem ser definidos com um comprimento de qualquer número de elementos, e os elementos podem ser adicionados ou removidos ao longo do tempo; em outras palavras, os arrays são mutáveis. Neste desafio, veremos dois métodos com os quais podemos modificar programaticamente um array: Array.push () e Array.unshift ().

Ambos os métodos pegam um ou mais elementos como parâmetros e os adicionam ao array em que o método está sendo chamado; o método push () adiciona elementos ao final de uma matriz e unshift () adiciona elementos ao início. Considere o seguinte:

`let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');`

romanNumerals teria o valor ['XIX', 'XX', 'XXI', 'XXII'].

`romanNumerals.push(thirtyThree);`

romanNumerals teria o valor ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Observe que também podemos passar variáveis, o que nos permite flexibilidade ainda maior na modificação dinâmica dos dados de nosso array.

Definimos uma função, mixedNumbers, para a qual estamos passando um array como argumento. Modifique a função usando push () e unshift () para adicionar 'I', 2, 'três' ao início da matriz e 7, 'VIII', 9 ao final para que a matriz retornada contenha representações dos números 1-9 em ordem. 
