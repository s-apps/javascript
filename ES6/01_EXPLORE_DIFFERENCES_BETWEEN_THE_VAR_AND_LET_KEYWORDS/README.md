# Explore differences between the var and let keywords

One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.

`var camper = 'James';
var camper = 'David';
console.log(camper);`

Here the console will display the string David.

As you can see in the code above, the camper variable is originally declared as James and then overridden to be David. In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidentally overwrite a variable that you did not intend to overwrite. Because this behavior does not throw an error, searching and fixing bugs becomes more difficult.
A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. If you were to replace var with let in the variable declarations of the code above, the result would be an error.

`let camper = 'James';
let camper = 'David';`

This error can be seen in the console of your browser. So unlike var, when using let, a variable with the same name can only be declared once. Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

`"use strict";
x = 3.14;`

This will display an error that x is not defined.

Update the code so it only uses the let keyword.

---

Um dos maiores problemas com a declaração de variáveis ​​com a palavra-chave var é que você pode sobrescrever as declarações de variáveis ​​sem erro.

`var camper = 'James';
var camper = 'David';
console.log (camper); `

Aqui, o console exibirá a string David.

Como você pode ver no código acima, a variável camper é originalmente declarada como James e, em seguida, substituída como David. Em um aplicativo pequeno, você pode não ter esse tipo de problema, mas quando seu código ficar maior, você pode sobrescrever acidentalmente uma variável que não pretendia sobrescrever. Como esse comportamento não gera um erro, a pesquisa e a correção de bugs se tornam mais difíceis.
Uma nova palavra-chave chamada let foi introduzida no ES6 para resolver esse problema potencial com a palavra-chave var. Se você substituísse var por let nas declarações de variáveis ​​do código acima, o resultado seria um erro.

`let campista = 'James';
let campista = 'David'; `

Este erro pode ser visto no console do seu navegador. Portanto, ao contrário de var, ao usar let, uma variável com o mesmo nome só pode ser declarada uma vez. Observe o "usar estrito". Isso ativa o Modo estrito, que detecta erros comuns de codificação e ações "inseguras". Por exemplo:

`" use strict ";
x = 3,14; `

Isso exibirá um erro de que x não está definido.

Atualize o código para que ele use apenas a palavra-chave let.