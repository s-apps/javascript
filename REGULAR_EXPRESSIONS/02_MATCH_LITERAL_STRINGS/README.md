# Match literal string

In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:

`let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);`

This test call will return true.

Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.

`let wrongRegex = /kevin/;
wrongRegex.test(testStr);`

This test call will return false.

A future challenge will show how to match those other forms as well.

Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

---

No último desafio, você procurou a palavra Hello usando a expressão regular / Hello /. Essa regex procurou uma correspondência literal da string Hello. Aqui está outro exemplo de pesquisa por uma correspondência literal da string Kevin:

`let testStr =" Olá, meu nome é Kevin. ";
let testRegex = / Kevin /;
testRegex.test (testStr); `

Esta chamada de teste retornará verdadeiro.

Quaisquer outras formas de Kevin não serão iguais. Por exemplo, o regex / Kevin / não corresponderá a Kevin ou KEVIN.

`let erradoRegex = / kevin /;
wrongRegex.test (testStr); `

Esta chamada de teste retornará falso.

Um desafio futuro mostrará como combinar essas outras formas também.

Complete o regex waldoRegex para encontrar "Waldo" na string waldoIsHiding com uma correspondência literal.