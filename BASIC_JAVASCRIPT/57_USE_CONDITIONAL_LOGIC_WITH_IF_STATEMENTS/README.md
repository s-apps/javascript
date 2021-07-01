# Use conditional logic with if statements

If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

`if (condition is true) {
  statement is executed
}`

Example

`function test(myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);
test(false);`

test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.

Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

---

As instruções If são usadas para tomar decisões no código. A palavra-chave if diz ao JavaScript para executar o código entre chaves sob certas condições, definidas entre parênteses. Essas condições são conhecidas como condições booleanas e podem ser apenas verdadeiras ou falsas.

Quando a condição é avaliada como verdadeira, o programa executa a instrução dentro das chaves. Quando a condição booleana for avaliada como falsa, a instrução entre chaves não será executada.

Pseudo-código

`if (condição é verdadeira) {
  declaração é executada
} `

Exemplo

`teste de função (minhaCondição) {
  if (myCondition) {
     return "Era verdade";
  }
  return "Era falso";
}
teste (verdadeiro);
teste (falso); `

test (true) retorna a string Era verdadeiro e test (false) retorna a string Era falso.

Quando test é chamado com um valor true, a instrução if avalia myCondition para ver se ela é verdadeira ou não. Como é verdade, a função retorna Era verdade. Quando chamamos test com um valor false, myCondition não é true e a instrução entre chaves não é executada e a função retorna It was false.

Crie uma instrução if dentro da função para retornar Sim, isso seria verdadeiro se o parâmetro wasThatTrue fosse verdadeiro e retornar Não, caso contrário, seria falso.