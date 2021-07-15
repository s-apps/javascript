# Add items using splice()

Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.

`const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);`

The second occurrence of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

Here, we begin with an array of numbers. Then, we pass the following to splice(): The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the remaining arguments (13, 14) will be inserted starting at that same index. Note that there can be any number of elements (separated by commas) following amountToDelete, each of which gets inserted.

We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

---

Lembra que no último desafio mencionamos que splice () pode ter até três parâmetros? Bem, você pode usar o terceiro parâmetro, composto de um ou mais elemento (s), para adicionar ao array. Isso pode ser extremamente útil para trocar rapidamente um elemento, ou um conjunto de elementos, por outro.

`const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);`

A segunda ocorrência de 12 é removida e adicionamos 13 e 14 no mesmo índice. A matriz de números agora seria [10, 11, 12, 13, 14, 15].

Aqui, começamos com uma matriz de números. Em seguida, passamos o seguinte para splice (): O índice no qual começar a excluir os elementos (3), o número de elementos a serem excluídos (1) e os argumentos restantes (13, 14) serão inseridos a partir desse mesmo índice. Observe que pode haver qualquer número de elementos (separados por vírgulas) após amountToDelete, cada um dos quais é inserido.

Definimos uma função, htmlColorNames, que recebe uma matriz de cores HTML como argumento. Modifique a função usando splice () para remover os dois primeiros elementos da matriz e adicionar 'DarkSalmon' e 'BlanchedAlmond' em seus respectivos lugares. 