# Remove items using splice()

Ok, so we've learned how to remove elements from the beginning and end of arrays using shift() and pop(), but what if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes, or positions, of the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

`let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);`

Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

`let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);`

newArray has the value ['really', 'happy'].

We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

---

Ok, então aprendemos como remover elementos do início e do final de arrays usando shift () e pop (), mas e se quisermos remover um elemento de algum lugar no meio? Ou remover mais de um elemento de uma vez? Bem, é aí que entra splice (). Splice () nos permite fazer exatamente isso: remover qualquer número de elementos consecutivos de qualquer lugar em um array.

splice () pode ter até 3 parâmetros, mas por agora, vamos nos concentrar apenas nos primeiros 2. Os primeiros dois parâmetros de splice () são inteiros que representam índices, ou posições, do array que splice () está sendo chamado a. E lembre-se, os arrays são indexados por zero, então para indicar o primeiro elemento de um array, usaríamos o primeiro parâmetro de 0. splice () representa o índice do array a partir do qual começar a remover elementos, enquanto o segundo parâmetro indica o número de elementos a serem excluídos. Por exemplo:

`let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);`

Aqui, removemos 2 elementos, começando com o terceiro elemento (no índice 2). array teria o valor ['today', 'was', 'great'].

splice () não apenas modifica a matriz em que está sendo chamada, mas também retorna uma nova matriz contendo o valor dos elementos removidos:

`let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);`

newArray tem o valor ['really', 'happy'].

Inicializamos um array arr. Use splice () para remover elementos de arr, de modo que contenha apenas elementos que somam o valor de 10. 
