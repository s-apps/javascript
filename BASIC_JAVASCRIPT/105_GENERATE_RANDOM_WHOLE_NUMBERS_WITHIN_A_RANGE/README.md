# Generate random whole numbers within a range

Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

`Math.floor(Math.random() * (max - min + 1)) + min`

Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

---

Em vez de gerar um número inteiro aleatório entre zero e um determinado número como fizemos antes, podemos gerar um número inteiro aleatório que se enquadre em um intervalo de dois números específicos.

Para fazer isso, vamos definir um número mínimo min e um número máximo max.

Aqui está a fórmula que usaremos. Reserve um momento para lê-lo e tente entender o que este código está fazendo:

`Math.floor (Math.random () * (max - min + 1)) + min`

Crie uma função chamada randomRange que pega um intervalo myMin e myMax e retorna um número inteiro aleatório que é maior ou igual a myMin e é menor ou igual a myMax, inclusive.