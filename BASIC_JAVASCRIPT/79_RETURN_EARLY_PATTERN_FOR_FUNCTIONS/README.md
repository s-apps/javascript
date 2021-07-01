# Return early pattern for functions

When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

`function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();`

The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

Hint
Remember that undefined is a keyword, not a string.

---

Quando uma instrução de retorno é alcançada, a execução da função atual para e o controle retorna ao local de chamada.

Exemplo

`function myFun () {
   console.log ("Olá");
   return "Mundo";
   console.log ("byebye")
}
myFun (); `

O exemplo acima exibirá a string Hello no console e retornará a string World. A string byebye nunca será exibida no console, porque a função sai na instrução return.

Modifique a função abTest para que se a ou b forem menores que 0, a função sairá imediatamente com um valor indefinido.

Dica
Lembre-se de que undefined é uma palavra-chave, não uma string.