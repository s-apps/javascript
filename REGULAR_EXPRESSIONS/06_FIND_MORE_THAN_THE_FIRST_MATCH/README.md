# Find more than the first match

So far, you have only been able to extract or search a pattern once.

`let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);`

Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the g flag.

`let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);`

And here match returns the value ["Repeat", "Repeat", "Repeat"]

Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi

---

Até agora, você só conseguiu extrair ou pesquisar um padrão uma vez.

`let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);`

Aqui, a correspondência retornaria ["Repeat"].

Para pesquisar ou extrair um padrão mais de uma vez, você pode usar o sinalizador g.

`let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);`

E aqui a correspondência retorna o valor ["Repeat", "Repeat", "Repeat"]

Usando o regex starRegex, encontre e extraia as duas palavras Twinkle da string twinkleStar.

Observação
Você pode ter vários sinalizadores em seu regex como /search/gi