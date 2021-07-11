# Match beginning string patterns

Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

`let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);`

The first test call would return true, while the second would return false.

Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.

---

Desafios anteriores mostraram que as expressões regulares podem ser usadas para procurar uma série de correspondências. Eles também são usados para pesquisar padrões em posições específicas em strings.

Em um desafio anterior, você usou o caractere circunflexo (^) dentro de um conjunto de caracteres para criar um conjunto de caracteres negado na forma [^ thingsThatWillNotBeMatched]. Fora de um conjunto de caracteres, o circunflexo é usado para pesquisar padrões no início das strings.

`let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);`

A primeira chamada de teste retornaria verdadeiro, enquanto a segunda retornaria falso.

Use o caractere circunflexo em uma regex para localizar Cal apenas no início da string rickyAndCal. 