# Return a sorted array without changing the original array

A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

---

Um efeito colateral do método de classificação é que ele altera a ordem dos elementos na matriz original. Em outras palavras, ele transforma o array no local. Uma maneira de evitar isso é primeiro concatenar um array vazio ao que está sendo classificado (lembre-se de que o slice e concat retornam um novo array) e, em seguida, execute o método de classificação.

Use o método de classificação na função nonMutatingSort para classificar os elementos de uma matriz em ordem crescente. A função deve retornar uma nova matriz e não alterar a variável globalArray. 