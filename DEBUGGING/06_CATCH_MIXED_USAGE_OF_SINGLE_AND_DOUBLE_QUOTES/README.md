# Catch mixed usage of single and double quotes

JavaScript allows the use of both single (') and double (") quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.

Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.

Here are some examples of mixing quotes:

`const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';`

The first two are correct, but the third is incorrect.

Of course, it is okay to use only one style of quotes. You can escape the quotes inside the string by using the backslash (\) escape character:

`const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';`

Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.

---

JavaScript permite o uso de aspas simples (') e duplas (") para declarar uma string. A decisão de qual usar geralmente se resume à preferência pessoal, com algumas exceções.

Ter duas opções é ótimo quando uma string tem contrações ou outro pedaço de texto que está entre aspas. Apenas tome cuidado para não fechar a string muito cedo, o que causa um erro de sintaxe.

Aqui estão alguns exemplos de combinação de citações:

`const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';`


Os dois primeiros estão corretos, mas o terceiro está incorreto.

Obviamente, não há problema em usar apenas um estilo de citações. Você pode escapar as aspas dentro da string usando o caractere de escape de barra invertida (\):

`const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';`

Corrija a string para que use aspas diferentes para o valor href ou escape das existentes. Mantenha as aspas duplas ao redor de toda a string.
