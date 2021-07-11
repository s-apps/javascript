# Specify exact number of matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

`let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);`

In order, the three test calls would return false, true, and false.

Change the regex timRegex to match the word Timber only when it has four letter m's.

---

Você pode especificar o número inferior e superior de padrões com especificadores de quantidade usando chaves. Às vezes, você deseja apenas um número específico de correspondências.

Para especificar um certo número de padrões, basta ter aquele número entre as chaves.

Por exemplo, para combinar apenas a palavra hah com a letra a 3 vezes, sua regex seria / ha {3} h /.

`let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);`

Em ordem, as três chamadas de teste retornariam falso, verdadeiro e falso.

Altere o regex timRegex para corresponder à palavra Madeira somente quando ela tiver quatro letras m. 

