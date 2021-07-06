# Use the rest parameter with function parameters

In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:

`function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));`

The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

---

Para nos ajudar a criar funções mais flexíveis, o ES6 introduz o parâmetro rest para os parâmetros de função. Com o parâmetro rest, você pode criar funções que usam um número variável de argumentos. Esses argumentos são armazenados em uma matriz que pode ser acessada posteriormente de dentro da função.

Confira este código:

`function howMany (... args) {
   return "Você passou" + args.length + "argumentos.";
}
console.log (howMany (0, 1, 2));
console.log (howMany ("string", null, [1, 2, 3], {})); `

O console exibirá as strings Você passou 3 argumentos. e você passou 4 argumentos ..

O parâmetro rest elimina a necessidade de verificar o array args e nos permite aplicar map (), filter () e reduce () no array de parâmetros.

Modifique a função sum usando o parâmetro rest de forma que a função sum seja capaz de receber qualquer número de argumentos e retornar sua soma.