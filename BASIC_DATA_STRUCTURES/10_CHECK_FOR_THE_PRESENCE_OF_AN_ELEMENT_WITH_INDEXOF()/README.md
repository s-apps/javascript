# Check for the presence of an element with indexOf()

Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

For example:

`let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');`

indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 (the first index at which each element exists).

indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

---

Uma vez que os arrays podem ser alterados ou transformados a qualquer momento, não há garantia sobre onde uma parte específica dos dados estará em um determinado array, ou se esse elemento ainda existe. Felizmente, o JavaScript nos fornece outro método embutido, indexOf (), que nos permite verificar de forma rápida e fácil a presença de um elemento em um array. indexOf () recebe um elemento como parâmetro e, quando chamado, retorna a posição, ou índice, desse elemento, ou -1 se o elemento não existir na matriz.

Por exemplo:

`let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');`

indexOf('dates') retorna -1, indexOf('oranges') retorna 2 e indexOf('pears') retorna 1 (o primeiro índice em que cada elemento existe).

indexOf () pode ser incrivelmente útil para verificar rapidamente a presença de um elemento em um array. Definimos uma função, quickCheck, que recebe um array e um elemento como argumentos. Modifique a função usando indexOf () para que ela retorne verdadeiro se o elemento passado existir na matriz e falso se não existir. 
