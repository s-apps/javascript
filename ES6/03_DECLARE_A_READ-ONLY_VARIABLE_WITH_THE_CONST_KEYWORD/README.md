# Declate a read-only variable with the const keyword

The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned.

`const FAV_PET = "Cats";
FAV_PET = "Dogs";`

The console will display an error due to reassigning the value of FAV_PET.

As you can see, trying to reassign a variable declared with const will throw an error. You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). In a later challenge you will see an example of a lowercase variable identifier being used for an array.

Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.

---

A palavra-chave let não é a única nova maneira de declarar variáveis. No ES6, você também pode declarar variáveis ​​usando a palavra-chave const.

const tem todos os recursos incríveis que permite, com o bônus adicional de que as variáveis ​​declaradas usando const são somente leitura. Eles são um valor constante, o que significa que uma vez que uma variável é atribuída com const, ela não pode ser reatribuída.

`const FAV_PET = "Gatos";
FAV_PET = "Cães";`

O console exibirá um erro devido à reatribuição do valor de FAV_PET.

Como você pode ver, tentar reatribuir uma variável declarada com const gerará um erro. Você deve sempre nomear variáveis ​​que não deseja reatribuir usando a palavra-chave const. Isso ajuda quando você tenta acidentalmente reatribuir uma variável que deve permanecer constante. Uma prática comum ao nomear constantes é usar todas as letras maiúsculas, com palavras separadas por um sublinhado.

Observação: é comum que os desenvolvedores usem identificadores de variáveis ​​em maiúsculas para valores imutáveis ​​e minúsculas ou camelCase para valores mutáveis ​​(objetos e matrizes). Em um desafio posterior, você verá um exemplo de um identificador de variável em minúsculas sendo usado para um array.

Altere o código para que todas as variáveis ​​sejam declaradas usando let ou const. Use let quando quiser que a variável mude e const quando quiser que a variável permaneça constante. Além disso, renomeie as variáveis ​​declaradas com const para ficar em conformidade com as práticas comuns, o que significa que as constantes devem estar em maiúsculas.