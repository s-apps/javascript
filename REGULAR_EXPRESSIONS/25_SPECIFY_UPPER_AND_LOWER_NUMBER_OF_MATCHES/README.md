# Specify upper and lower number of matches

Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

`let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);`

The first test call would return true, while the second would return false.

Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

---

Lembre-se de que você usa o sinal de mais + para procurar um ou mais caracteres e o asterisco * para procurar zero ou mais caracteres. Eles são convenientes, mas às vezes você deseja corresponder a uma determinada gama de padrões.

Você pode especificar o número inferior e superior de padrões com especificadores de quantidade. Os especificadores de quantidade são usados com chaves ({e}). Você coloca dois números entre as chaves - para o número inferior e superior de padrões.

Por exemplo, para corresponder apenas à letra a que aparece entre 3 e 5 vezes na string ah, sua regex seria / a {3,5} h /.

`let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);`

A primeira chamada de teste retornaria verdadeiro, enquanto a segunda retornaria falso.

Altere o regex ohRegex para coincidir com a frase inteira Oh não, apenas quando tiver 3 a 6 letras h.