
# Understanding the differences between the freeCodeCamp and browser console

You may have noticed that some freeCodeCamp JavaScript challenges include their own console. This console behaves a little differently than the browser console you used in the last challenge.

The following challenge is meant to highlight the main difference between the freeCodeCamp console and your browser console.

When you run ordinary JavaScript, the browser's console will display your console.log() statements the exact number of times it is called.

The freeCodeCamp console will print your console.log() statements a short time after the editor detects a change in the script, as well as during testing.

The freeCodeCamp console is cleared before the tests are run and, to avoid spam, only prints the logs during the first test (see the note below for exceptions).

If you would like to see every log for every test, run the tests, and open the browser console. If you prefer to use the browser console, and want it to mimic the freeCodeCamp console, place console.clear() before any other console calls, to clear the browser console.

Note: console.logs inside functions are printed to the freeCodeCamp console whenever those functions are called. This can help debugging functions that are called during testing.

First, use console.log to log the output variable. Then, use console.clear to clear the browser console.

---

Você deve ter notado que alguns desafios de JavaScript do freeCodeCamp incluem seu próprio console. Este console se comporta de maneira um pouco diferente do console do navegador que você usou no último desafio.

O desafio a seguir tem como objetivo destacar a principal diferença entre o console do freeCodeCamp e o console do seu navegador.

Quando você executa o JavaScript comum, o console do navegador exibe suas instruções console.log () o número exato de vezes que é chamado.

O console freeCodeCamp imprimirá suas instruções console.log () logo após o editor detectar uma alteração no script, bem como durante o teste.

O console freeCodeCamp é limpo antes de os testes serem executados e, para evitar spam, apenas imprime os logs durante o primeiro teste (veja a nota abaixo para exceções).

Se quiser ver todos os registros de todos os testes, execute os testes e abra o console do navegador. Se você preferir usar o console do navegador e quiser que ele imite o console do freeCodeCamp, coloque console.clear () antes de qualquer outra chamada de console para limpar o console do navegador.

Nota: console.logs dentro das funções são impressos no console freeCodeCamp sempre que essas funções são chamadas. Isso pode ajudar a depurar funções que são chamadas durante o teste.

Primeiro, use console.log para registrar a variável de saída. Em seguida, use console.clear para limpar o console do navegador. 
