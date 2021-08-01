# Remove elements from an array using slice instead of splice

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on. Here's an example:

`var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);`

Here splice returns the string London and deletes it from the cities array. cities will have the value `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

As we saw in the last challenge, the slice method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the slice method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the slice method instead of splice helps to avoid any array-mutating side effects.

Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.

---

Um padrão comum ao trabalhar com matrizes é quando você deseja remover itens e manter o resto da matriz. JavaScript oferece o método de emenda para isso, que leva argumentos para o índice de onde começar a remover itens e, em seguida, o número de itens a serem removidos. Se o segundo argumento não for fornecido, o padrão é remover os itens até o final. No entanto, o método de emenda altera o array original no qual é chamado. Aqui está um exemplo:

`var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);`

Aqui, splice retorna a string London e a exclui da matriz cities. as cidades terão o valor `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

Como vimos no último desafio, o método slice não altera o array original, mas retorna um novo que pode ser salvo em uma variável. Lembre-se de que o método slice leva dois argumentos para os índices para começar e terminar o slice (o final não é inclusivo) e retorna esses itens em uma nova matriz. Usar o método slice em vez de splice ajuda a evitar quaisquer efeitos colaterais de mutação de array.

Reescreva a função nonMutatingSplice usando slice em vez de splice. Deve limitar a matriz de cidades fornecida a um comprimento de 3 e retornar uma nova matriz com apenas os três primeiros itens.

Não modifique a matriz original fornecida para a função. 
