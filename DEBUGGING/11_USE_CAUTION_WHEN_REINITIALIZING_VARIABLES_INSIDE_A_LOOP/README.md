# Use caution when reinitializing variables inside a loop

Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable.

The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].

---

Às vezes, é necessário salvar informações, incrementar contadores ou reconfigurar variáveis em um loop. Um problema potencial é quando as variáveis devem ser reinicializadas e não são, ou vice-versa. Isso é particularmente perigoso se você redefinir acidentalmente a variável que está sendo usada para a condição do terminal, causando um loop infinito.

Imprimir valores de variáveis com cada ciclo de seu loop usando console.log () pode descobrir um comportamento problemático relacionado à redefinição ou falha ao redefinir uma variável.

A função a seguir deve criar uma matriz bidimensional com m linhas e n colunas de zeros. Infelizmente, ele não está produzindo a saída esperada porque a variável de linha não está sendo reinicializada (definida de volta para uma matriz vazia) no loop externo. Corrija o código para que ele retorne uma matriz correta de zeros 3x2, que se parece com [[0, 0], [0, 0], [0, 0]].