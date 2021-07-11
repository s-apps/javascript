# Match all letters and numbers

Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

`let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);`

All four of these test calls would return true.

These shortcut character classes are also known as shorthand character classes.

Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

---

Usando classes de caracteres, você foi capaz de pesquisar todas as letras do alfabeto com [a-z]. Esse tipo de classe de caractere é comum o suficiente para que haja um atalho para ela, embora inclua alguns caracteres extras também.

A classe de caractere mais próxima em JavaScript para corresponder ao alfabeto é \w. Este atalho é igual a [A-Za-z0-9_]. Esta classe de caracteres combina letras maiúsculas e minúsculas mais números. Observe que essa classe de caractere também inclui o caractere de sublinhado (_).

`let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);`

Todas essas quatro chamadas de teste retornariam verdadeiras.

Essas classes de caracteres de atalho também são conhecidas como classes de caracteres de atalho.

Use a classe de caracteres abreviados \w para contar o número de caracteres alfanuméricos em várias aspas e strings. 