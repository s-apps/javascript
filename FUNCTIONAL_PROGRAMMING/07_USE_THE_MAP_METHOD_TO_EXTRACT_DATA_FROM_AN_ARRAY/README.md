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

At?? agora, aprendemos a usar fun????es puras para evitar efeitos colaterais em um programa. Al??m disso, vimos que o valor de ter uma fun????o depende apenas de seus argumentos de entrada.

Este ?? apenas o come??o. Como o pr??prio nome sugere, a programa????o funcional ?? centrada em uma teoria das fun????es.

Faria sentido poder pass??-los como argumentos para outras fun????es e retornar uma fun????o de outra fun????o. Fun????es s??o consideradas objetos de primeira classe em JavaScript, o que significa que podem ser usadas como qualquer outro objeto. Eles podem ser salvos em vari??veis, armazenados em um objeto ou passados ??????como argumentos de fun????o.

Vamos come??ar com algumas fun????es de array simples, que s??o m??todos no prot??tipo do objeto de array. Neste exerc??cio, estamos examinando Array.prototype.map () ou, mais simplesmente, map.

O m??todo map itera sobre cada item em uma matriz e retorna uma nova matriz contendo os resultados da chamada da fun????o de retorno de chamada em cada elemento. Ele faz isso sem alterar a matriz original.

Quando o retorno de chamada ?? usado, tr??s argumentos s??o passados. O primeiro argumento ?? o elemento atual sendo processado. O segundo ?? o ??ndice desse elemento e o terceiro ?? a matriz na qual o m??todo map foi chamado.

Veja abaixo um exemplo de uso do m??todo map no array users para retornar um novo array contendo apenas os nomes dos usu??rios como elementos. Para simplificar, o exemplo usa apenas o primeiro argumento do retorno de chamada.

`const users = [
  {nome: 'John', idade: 34},
  {nome: 'Amy', idade: 20},
  {nome: 'camperCat', idade: 10}
];

nomes const = users.map (user => user.name);
console.log (nomes); `

O console exibiria o valor ['John', 'Amy', 'camperCat'].

O array watchList cont??m objetos com informa????es sobre v??rios filmes. Use map em watchList para atribuir uma nova matriz de objetos ?? vari??vel de classifica????es. Cada filme na nova matriz deve ter apenas uma chave de t??tulo com o nome do filme e uma chave de classifica????o com a classifica????o IMDB. O c??digo no editor atualmente usa um loop for para fazer isso, portanto, voc?? deve substituir a funcionalidade de loop pela sua express??o de mapa. 
