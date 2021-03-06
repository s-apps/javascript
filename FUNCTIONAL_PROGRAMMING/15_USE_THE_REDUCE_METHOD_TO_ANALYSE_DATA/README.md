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

Array.prototype.reduce (), ou simplesmente reduz (), ?? a mais geral de todas as opera????es de array em JavaScript. Voc?? pode resolver quase todos os problemas de processamento de matriz usando o m??todo de redu????o.

O m??todo de redu????o permite formas mais gerais de processamento de array e ?? poss??vel mostrar que tanto o filtro quanto o mapa podem ser derivados como aplica????es especiais de redu????o. O m??todo de redu????o itera sobre cada item em uma matriz e retorna um ??nico valor (ou seja, string, n??mero, objeto, matriz). Isso ?? obtido por meio de uma fun????o de retorno de chamada que ?? chamada em cada itera????o.

A fun????o de retorno de chamada aceita quatro argumentos. O primeiro argumento ?? conhecido como o acumulador, ao qual ?? atribu??do o valor de retorno da fun????o de retorno de chamada da itera????o anterior, o segundo ?? o elemento atual sendo processado, o terceiro ?? o ??ndice desse elemento e o quarto ?? a matriz sobre a qual reduz ?? chamado.

Al??m da fun????o de retorno de chamada, reduza tem um par??metro adicional que leva um valor inicial para o acumulador. Se este segundo par??metro n??o for usado, a primeira itera????o ?? ignorada e a segunda itera????o passa o primeiro elemento da matriz como o acumulador.

Veja abaixo um exemplo usando reduzir na matriz de usu??rios para retornar a soma de todas as idades dos usu??rios. Para simplificar, o exemplo usa apenas o primeiro e o segundo argumentos.

`const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);`

O console exibiria o valor 64.

Em outro exemplo, veja como um objeto pode ser retornado contendo os nomes dos usu??rios como propriedades com suas idades como valores.

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

A vari??vel watchList cont??m uma s??rie de objetos com informa????es sobre v??rios filmes. Use reduzir para encontrar a classifica????o IMDB m??dia dos filmes dirigidos por Christopher Nolan. Lembre-se de desafios anteriores como filtrar dados e mapear sobre eles para extrair o que voc?? precisa. Pode ser necess??rio criar outras vari??veis ??????e retornar a classifica????o m??dia da fun????o getRating. Observe que os valores de classifica????o s??o salvos como strings no objeto e precisam ser convertidos em n??meros antes de serem usados ??????em quaisquer opera????es matem??ticas. 
