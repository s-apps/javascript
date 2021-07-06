# Mutate an array declared with const

The const declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

`const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);`

s = [1, 2, 3] will result in an error. The console.log will display the value [5, 6, 45].

As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

---

A declaração const tem muitos casos de uso em JavaScript moderno.

Alguns desenvolvedores preferem atribuir todas as suas variáveis ​​usando const por padrão, a menos que saibam que precisarão reatribuir o valor. Só nesse caso, eles usam let.

No entanto, é importante entender que os objetos (incluindo matrizes e funções) atribuídos a uma variável usando const ainda são mutáveis. Usar a declaração const apenas evita a reatribuição do identificador da variável.

`const s = [5, 6, 7];
s = [1,2,3];
s [2] = 45;
console.log (s); `

s = [1, 2, 3] resultará em um erro. O console.log exibirá o valor [5, 6, 45].

Como você pode ver, você pode transformar o próprio objeto [5, 6, 7] e a variável s ainda apontará para o array alterado [5, 6, 45]. Como todos os arrays, os elementos do array em s são mutáveis, mas como const foi usado, você não pode usar o identificador de variável s para apontar para um array diferente usando o operador de atribuição.

Uma matriz é declarada como const s = [5, 7, 2]. Altere a matriz para [2, 5, 7] usando várias atribuições de elemento.