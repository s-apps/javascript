# Refactor global variables out of functions

So far, we have seen two distinct principles for functional programming:

    Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like var newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

    Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

---

Até agora, vimos dois princípios distintos para a programação funcional:

    Não altere uma variável ou objeto - crie novas variáveis ​​e objetos e retorne-os se necessário de uma função. Dica: usar algo como var newArr = arrVar, onde arrVar é um array simplesmente criará uma referência para a variável existente e não uma cópia. Portanto, alterar um valor em newArr mudaria o valor em arrVar.

    Declare os parâmetros da função - qualquer cálculo dentro de uma função depende apenas dos argumentos passados ​​para a função, e não de qualquer objeto global ou variável.

Adicionar um a um número não é muito empolgante, mas podemos aplicar esses princípios ao trabalhar com matrizes ou objetos mais complexos.

Reescreva o código para que o array global bookList não seja alterado em nenhuma das funções. A função add deve adicionar o bookName fornecido ao final do array passado a ele e retornar um novo array (lista). A função remove deve remover o bookName fornecido do array passado para ele.

Nota: Ambas as funções devem retornar uma matriz e quaisquer novos parâmetros devem ser adicionados antes do parâmetro bookName. 
