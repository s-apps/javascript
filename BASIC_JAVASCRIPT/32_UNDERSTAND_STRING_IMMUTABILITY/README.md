# Understand string immutability

In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

`var myStr = "Bob";`
`myStr[0] = "J";`

cannot change the value of myStr to Job, because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:

`var myStr = "Bob";`
`myStr = "Job";`

Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

---

Em JavaScript, os valores de String são imutáveis, o que significa que não podem ser alterados depois de criados.

Por exemplo, o seguinte código:

`var myStr = "Bob";`
`myStr[0] = "J";`

não pode alterar o valor de myStr para Job, porque o conteúdo de myStr não pode ser alterado. Observe que isso não significa que myStr não possa ser alterado, apenas que os caracteres individuais de um literal de string não podem ser alterados. A única maneira de alterar myStr seria atribuí-lo com uma nova string, como esta:

`var myStr = "Bob";`
`myStr = "Trabalho";`

Corrija a atribuição de myStr para que contenha o valor da string de Hello World usando a abordagem mostrada no exemplo acima.