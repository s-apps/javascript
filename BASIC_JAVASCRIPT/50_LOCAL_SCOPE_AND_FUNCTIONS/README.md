# Local scope and functions

Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.

`function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest();
console.log(loc);`

The myTest() function call will display the string foo in the console. The console.log(loc) line will throw an error, as loc is not defined outside of the function.

The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

---

As variáveis que são declaradas dentro de uma função, assim como os parâmetros da função, têm escopo local. Isso significa que eles são visíveis apenas dentro dessa função.

Aqui está uma função myTest com uma variável local chamada loc.

`function myTest() {
   var loc = "foo";
   console.log(loc);
}
myTest();
console.log(loc);`

A chamada de função myTest() exibirá a string foo no console. A linha console.log(loc) gerará um erro, pois loc não está definido fora da função.

O editor possui dois console.logs para ajudá-lo a ver o que está acontecendo. Verifique o console enquanto você codifica para ver como ele muda. Declare uma variável local myVar dentro de myLocalScope e execute os testes.

Nota: O console ainda exibirá ReferenceError: myVar não está definido, mas isso não fará com que os testes falhem.