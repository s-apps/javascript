# Use an array to store a collection of data

The below is an example of the simplest implementation of an array data structure. This is known as a one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains booleans, strings, and numbers, among other valid JavaScript data types:

`let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);`

The console.log call displays 7.

All arrays have a length property, which as shown above, can be very easily accessed with the syntax Array.length. A more complex implementation of an array can be seen below. This is known as a multi-dimensional array, or an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

`let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];`

We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.

---

A seguir está um exemplo da implementação mais simples de uma estrutura de dados de array. Isso é conhecido como array unidimensional, o que significa que tem apenas um nível ou que não possui outros arrays aninhados dentro dele. Observe que ele contém booleanos, strings e números, entre outros tipos de dados JavaScript válidos:

`et simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);`

A chamada console.log exibe 7.

Todos os arrays têm uma propriedade length, que conforme mostrado acima, pode ser acessada facilmente com a sintaxe Array.length. Uma implementação mais complexa de um array pode ser vista abaixo. Isso é conhecido como uma matriz multidimensional ou uma matriz que contém outras matrizes. Observe que esse array também contém objetos JavaScript, que examinaremos bem de perto na próxima seção, mas, por enquanto, tudo o que você precisa saber é que os arrays também são capazes de armazenar objetos complexos.

`let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];`

Definimos uma variável chamada yourArray. Conclua a instrução atribuindo uma matriz de pelo menos 5 elementos de comprimento à variável yourArray. Seu array deve conter pelo menos uma string, um número e um booleano. 
