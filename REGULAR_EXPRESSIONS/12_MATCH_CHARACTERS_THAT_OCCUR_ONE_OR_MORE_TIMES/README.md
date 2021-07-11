# Match characters that occur one or more times

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

---

Às vezes, você precisa combinar um caractere (ou grupo de caracteres) que aparece uma ou mais vezes consecutivas. Isso significa que ocorre pelo menos uma vez e pode ser repetido.

Você pode usar o caractere + para verificar se é esse o caso. Lembre-se de que o caractere ou padrão deve estar presente consecutivamente. Ou seja, o personagem deve repetir um após o outro.

Por exemplo, / a + / g encontraria uma correspondência em abc e retornaria ["a"]. Por causa do +, ele também encontraria uma única correspondência em aabc e retornaria ["aa"].

Se, em vez disso, estivesse verificando a string abab, encontraria duas correspondências e retornaria ["a", "a"] porque os caracteres a não estão em uma linha - há um b entre eles. Finalmente, como não há a na string bcd, ele não encontraria uma correspondência.

Você deseja encontrar correspondências quando a letra s ocorre uma ou mais vezes no Mississippi. Escreva uma regex que use o sinal +.