# Catch arguments passed in the wrong order when calling a function

Continuing the discussion on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.

The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.

---

Continuando a discussão sobre a chamada de funções, o próximo bug a observar é quando os argumentos de uma função são fornecidos na ordem incorreta. Se os argumentos forem de tipos diferentes, como uma função que espera uma matriz e um inteiro, isso provavelmente gerará um erro de tempo de execução. Se os argumentos forem do mesmo tipo (todos inteiros, por exemplo), então a lógica do código não fará sentido. Certifique-se de fornecer todos os argumentos necessários, na ordem adequada para evitar esses problemas.

A função raiseToPower eleva uma base a um expoente. Infelizmente, ele não é chamado corretamente - corrija o código para que o valor da potência seja o 8 esperado. 