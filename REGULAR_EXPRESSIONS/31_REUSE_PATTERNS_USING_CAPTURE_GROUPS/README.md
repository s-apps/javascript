# Reuse patterns using capture groups

Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

The example below matches any word that occurs twice separated by a space:

`let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);`

The test call would return true, and the match call would return ["regex regex", "regex"].

Using the .match() method on a string will return an array with the string it matches, along with its capture group.

Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

---

Alguns padrões que você procura ocorrerão várias vezes em uma string. É um desperdício repetir manualmente essa regex. Há uma maneira melhor de especificar quando você tem várias substrings repetidas em sua string.

Você pode pesquisar substrings repetidos usando grupos de captura. Parênteses, (e), são usados ​​para localizar substrings repetidas. Você coloca a regex do padrão que se repetirá entre os parênteses.

Para especificar onde essa seqüência de repetição aparecerá, use uma barra invertida (\) e, em seguida, um número. Este número começa em 1 e aumenta com cada grupo de captura adicional que você usa. Um exemplo seria \ 1 para corresponder ao primeiro grupo.

O exemplo abaixo corresponde a qualquer palavra que ocorra duas vezes separada por um espaço:

`let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);`

A chamada de teste retornaria verdadeiro e a chamada de correspondência retornaria ["regex regex", "regex"].

Usar o método .match () em uma string retornará uma matriz com a string que corresponde, junto com seu grupo de captura.

Use grupos de captura em reRegex para corresponder a uma string que consiste apenas no mesmo número repetido exatamente três vezes separado por espaços simples. 
