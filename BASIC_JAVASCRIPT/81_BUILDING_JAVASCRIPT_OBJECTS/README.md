# Build JavaScript objects

You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

`var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};`

In this example, all the properties are stored as strings, such as - name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

`var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};`

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.

---

Você pode ter ouvido o termo objeto antes.

Objetos são semelhantes a matrizes, exceto que, em vez de usar índices para acessar e modificar seus dados, você acessa os dados em objetos por meio do que são chamadas de propriedades.

Os objetos são úteis para armazenar dados de forma estruturada e podem representar objetos do mundo real, como um gato.

Aqui está um exemplo de objeto gato:

`var cat = {
  "nome": "Bigodes",
  "pernas": 4,
  "caudas": 1,
  "inimigos": ["Água", "Cachorros"]
}; `

Neste exemplo, todas as propriedades são armazenadas como strings, como - nome, pernas e caudas. No entanto, você também pode usar números como propriedades. Você pode até omitir as aspas para propriedades de string de palavra única, da seguinte maneira:

`var anotherObject = {
  fazer: "Ford",
  5: "cinco",
  "modelo": "foco"
}; `

No entanto, se o seu objeto tiver quaisquer propriedades que não sejam string, o JavaScript irá automaticamente fazer o typecast como strings.

Faça um objeto que representa um cachorro chamado myDog que contém o nome das propriedades (uma string), pernas, caudas e amigos.

Você pode definir essas propriedades de objeto para quaisquer valores que desejar, desde que nome seja uma string, pernas e caudas são números e amigos é uma matriz