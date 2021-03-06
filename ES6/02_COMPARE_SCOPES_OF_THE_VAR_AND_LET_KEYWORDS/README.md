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

Quando voc?? declara uma vari??vel com a palavra-chave var, ela ?? declarada globalmente ou localmente se declarada dentro de uma fun????o.

A palavra-chave let se comporta de maneira semelhante, mas com alguns recursos extras. Quando voc?? declara uma vari??vel com a palavra-chave let dentro de um bloco, instru????o ou express??o, seu escopo ?? limitado a esse bloco, instru????o ou express??o.

Por exemplo:

`var numArray = [];
para (var i = 0; i <3; i ++) {
  numArray.push (i);
}
console.log (numArray);
console.log (i); `

Aqui, o console exibir?? os valores [0, 1, 2] e 3.

Com a palavra-chave var, i ?? declarado globalmente. Portanto, quando i ++ ?? executado, ele atualiza a vari??vel global. Este c??digo ?? semelhante ao seguinte:

`var numArray = [];
var i;
para (i = 0; i <3; i ++) {
  numArray.push (i);
}
console.log (numArray);
console.log (i); `

Aqui, o console exibir?? os valores [0, 1, 2] e 3.

Esse comportamento causar?? problemas se voc?? criar uma fun????o e armazen??-la para uso posterior dentro de um loop for que usa a vari??vel i. Isso ocorre porque a fun????o armazenada sempre far?? refer??ncia ao valor da vari??vel i global atualizada.

`var printNumTwo;
para (var i = 0; i <3; i ++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log (printNumTwo ()); `

Aqui, o console exibir?? o valor 3.

Como voc?? pode ver, printNumTwo () imprime 3 e n??o 2. Isso ocorre porque o valor atribu??do a i foi atualizado e printNumTwo () retorna o i global e n??o o valor que eu tinha quando a fun????o foi criada no loop for. A palavra-chave let n??o segue este comportamento:

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

Aqui, o console exibir?? o valor 2 e um erro que i n??o foi definido.

i n??o est?? definido porque n??o foi declarado no escopo global. Ele s?? ?? declarado dentro da instru????o de loop for. printNumTwo () retornou o valor correto porque tr??s vari??veis ??????i diferentes com valores exclusivos (0, 1 e 2) foram criadas pela palavra-chave let dentro da instru????o de loop.

Corrija o c??digo para que i declarado na instru????o if seja uma vari??vel separada do que i declarado na primeira linha da fun????o. Certifique-se de n??o usar a palavra-chave var em qualquer lugar do seu c??digo.

Este exerc??cio foi elaborado para ilustrar a diferen??a entre como var e permitir que as palavras-chave atribuam escopo ?? vari??vel declarada. Ao programar uma fun????o semelhante ?? usada neste exerc??cio, geralmente ?? melhor usar nomes de vari??veis ??????diferentes para evitar confus??o.