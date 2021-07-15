# Iterate through all an array's items using for loops

Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to achieve different results (such as every(), forEach(), map(), etc.), however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.

Consider the following:

`function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);`

Using a for loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. In this way, we have easily and programmatically determined which data items are greater than 10, and returned a new array, [12, 14, 80], containing those items.

We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

---

Às vezes, ao trabalhar com matrizes, é muito útil ser capaz de iterar em cada item para encontrar um ou mais elementos de que possamos precisar, ou manipular uma matriz com base em quais itens de dados atendem a um determinado conjunto de critérios. JavaScript oferece vários métodos integrados em que cada itera sobre arrays de maneiras ligeiramente diferentes para obter resultados diferentes (como every (), forEach (), map (), etc.), porém a técnica que é mais flexível e nos oferece o melhor quantidade de controle é um simples loop for.

Considere o seguinte:

`function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);`

Usando um loop for, essa função itera e acessa cada elemento do array e o submete a um teste simples que criamos. Dessa forma, determinamos de maneira fácil e programática quais itens de dados são maiores que 10 e retornamos um novo array, [12, 14, 80], contendo esses itens.

Definimos uma função, FilterArray, que recebe arr, um array aninhado e elem como argumentos, e retorna um novo array. elem representa um elemento que pode ou não estar presente em um ou mais dos arrays aninhados em arr. Modifique a função, usando um loop for, para retornar uma versão filtrada do array passado de forma que qualquer array aninhado em arr contendo elem seja removido. 