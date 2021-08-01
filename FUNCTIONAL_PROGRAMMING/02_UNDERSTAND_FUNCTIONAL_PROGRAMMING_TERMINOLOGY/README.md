# Understand functional programming terminology

The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood swings are pretty common.

With that information, we'll need to revisit the getTea function from last challenge to handle various tea requests. We can modify getTea to accept a function as a parameter to be able to change the type of tea it prepares. This makes getTea more flexible, and gives the programmer more control when client requests change.

But first, let's cover some functional terminology:

Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called higher order functions.

When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.

Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.

---

A equipe da FCC mudou de humor e agora quer dois tipos de chá: chá verde e chá preto. Fato Geral: As oscilações de humor do cliente são bastante comuns.

Com essas informações, precisaremos revisar a função getTea do último desafio para lidar com vários pedidos de chá. Podemos modificar getTea para aceitar uma função como parâmetro para poder mudar o tipo de chá que prepara. Isso torna getTea mais flexível e dá ao programador mais controle quando as solicitações do cliente são alteradas.

Mas, primeiro, vamos cobrir algumas terminologias funcionais:

Retornos de chamada são as funções que são transferidas ou passadas para outra função para decidir a invocação dessa função. Você pode tê-los visto passados ​​para outros métodos, por exemplo, em filtro, a função de retorno de chamada informa ao JavaScript os critérios de como filtrar um array.

Funções que podem ser atribuídas a uma variável, passadas para outra função ou retornadas de outra função como qualquer outro valor normal, são chamadas de funções de primeira classe. Em JavaScript, todas as funções são funções de primeira classe.

As funções que usam uma função como argumento ou retornam uma função como um valor de retorno são chamadas de funções de ordem superior.

Quando as funções são passadas ou retornadas de outra função, essas funções que foram passadas ou retornadas podem ser chamadas de lambda.

Prepare 27 xícaras de chá verde e 13 xícaras de chá preto e armazene-as nas variáveis ​​tea4GreenTeamFCC e tea4BlackTeamFCC, respectivamente. Observe que a função getTea foi modificada, portanto, agora assume uma função como o primeiro argumento.

Nota: os dados (o número de xícaras de chá) são fornecidos como o último argumento. Discutiremos isso mais em lições posteriores. 
