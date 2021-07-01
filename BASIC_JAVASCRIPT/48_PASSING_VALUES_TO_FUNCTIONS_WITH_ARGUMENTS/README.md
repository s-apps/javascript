# Passing values to functions with arguments

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

`function testFun(param1, param2) {
  console.log(param1, param2);
}`

Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.

---

Parâmetros são variáveis que agem como marcadores para os valores que devem ser inseridos em uma função quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros. Os valores reais que são inseridos (ou "passados") em uma função quando ela é chamada são conhecidos como argumentos.

Aqui está uma função com dois parâmetros, param1 e param2:

`function testFun(param1, param2) {
   console.log(param1, param2);
}`

Então podemos chamar testFun assim: testFun ("Hello", "World") ;. Passamos dois argumentos de string, Hello e World. Dentro da função, param1 será igual à string Hello e param2 será igual à string World. Observe que você poderia chamar testFun novamente com argumentos diferentes e os parâmetros assumiriam o valor dos novos argumentos.

Crie uma função chamada functionWithArgs que aceita dois argumentos e envia sua soma para o console dev.
Chame a função com dois números como argumentos.
