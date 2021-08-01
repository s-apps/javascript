# Sort an array alphabetically using the sort method

The sort method sorts the elements of an array according to the callback function.

For example:

`function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);`

This would return the value [1, 2, 3, 4, 5].

`function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);`

This would return the value ['z', 's', 'l', 'h', 'b'].

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

---

O método sort classifica os elementos de uma matriz de acordo com a função de retorno de chamada.

Por exemplo:

`function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);`

Isso retornaria o valor [1, 2, 3, 4, 5].

`function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);`

Isso retornaria o valor ['z', 's', 'l', 'h', 'b'].

O método de classificação padrão do JavaScript é pelo valor do ponto Unicode da string, que pode retornar resultados inesperados. Portanto, é recomendável fornecer uma função de retorno de chamada para especificar como classificar os itens da matriz. Quando tal função de retorno de chamada, normalmente chamada compareFunction, é fornecida, os elementos do array são classificados de acordo com o valor de retorno de compareFunction: Se compareFunction (a, b) retorna um valor menor que 0 para dois elementos aeb, então a irá venha antes de b. Se compareFunction (a, b) retornar um valor maior que 0 para dois elementos a e b, então b virá antes de a. Se compareFunction (a, b) retornar um valor igual a 0 para dois elementos a e b, então a e b permanecerão inalterados.

Use o método de classificação na função alphabeticalOrder para classificar os elementos de arr em ordem alfabética.