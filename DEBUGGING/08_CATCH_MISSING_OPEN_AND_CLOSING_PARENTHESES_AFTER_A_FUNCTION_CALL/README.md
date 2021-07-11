# Catch missing open and closing parentheses after a function call

When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.

The variables in the following example are different:

`function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();`

Here varOne is the function myFunction, and varTwo is the string You rock!.

Fix the code so the variable result is set to the value returned from calling the function getNine.

---

Quando uma função ou método não aceita nenhum argumento, você pode esquecer de incluir os parênteses de abertura e fechamento (vazios) ao chamá-lo. Freqüentemente, o resultado de uma chamada de função é salvo em uma variável para outro uso em seu código. Esse erro pode ser detectado registrando os valores das variáveis (ou seus tipos) no console e vendo que um deles é definido como uma referência de função, em vez do valor esperado que a função retorna.

As variáveis no exemplo a seguir são diferentes:

`function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();`

Aqui, varOne é a função myFunction e varTwo é a string You rock !.

Corrija o código para que o resultado da variável seja definido como o valor retornado da chamada da função getNine. 