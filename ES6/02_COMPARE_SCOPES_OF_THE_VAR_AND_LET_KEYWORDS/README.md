# Compare scopes of the var and let keywords

When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

For example:

`var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);`

Here the console will display the values [0, 1, 2] and 3.

With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:

`var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);`

Here the console will display the values [0, 1, 2] and 3.

This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable.

`var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());`

Here the console will display the value 3.

As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior:

`let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);`

Here the console will display the value 2, and an error that i is not defined.

i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.

---

Quando você declara uma variável com a palavra-chave var, ela é declarada globalmente ou localmente se declarada dentro de uma função.

A palavra-chave let se comporta de maneira semelhante, mas com alguns recursos extras. Quando você declara uma variável com a palavra-chave let dentro de um bloco, instrução ou expressão, seu escopo é limitado a esse bloco, instrução ou expressão.

Por exemplo:

`var numArray = [];
para (var i = 0; i <3; i ++) {
  numArray.push (i);
}
console.log (numArray);
console.log (i); `

Aqui, o console exibirá os valores [0, 1, 2] e 3.

Com a palavra-chave var, i é declarado globalmente. Portanto, quando i ++ é executado, ele atualiza a variável global. Este código é semelhante ao seguinte:

`var numArray = [];
var i;
para (i = 0; i <3; i ++) {
  numArray.push (i);
}
console.log (numArray);
console.log (i); `

Aqui, o console exibirá os valores [0, 1, 2] e 3.

Esse comportamento causará problemas se você criar uma função e armazená-la para uso posterior dentro de um loop for que usa a variável i. Isso ocorre porque a função armazenada sempre fará referência ao valor da variável i global atualizada.

`var printNumTwo;
para (var i = 0; i <3; i ++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log (printNumTwo ()); `

Aqui, o console exibirá o valor 3.

Como você pode ver, printNumTwo () imprime 3 e não 2. Isso ocorre porque o valor atribuído a i foi atualizado e printNumTwo () retorna o i global e não o valor que eu tinha quando a função foi criada no loop for. A palavra-chave let não segue este comportamento:

`let printNumTwo;
for (deixe i = 0; i <3; i ++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log (printNumTwo ());
console.log (i); `

Aqui, o console exibirá o valor 2 e um erro que i não foi definido.

i não está definido porque não foi declarado no escopo global. Ele só é declarado dentro da instrução de loop for. printNumTwo () retornou o valor correto porque três variáveis ​​i diferentes com valores exclusivos (0, 1 e 2) foram criadas pela palavra-chave let dentro da instrução de loop.

Corrija o código para que i declarado na instrução if seja uma variável separada do que i declarado na primeira linha da função. Certifique-se de não usar a palavra-chave var em qualquer lugar do seu código.

Este exercício foi elaborado para ilustrar a diferença entre como var e permitir que as palavras-chave atribuam escopo à variável declarada. Ao programar uma função semelhante à usada neste exercício, geralmente é melhor usar nomes de variáveis ​​diferentes para evitar confusão.