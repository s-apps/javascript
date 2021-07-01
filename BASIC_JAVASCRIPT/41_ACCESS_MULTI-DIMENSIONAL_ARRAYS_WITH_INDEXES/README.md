# Access multi-dimensional arrays with indexes

One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

Example

`var arr = [`
  `[1,2,3],`
  `[4,5,6],`
  `[7,8,9],`
  `[[10,11,12], 13, 14]`
`];`
`arr[3];`
`arr[3][0];`
`arr[3][0][1];`

arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0][0] and even this array [0] [0] is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Using bracket notation select an element from myArray such that myData is equal to 8.

---

Uma maneira de pensar em uma matriz multidimensional é como uma matriz de matrizes. Quando você usa colchetes para acessar sua matriz, o primeiro conjunto de colchetes se refere às entradas na matriz mais externa (o primeiro nível) e cada par adicional de colchetes se refere ao próximo nível de entradas dentro.

Exemplo

`var arr = [`
   `[1,2,3],`
   `[4,5,6],`
   `[7,8,9],`
   `[[10,11,12], 13, 14]`
`];`
`arr [3];`
`arr [3] [0];`
`arr [3] [0] [1];`

arr[3] é [[10, 11, 12], 13, 14], arr[3][0] é [10, 11, 12] e arr[3][0][1] é 11.

Nota: Não deve haver nenhum espaço entre o nome do array e os colchetes, como array [0] [0] e mesmo este array [0] [0] não é permitido. Embora o JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores que estejam lendo seu código.

Usando a notação de colchetes, selecione um elemento de myArray de forma que myData seja igual a 8.