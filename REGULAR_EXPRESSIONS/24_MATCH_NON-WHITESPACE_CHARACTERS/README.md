# Match non-whitespace characters

You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

`let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;`

The value returned by the .length method would be 32.

Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.

---

Você aprendeu a pesquisar espaços em branco usando \ s, com s minúsculo. Você também pode pesquisar tudo, exceto espaços em branco.

Pesquise por espaços não em branco usando \ S, que é um s maiúsculo. Este padrão não corresponderá a espaços em branco, retorno de carro, tabulação, avanço de formulário e caracteres de nova linha. Você pode pensar que é semelhante à classe de caracteres [^ \ r \ t \ f \ n \ v].

`let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;`

O valor retornado pelo método .length seria 32.

Altere a regex countNonWhiteSpace para procurar vários caracteres que não sejam de espaço em branco em uma string.