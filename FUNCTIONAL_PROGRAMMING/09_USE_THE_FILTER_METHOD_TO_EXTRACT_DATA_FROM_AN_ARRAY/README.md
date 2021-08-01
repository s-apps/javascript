# Use the filter method to extract data from an array

Another useful array function is Array.prototype.filter(), or simply filter().

filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.

See below for an example using the filter method on the users array to return a new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback.

`const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);`

The console would display the value `[ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]`.

The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

---

Outra função de array útil é Array.prototype.filter () ou simplesmente filter ().

filter chama uma função em cada elemento de um array e retorna um novo array contendo apenas os elementos para os quais a função retorna true. Em outras palavras, ele filtra o array com base na função transmitida a ele. Como o mapa, ele faz isso sem a necessidade de modificar o array original.

A função de retorno de chamada aceita três argumentos. O primeiro argumento é o elemento atual sendo processado. O segundo é o índice desse elemento e o terceiro é a matriz na qual o método de filtro foi chamado.

Veja abaixo um exemplo usando o método de filtro na matriz de usuários para retornar uma nova matriz contendo apenas os usuários com idade inferior a 30 anos. Para simplificar, o exemplo usa apenas o primeiro argumento do retorno de chamada.

`const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);`

O console exibiria o valor `[ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]`.

A variável watchList contém uma série de objetos com informações sobre vários filmes. Use uma combinação de filtro e mapa em watchList para atribuir uma nova matriz de objetos apenas com títulos e chaves de classificação. A nova matriz deve incluir apenas objetos onde imdbRating é maior ou igual a 8,0. Observe que os valores de classificação são salvos como strings no objeto e você pode precisar convertê-los em números para realizar operações matemáticas neles. 