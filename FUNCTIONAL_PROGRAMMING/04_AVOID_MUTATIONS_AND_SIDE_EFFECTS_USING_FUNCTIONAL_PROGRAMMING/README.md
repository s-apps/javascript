# Avoid mutations and side effects using functional programming

If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function. Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.

Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

---

Se você ainda não descobriu, o problema no desafio anterior era com a chamada de emenda na função tabClose (). Infelizmente, o splice altera o array original em que é chamado, portanto, a segunda chamada para ele usou um array modificado e deu resultados inesperados.

Este é um pequeno exemplo de um padrão muito maior - você chama uma função em uma variável, array ou objeto, e a função altera a variável ou algo no objeto.

Um dos princípios básicos da programação funcional é não mudar as coisas. Mudanças levam a bugs. É mais fácil evitar bugs sabendo que suas funções não mudam nada, incluindo os argumentos da função ou qualquer variável global.

O exemplo anterior não teve nenhuma operação complicada, mas o método de emenda mudou o array original e resultou em um bug.

Lembre-se de que, na programação funcional, mudar ou alterar coisas é chamado de mutação e o resultado é chamado de efeito colateral. Uma função, idealmente, deve ser uma função pura, o que significa que ela não causa efeitos colaterais.

Vamos tentar dominar essa disciplina e não alterar nenhuma variável ou objeto em nosso código.

Preencha o código para o incrementador de função para que ele retorne o valor da variável global fixedValue acrescido de um. 