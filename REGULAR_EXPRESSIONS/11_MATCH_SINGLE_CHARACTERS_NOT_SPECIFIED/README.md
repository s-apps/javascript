# Match single characters not specified

So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

---

Até agora, você criou um conjunto de caracteres que deseja combinar, mas também pode criar um conjunto de caracteres que não deseja combinar. Esses tipos de conjuntos de caracteres são chamados de conjuntos de caracteres negados.

Para criar um conjunto de caracteres negado, coloque um caractere circunflexo (^) após o colchete de abertura e antes dos caracteres que não deseja corresponder.

Por exemplo, /[^ aeiou]/gi corresponde a todos os caracteres que não são vogais. Observe que caracteres como.,!, [, @, / E espaço em branco são combinados - o conjunto de caracteres de vogal negado exclui apenas os caracteres de vogal.

Crie uma única regex que corresponda a todos os caracteres que não sejam um número ou vogal. Lembre-se de incluir os sinalizadores apropriados na regex.