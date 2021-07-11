# Find characters with lazy matching

In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

---

Em expressões regulares, uma correspondência gulosa encontra a parte mais longa possível de uma string que se encaixa no padrão regex e a retorna como uma correspondência. A alternativa é chamada de correspondência lenta, que encontra a menor parte possível da string que satisfaça o padrão regex.

Você pode aplicar o regex /t[a-z]*i/ à string "titanic". Esta regex é basicamente um padrão que começa com t, termina com i e tem algumas letras entre eles.

Expressões regulares são gananciosas por padrão, então a correspondência retornaria ["titani"]. Ele encontra a maior subcadeia possível para se ajustar ao padrão.

No entanto, você pode usar o? personagem para alterá-lo para correspondência preguiçosa. "titanic" em comparação com a regex ajustada de / t[a-z]*?i/ retorna ["ti"].

Nota: A análise de HTML com expressões regulares deve ser evitada, mas o padrão de correspondência de uma string HTML com expressões regulares é perfeitamente aceitável.

Corrija o regex /<.*>/ para retornar a tag HTML <h1> e não o texto "<h1> O inverno está chegando </h1>". Lembre-se do curinga. em uma expressão regular corresponde a qualquer caractere.
