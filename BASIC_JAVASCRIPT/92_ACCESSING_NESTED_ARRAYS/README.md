# Accessing nested arrays

As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

`var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1];
ourPets[1].names[0];`

ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

---

Como vimos nos exemplos anteriores, os objetos podem conter tanto objetos aninhados quanto matrizes aninhadas. Semelhante ao acesso a objetos aninhados, a notação de colchetes de array pode ser encadeada para acessar arrays aninhados.

Aqui está um exemplo de como acessar uma matriz aninhada:

`var ourPets = [
   {
     animalType: "gato",
     nomes: [
       "Miauzer",
       "Fofinho",
       "Kit-Cat"
     ]
   },
   {
     animalType: "cachorro",
     nomes: [
       "Local",
       "Bowser",
       "Frankie"
     ]
   }
];
ourPets [0] .names [1];
ourPets [1] .names [0]; `

ourPets [0] .names [1] seria a string Fluffy, e ourPets [1] .names [0] seria a string Spot.

Usando a notação de ponto e colchete, defina a variável secondTree como o segundo item na lista de árvores do objec myPlant