# Escaping literal quotes in strings

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

`var sampleStr = "Alan said, \"Peter is learning JavaScript\".";`

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

`Alan said, "Peter is learning JavaScript".`

Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

`I am a "double quoted" string inside "double quotes".`

---

Ao definir uma string, você deve começar e terminar com aspas simples ou duplas. O que acontece quando você precisa de uma citação literal: "ou 'dentro de sua string?

Em JavaScript, você pode escapar de uma citação ao considerá-la como uma citação de fim de string, colocando uma barra invertida (\) na frente da citação.

`var sampleStr = "Alan disse, \" Peter está aprendendo JavaScript \ ".";`

Isso sinaliza ao JavaScript que a seguinte citação não é o fim da string, mas deve aparecer dentro da string. Portanto, se você imprimir isso no console, obterá:

`Alan disse: "Peter está aprendendo JavaScript".`

Use barras invertidas para atribuir uma string à variável myStr para que se você fosse imprimi-la no console, você veria:

`Eu sou uma string de "aspas duplas" dentro de "aspas duplas".`