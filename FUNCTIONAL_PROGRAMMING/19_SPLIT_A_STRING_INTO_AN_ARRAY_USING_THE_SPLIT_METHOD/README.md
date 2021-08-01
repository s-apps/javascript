# Split a string into an array using the split method

The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

`var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);`

bySpace would have the value `["Hello", "World"]` and byDigits would have the value `["How", "are", "you", "today"]`.

Since strings are immutable, the split method makes it easier to work with them.

Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

---

O método split divide uma string em um array de strings. É necessário um argumento para o delimitador, que pode ser um caractere a ser usado para quebrar a string ou uma expressão regular. Por exemplo, se o delimitador for um espaço, você obtém uma matriz de palavras e, se o delimitador for uma string vazia, você obtém uma matriz de cada caractere da string.

Aqui estão dois exemplos que dividem uma string por espaços, depois outra por dígitos, usando uma expressão regular:

`var str = "Hello World";
var bySpace = str.split(" ");

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);`

bySpace teria o valor `["Hello", "World"]` e byDigits teria o valor `["How", "are", "you", "today"]`.

Como as strings são imutáveis, o método de divisão torna mais fácil trabalhar com elas.

Use o método split dentro da função splitify para dividir str em um array de palavras. A função deve retornar a matriz. Observe que as palavras nem sempre são separadas por espaços e a matriz não deve conter pontuação. 