# Use the reduce method to analyze data

Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.

The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce. The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.

In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

See below for an example using reduce on the users array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.

`const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);`

The console would display the value 64.

In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

`const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);`

The console would display the value `{ John: 34, Amy: 20, camperCat: 10 }`.

The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

---

Array.prototype.reduce (), ou simplesmente reduz (), é a mais geral de todas as operações de array em JavaScript. Você pode resolver quase todos os problemas de processamento de matriz usando o método de redução.

O método de redução permite formas mais gerais de processamento de array e é possível mostrar que tanto o filtro quanto o mapa podem ser derivados como aplicações especiais de redução. O método de redução itera sobre cada item em uma matriz e retorna um único valor (ou seja, string, número, objeto, matriz). Isso é obtido por meio de uma função de retorno de chamada que é chamada em cada iteração.

A função de retorno de chamada aceita quatro argumentos. O primeiro argumento é conhecido como o acumulador, ao qual é atribuído o valor de retorno da função de retorno de chamada da iteração anterior, o segundo é o elemento atual sendo processado, o terceiro é o índice desse elemento e o quarto é a matriz sobre a qual reduz é chamado.

Além da função de retorno de chamada, reduza tem um parâmetro adicional que leva um valor inicial para o acumulador. Se este segundo parâmetro não for usado, a primeira iteração é ignorada e a segunda iteração passa o primeiro elemento da matriz como o acumulador.

Veja abaixo um exemplo usando reduzir na matriz de usuários para retornar a soma de todas as idades dos usuários. Para simplificar, o exemplo usa apenas o primeiro e o segundo argumentos.

`const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);`

O console exibiria o valor 64.

Em outro exemplo, veja como um objeto pode ser retornado contendo os nomes dos usuários como propriedades com suas idades como valores.

`const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);`

O console exibiria o valor `{John: 34, Amy: 20, camperCat: 10}`.

A variável watchList contém uma série de objetos com informações sobre vários filmes. Use reduzir para encontrar a classificação IMDB média dos filmes dirigidos por Christopher Nolan. Lembre-se de desafios anteriores como filtrar dados e mapear sobre eles para extrair o que você precisa. Pode ser necessário criar outras variáveis ​​e retornar a classificação média da função getRating. Observe que os valores de classificação são salvos como strings no objeto e precisam ser convertidos em números antes de serem usados ​​em quaisquer operações matemáticas. 
