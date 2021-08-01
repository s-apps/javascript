# Pass arguments to avoid external dependence in a function

The last challenge was a step closer to functional programming principles, but there is still something missing.

We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

---

O último desafio foi um passo mais perto dos princípios de programação funcional, mas ainda há algo faltando.

Não alteramos o valor da variável global, mas o incrementador de função não funcionaria sem a variável global fixedValue presente.

Outro princípio da programação funcional é sempre declarar suas dependências explicitamente. Isso significa que se uma função depende da presença de uma variável ou objeto, passe essa variável ou objeto diretamente para a função como um argumento.

Existem várias boas consequências desse princípio. A função é mais fácil de testar, você sabe exatamente qual entrada ela recebe e não vai depender de mais nada em seu programa.

Isso pode lhe dar mais confiança ao alterar, remover ou adicionar novo código. Você saberia o que pode ou não pode mudar e você pode ver onde estão as armadilhas potenciais.

Finalmente, a função sempre produziria a mesma saída para o mesmo conjunto de entradas, não importa que parte do código a execute.

Vamos atualizar a função do incrementador para declarar claramente suas dependências.

Escreva a função do incrementador de forma que receba um argumento e, a seguir, retorne um resultado após aumentar o valor em um. 
