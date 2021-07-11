# Match whitespace

The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

`let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);`

This match call would return [" ", " "].

Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

---

Os desafios até agora cobriram a correspondência de letras do alfabeto e números. Você também pode combinar o espaço em branco ou espaços entre as letras.

Você pode pesquisar por espaços em branco usando \ s, que é um s minúsculo. Este padrão não corresponde apenas ao espaço em branco, mas também ao retorno de carro, tabulação, avanço de formulário e caracteres de nova linha. Você pode pensar nisso como semelhante à classe de caracteres [\ r \ t \ f \ n \ v].

`let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);`

Esta chamada de correspondência retornaria ["", ""].

Altere o regex countWhiteSpace para procurar vários caracteres de espaço em branco em uma string.