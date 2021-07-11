# Match letters of the alphabet

You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].

`let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);`

In order, the three match calls would return the values ["cat"], ["bat"], and null.

Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.

---

Você viu como pode usar conjuntos de caracteres para especificar um grupo de caracteres a serem correspondidos, mas isso é muita digitação quando você precisa combinar uma grande variedade de caracteres (por exemplo, cada letra do alfabeto). Felizmente, há um recurso integrado que torna isso curto e simples.

Dentro de um conjunto de caracteres, você pode definir um intervalo de caracteres para combinar usando um caractere de hífen: -.

Por exemplo, para combinar letras minúsculas de a a e, você usaria [a-e].

`let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);`

Em ordem, as três chamadas de correspondência retornariam os valores ["cat"], ["bat"] e null.

Combine todas as letras na string quoteSample.

Nota: certifique-se de combinar letras maiúsculas e minúsculas.