# Manipulating complex objects

Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:

`var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];`

This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk. JavaScript Object Notation or JSON is a related data interchange format used to store data.

`{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}`

Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

---

Às vezes, você pode querer armazenar dados em uma estrutura de dados flexível. Um objeto JavaScript é uma maneira de lidar com dados flexíveis. Eles permitem combinações arbitrárias de strings, números, booleanos, matrizes, funções e objetos.

Aqui está um exemplo de uma estrutura de dados complexa:

`var ourMusic = [
  {
    "artista": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formatos": [
      "CD",
      "Cassete",
      "LP"
    ],
    "ouro": true
  }
]; `

Este é um array que contém um objeto dentro. O objeto contém várias partes de metadados sobre um álbum. Ele também tem uma matriz de formatos aninhados. Se quiser adicionar mais registros de álbum, você pode fazer isso adicionando registros à matriz de nível superior. Os objetos contêm dados em uma propriedade, que tem um formato de valor-chave. No exemplo acima, "artist": "Daft Punk" é uma propriedade que tem uma chave de artist e um valor de Daft Punk. JavaScript Object Notation ou JSON é um formato de intercâmbio de dados relacionado usado para armazenar dados.

`{
  "artista": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formatos": [
    "CD",
    "Cassete",
    "LP"
  ],
  "ouro": true
} `

Nota: Você precisará colocar uma vírgula após cada objeto na matriz, a menos que seja o último objeto na matriz.

Adicione um novo álbum ao array myMusic. Adicione strings de artista e título, número release_year e uma matriz de formatos de strings.