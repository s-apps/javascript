# Return part of an array using the slice method

The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

Here's an example:

`var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);`

newArray would have the value `["Dog", "Tiger"]`.

Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.

---

O método slice retorna uma cópia de certos elementos de uma matriz. Pode receber dois argumentos, o primeiro fornece o índice de onde começar a fatia, o segundo é o índice de onde terminar a fatia (e não é inclusivo). Se os argumentos não forem fornecidos, o padrão é começar do início do array até o final, que é uma maneira fácil de fazer uma cópia de todo o array. O método slice não altera a matriz original, mas retorna uma nova.

Aqui está um exemplo:

`var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);`

newArray teria o valor `["Dog", "Tiger"]`.

Use o método slice na função sliceArray para retornar parte da matriz anim, dados os índices beginSlice e endSlice fornecidos. A função deve retornar uma matriz. 