# Match everything but letters and numbers

You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

`let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);`

The first match call would return the value ["%"] and the second would return ["!"].

Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

---

Você aprendeu que pode usar um atalho para combinar os alfanuméricos [A-Za-z0-9_] usando \ w. Um padrão natural que você pode querer pesquisar é o oposto dos alfanuméricos.

Você pode pesquisar o oposto de \ w com \ W. Observe que o padrão oposto usa uma letra maiúscula. Este atalho é igual a [^ A-Za-z0-9_].

`let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);`

A primeira chamada de correspondência retornaria o valor ["%"] e a segunda retornaria ["!"].

Use a classe de caracteres abreviados \W para contar o número de caracteres não alfanuméricos em várias aspas e strings. 