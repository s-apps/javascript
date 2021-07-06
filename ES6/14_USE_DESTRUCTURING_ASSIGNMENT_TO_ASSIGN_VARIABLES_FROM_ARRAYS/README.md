# Use destructuring assignment to assign variables from arrays

ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:

`const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);`

The console will display the values of a and b as 1, 2.

The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

'const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);`

The console will display the values of a, b, and c as 1, 2, 5.

Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

---

ES6 torna a desestruturação de arrays tão fácil quanto a desestruturação de objetos.

Uma diferença chave entre o operador spread e a desestruturação do array é que o operador spread desempacota todo o conteúdo de um array em uma lista separada por vírgulas. Conseqüentemente, você não pode selecionar ou escolher quais elementos deseja atribuir às variáveis.

A destruição de uma matriz nos permite fazer exatamente isso:

`const [a, b] = [1, 2, 3, 4, 5, 6];
console.log (a, b); `

O console exibirá os valores de a e b como 1, 2.

A variável a é atribuída ao primeiro valor da matriz e b é atribuído ao segundo valor da matriz. Também podemos acessar o valor em qualquer índice em uma matriz com desestruturação usando vírgulas para chegar ao índice desejado:

'const [a, b ,,, c] = [1, 2, 3, 4, 5, 6];
console.log (a, b, c); `

O console exibirá os valores de a, b e c como 1, 2, 5.

Use a atribuição de desestruturação para trocar os valores de a e b de modo que a receba o valor armazenado em b e b receba o valor armazenado em a.