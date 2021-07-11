# Match single character with multiple possibilities

You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

`let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);`

In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.

---

Você aprendeu como combinar padrões literais (/ literal /) e caractere curinga (/./). Esses são os extremos das expressões regulares, onde uma encontra correspondências exatas e a outra combina com tudo. Existem opções que são um equilíbrio entre os dois extremos.

Você pode pesquisar um padrão literal com alguma flexibilidade com classes de caracteres. As classes de caracteres permitem definir um grupo de caracteres que você deseja combinar, colocando-os entre colchetes ([e]).

Por exemplo, você deseja combinar bag, big e bug, mas não bog. Você pode criar o regex / b [aiu] g / para fazer isso. O [aiu] é a classe de caracteres que corresponderá apenas aos caracteres a, i ou u.

`let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);`

Em ordem, as quatro chamadas de correspondência retornariam os valores ["big"], ["bag"], ["bug"] e nulo.

Use uma classe de caracteres com vogais (a, e, i, o, u) em seu regex vowelRegex para encontrar todas as vogais na string quoteSample.

Nota: certifique-se de combinar as vogais maiúsculas e minúsculas.