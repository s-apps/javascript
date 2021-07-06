# Use destructuring assignment with the rest parameter to reassign array elements

In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:

`const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);`

The console would display the values 1, 2 and [3, 4, 5, 7].

Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

---

Em algumas situações que envolvem a desestruturação do array, podemos querer coletar o resto dos elementos em um array separado.

O resultado é semelhante a Array.prototype.slice (), conforme mostrado abaixo:

`const [a, b, ... arr] = [1, 2, 3, 4, 5, 7];
console.log (a, b);
console.log (arr); `

O console exibiria os valores 1, 2 e [3, 4, 5, 7].

As variáveis a e b obtêm o primeiro e o segundo valores da matriz. Depois disso, devido à presença do parâmetro rest, arr obtém o resto dos valores na forma de um array. O elemento rest só funciona corretamente como a última variável da lista. Como em, você não pode usar o parâmetro rest para capturar um subarray que deixa de fora o último elemento do array original.

Use a atribuição de desestruturação com o parâmetro rest para executar um Array.prototype.slice () eficaz de forma que arr seja uma submatriz da origem da matriz original com os dois primeiros elementos omitidos.