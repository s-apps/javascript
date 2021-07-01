# Understanding undefined value returned from a function

A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

`var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);`

addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

---

Uma função pode incluir a instrução de retorno, mas não é necessário. Caso a função não tenha um comando return, quando você a chama, a função processa o código interno, mas o valor retornado é undefined.

Exemplo

`var soma = 0;
function addSum(num) {
   soma = soma + num;
}
addSum(3); `

addSum é uma função sem uma instrução de retorno. A função mudará a variável de soma global, mas o valor retornado da função é indefinido.

Crie uma função addFive sem nenhum argumento. Esta função adiciona 5 à variável de soma, mas seu valor retornado é indefinido.