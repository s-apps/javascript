# Match numbers and letters of the alphabet

Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set.

`let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);`

Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

---

O uso do hífen (-) para corresponder a um intervalo de caracteres não se limita a letras. Também funciona para corresponder a um intervalo de números.

Por exemplo, / [0-5] / corresponde a qualquer número entre 0 e 5, incluindo 0 e 5.

Além disso, é possível combinar uma série de letras e números em um único conjunto de caracteres.

`let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);`

Crie uma única regex que corresponda a um intervalo de letras entre he s e a um intervalo de números entre 2 e 6. Lembre-se de incluir os sinalizadores apropriados na regex.