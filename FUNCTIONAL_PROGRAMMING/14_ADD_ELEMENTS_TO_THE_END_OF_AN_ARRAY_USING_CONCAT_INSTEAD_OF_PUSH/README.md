# Add elements to the end of an array using concat instead of push

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays. Compare concat to the push method. push adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

`var arr = [1, 2, 3];
arr.push([4, 5, 6]);`

arr would have a modified value of [1, 2, 3, [4, 5, 6]], which is not the functional programming way.

concat offers a way to add new items to the end of an array without any mutating side effects.

Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.

---

A programação funcional trata de criar e usar funções não mutantes.

O último desafio introduziu o método concat como uma forma de combinar arrays em um novo sem alterar os arrays originais. Compare concat com o método push. push adiciona um item ao final do mesmo array em que é chamado, o que altera esse array. Aqui está um exemplo:

`var arr = [1, 2, 3];
arr.push ([4, 5, 6]); `

arr teria um valor modificado de [1, 2, 3, [4, 5, 6]], que não é a forma de programação funcional.

concat oferece uma maneira de adicionar novos itens ao final de uma matriz sem quaisquer efeitos colaterais mutantes.

Altere a função nonMutatingPush para que use concat para adicionar newItem ao final do original em vez de push. A função deve retornar uma matriz. 