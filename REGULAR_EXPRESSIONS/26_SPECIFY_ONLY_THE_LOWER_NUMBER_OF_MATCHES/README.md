# Specify only the lower number of matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

`let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);`

In order, the three test calls would return true, false, and true.

Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.

---

Você pode especificar o número inferior e superior de padrões com especificadores de quantidade usando chaves. Às vezes, você só deseja especificar o número inferior de padrões sem limite superior.

Para especificar apenas o número inferior de padrões, mantenha o primeiro número seguido por uma vírgula.

Por exemplo, para corresponder apenas a string hah com a letra a aparecendo pelo menos 3 vezes, sua regex seria / ha {3,} h /.

`let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);`

Em ordem, as três chamadas de teste retornariam verdadeiro, falso e verdadeiro.

Altere a regex haRegex para corresponder à palavra Hazzah apenas quando ela tiver quatro ou mais letras z. 