# Create complex multi-dimensional arrays

Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, and there is plenty more to learn about working with arrays, much of which you will see in later sections. But before moving on to looking at Objects, lets take one more look, and see how arrays can become a bit more complex than what we have seen in previous challenges.

One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array. Consider the following example:

`let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];`

The deep array is nested 2 levels deep. The deeper arrays are 3 levels deep. The deepest arrays are 4 levels, and the deepest-est? is 5.

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of data. However, we can still very easily access the deepest levels of an array this complex with bracket notation:

`console.log(nestedArray[2][1][0][0][0]);`

This logs the string deepest-est?. And now that we know where that piece of data is, we can reset it if we need to:

`nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);`

Now it logs deeper still.

We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.


---

Impressionante! Voc?? acabou de aprender muito sobre matrizes! Esta foi uma vis??o geral de alto n??vel e h?? muito mais para aprender sobre como trabalhar com arrays, muitos dos quais voc?? ver?? em se????es posteriores. Mas antes de prosseguirmos para a an??lise de Objetos, vamos dar mais uma olhada e ver como os arrays podem se tornar um pouco mais complexos do que o que vimos nos desafios anteriores.

Um dos recursos mais poderosos quando se pensa em arrays como estruturas de dados, ?? que os arrays podem conter, ou mesmo ser completamente compostos por outros arrays. Vimos arrays que cont??m arrays em desafios anteriores, mas bastante simples. No entanto, os arrays podem conter uma profundidade infinita de arrays que podem conter outros arrays, cada um com seus pr??prios n??veis arbitr??rios de profundidade e assim por diante. Dessa forma, uma matriz pode rapidamente se tornar uma estrutura de dados muito complexa, conhecida como uma matriz multidimensional ou aninhada. Considere o seguinte exemplo:

`let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];`

A matriz profunda est?? aninhada em 2 n??veis de profundidade. As matrizes mais profundas t??m 3 n??veis de profundidade. As matrizes mais profundas t??m 4 n??veis e as mais profundas? ?? 5.

Embora este exemplo possa parecer complicado, esse n??vel de complexidade n??o ?? in??dito, ou mesmo incomum, ao lidar com grandes quantidades de dados. No entanto, ainda podemos acessar facilmente os n??veis mais profundos de uma matriz deste complexo com a nota????o de colchetes:

`console.log(nestedArray[2][1][0][0][0]);`

Isso registra a string deepest-est ?. E agora que sabemos onde esse dado est??, podemos redefini-lo se precisarmos:

`nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);`

Agora ele registra ainda mais profundamente.

Definimos uma vari??vel, myNestedArray, igual a um array. Modifique myNestedArray, usando qualquer combina????o de strings, n??meros e booleanos para elementos de dados, de modo que tenha exatamente cinco n??veis de profundidade (lembre-se de que o array mais externo ?? o n??vel 1). Em algum lugar no terceiro n??vel, inclua a corda mais profunda, no quarto n??vel, inclua a corda mais fundo, e no quinto n??vel, inclua a corda mais profunda. 