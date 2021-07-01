# Generate random whole numbers with JavaScript

It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.
Remember that Math.random() can never quite return a 1 and, because we're rounding down, it's impossible to actually get 20. This technique will give us a whole number between 0 and 19.

Putting everything together, this is what our code looks like:

`Math.floor(Math.random() * 20);`

We are calling Math.random(), multiplying the result by 20, then passing the value to Math.floor() function to round the value down to the nearest whole number.

Use this technique to generate and return a random whole number between 0 and 9.

---

É ótimo podermos gerar números decimais aleatórios, mas é ainda mais útil se o usarmos para gerar números inteiros aleatórios.

Use Math.random () para gerar um decimal aleatório.
Multiplique esse decimal aleatório por 20.
Use outra função, Math.floor () para arredondar o número para baixo para o número inteiro mais próximo.
Lembre-se de que Math.random () nunca pode retornar um 1 e, como estamos arredondando para baixo, é impossível obter 20. Essa técnica nos dará um número inteiro entre 0 e 19.

Juntando tudo, é assim que nosso código se parece:

`Math.floor (Math.random () * 20);`

Estamos chamando Math.random (), multiplicando o resultado por 20 e, em seguida, passando o valor para a função Math.floor () para arredondar o valor para o número inteiro mais próximo.

Use esta técnica para gerar e retornar um número inteiro aleatório entre 0 e 9.