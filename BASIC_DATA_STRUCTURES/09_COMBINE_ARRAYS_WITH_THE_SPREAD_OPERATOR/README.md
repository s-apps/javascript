# Combine arrays with the spread operator

Another huge advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

`let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];`

thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

---

Outra grande vantagem do operador spread é a capacidade de combinar arrays, ou inserir todos os elementos de um array em outro, em qualquer índice. Com sintaxes mais tradicionais, podemos concatenar matrizes, mas isso só nos permite combinar matrizes no final de uma e no início de outra. A sintaxe de propagação torna a seguinte operação extremamente simples:

`let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];`

thatArray teria o valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

Usando a sintaxe de propagação, acabamos de alcançar uma operação que teria sido mais complexa e detalhada se tivéssemos usado métodos tradicionais.

Definimos uma função spreadOut que retorna a variável sentence. Modifique a função usando o operador spread de forma que ela retorne o array ['learning', 'to', 'code', 'is', 'fun']. 