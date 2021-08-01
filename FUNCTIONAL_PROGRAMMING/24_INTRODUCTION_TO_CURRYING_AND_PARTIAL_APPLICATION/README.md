# Introduction to currying and partial application

The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:

`function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)`

curried(1)(2) would return 3.

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

`var funcForY = curried(1);
console.log(funcForY(2)); // 3`

Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

`function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13`

Fill in the body of the add function so it uses currying to add parameters x, y, and z.

---

A aridade de uma função é o número de argumentos que ela requer. Criar uma função significa converter uma função de N aridade em N funções de aridade 1.

Em outras palavras, ele reestrutura uma função para que receba um argumento e, em seguida, retorne outra função que receba o próximo argumento, e assim por diante.

Aqui está um exemplo:

`function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)`

curry (1) (2) retornaria 3.

Isso é útil em seu programa se você não puder fornecer todos os argumentos para uma função de uma vez. Você pode salvar cada chamada de função em uma variável, que conterá a referência de função retornada que recebe o próximo argumento quando estiver disponível. Aqui está um exemplo usando a função curried no exemplo acima:

`var funcForY = curried(1);
console.log(funcForY(2)); // 3`

Da mesma forma, a aplicação parcial pode ser descrita como a aplicação de alguns argumentos a uma função por vez e o retorno de outra função que é aplicada a mais argumentos. Aqui está um exemplo:

`function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13`

Preencha o corpo da função add para que use currying para adicionar os parâmetros x, y e z. 