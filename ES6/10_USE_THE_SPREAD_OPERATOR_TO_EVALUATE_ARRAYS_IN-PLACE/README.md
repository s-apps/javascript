# Use the spread operator to evaluate arrays in-place

ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:

`var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);`

maximus would have a value of 89.

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

`const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);`

maximus would have a value of 89.

...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

`const spreaded = ...arr;`

Copy all contents of arr1 into another array arr2 using the spread operator.

---

ES6 introduz o operador spread, que nos permite expandir arrays e outras expressões em lugares onde vários parâmetros ou elementos são esperados.

O código ES5 abaixo usa apply () para calcular o valor máximo em uma matriz:

`var arr = [6, 89, 3, 45];
var maximus = Math.max.apply (null, arr); `

maximus teria um valor de 89.

Tivemos que usar Math.max.apply (null, arr) porque Math.max (arr) retorna NaN. Math.max () espera argumentos separados por vírgulas, mas não um array. O operador spread torna esta sintaxe muito melhor para ler e manter.

`const arr = [6, 89, 3, 45];
const maximus = Math.max (... arr); `

maximus teria um valor de 89.

... arr retorna uma matriz descompactada. Em outras palavras, ele espalha o array. No entanto, o operador de propagação funciona apenas no local, como em um argumento para uma função ou em um literal de array. O código a seguir não funcionará:

`const spreaded = ... arr;`

Copie todo o conteúdo de arr1 em outro array arr2 usando o operador spread.