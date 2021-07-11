# Use capture groups to search and replace

Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

`let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");`

The replace call would return the string The sky is blue..

You can also access capture groups in the replacement string with dollar signs ($).

`"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');`

The replace call would return the string Camp Code.

Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

---

Pesquisar é útil. No entanto, você pode tornar a pesquisa ainda mais poderosa quando ela também altera (ou substitui) o texto que você encontrou.

Você pode pesquisar e substituir texto em uma string usando .replace () em uma string. As entradas para .replace () são primeiro o padrão regex que você deseja pesquisar. O segundo parâmetro é a string para substituir a correspondência ou uma função para fazer algo.

`let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");`

A chamada de substituição retornaria a string O céu é azul ..

Você também pode acessar grupos de captura na string de substituição com cifrões ($).

`"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');`

A chamada de substituição retornaria a string Camp Code.

Escreva um fixRegex regex usando três grupos de captura que procurarão cada palavra na string um, dois, três. Em seguida, atualize a variável replaceText para substituir um dois três pela string três dois um e atribua o resultado à variável de resultado. Certifique-se de utilizar grupos de captura na string de substituição usando a sintaxe do cifrão ($).
