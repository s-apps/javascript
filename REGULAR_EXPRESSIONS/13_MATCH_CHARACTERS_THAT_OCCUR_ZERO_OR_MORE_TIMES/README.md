# Match characters that occur zero or more times

The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.

`let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);`

In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

---

O último desafio usou o sinal de mais + para procurar caracteres que ocorrem uma ou mais vezes. Também existe uma opção que combina caracteres que ocorrem zero ou mais vezes.

O caractere para fazer isso é o asterisco ou estrela: *.

`let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);`

Em ordem, as três chamadas de correspondência retornariam os valores ["goooooooo"], ["g"] e nulo.

Para este desafio, chewieQuote foi inicializado como a string Aaaaaaaaaaaaaaaarrrgh! Por trás das cenas. Crie uma regex chewieRegex que use o caractere * para corresponder a um caractere A maiúsculo imediatamente seguido por zero ou mais caracteres a minúsculos em chewieQuote. Sua regex não precisa de sinalizadores ou classes de caracteres e não deve corresponder a nenhuma das outras aspas.