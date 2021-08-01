# Use the map method to extract data from an array

So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

See below for an example using the map method on the users array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.

`const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user => user.name);
console.log(names);`

The console would display the value [ 'John', 'Amy', 'camperCat' ].

The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects to the ratings variable. Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.

---

Até agora, aprendemos a usar funções puras para evitar efeitos colaterais em um programa. Além disso, vimos que o valor de ter uma função depende apenas de seus argumentos de entrada.

Este é apenas o começo. Como o próprio nome sugere, a programação funcional é centrada em uma teoria das funções.

Faria sentido poder passá-los como argumentos para outras funções e retornar uma função de outra função. Funções são consideradas objetos de primeira classe em JavaScript, o que significa que podem ser usadas como qualquer outro objeto. Eles podem ser salvos em variáveis, armazenados em um objeto ou passados ​​como argumentos de função.

Vamos começar com algumas funções de array simples, que são métodos no protótipo do objeto de array. Neste exercício, estamos examinando Array.prototype.map () ou, mais simplesmente, map.

O método map itera sobre cada item em uma matriz e retorna uma nova matriz contendo os resultados da chamada da função de retorno de chamada em cada elemento. Ele faz isso sem alterar a matriz original.

Quando o retorno de chamada é usado, três argumentos são passados. O primeiro argumento é o elemento atual sendo processado. O segundo é o índice desse elemento e o terceiro é a matriz na qual o método map foi chamado.

Veja abaixo um exemplo de uso do método map no array users para retornar um novo array contendo apenas os nomes dos usuários como elementos. Para simplificar, o exemplo usa apenas o primeiro argumento do retorno de chamada.

`const users = [
  {nome: 'John', idade: 34},
  {nome: 'Amy', idade: 20},
  {nome: 'camperCat', idade: 10}
];

nomes const = users.map (user => user.name);
console.log (nomes); `

O console exibiria o valor ['John', 'Amy', 'camperCat'].

O array watchList contém objetos com informações sobre vários filmes. Use map em watchList para atribuir uma nova matriz de objetos à variável de classificações. Cada filme na nova matriz deve ter apenas uma chave de título com o nome do filme e uma chave de classificação com a classificação IMDB. O código no editor atualmente usa um loop for para fazer isso, portanto, você deve substituir a funcionalidade de loop pela sua expressão de mapa. 
