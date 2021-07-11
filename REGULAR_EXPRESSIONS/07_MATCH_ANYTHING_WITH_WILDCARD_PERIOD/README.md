# Match anything with wildcard period

Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

`let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);`

Both of these test calls would return true.

Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

---

Às vezes, você não conhece (ou não precisa) saber os caracteres exatos em seus padrões. Pensar em todas as palavras que correspondem, digamos, a um erro ortográfico demoraria muito. Felizmente, você pode economizar tempo usando o caractere curinga:.

O caractere curinga. corresponderá a qualquer um caractere. O curinga também é chamado de ponto e ponto. Você pode usar o caractere curinga como qualquer outro caractere na regex. Por exemplo, se você quiser combinar abraço, huh, hut e hum, pode usar o regex /hu./ para combinar todas as quatro palavras.

`let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);`

Ambas as chamadas de teste retornariam verdadeiras.

Complete o regex unRegex para que corresponda às strings run, sun, fun, pun, nun e bun. Seu regex deve usar o caractere curinga.