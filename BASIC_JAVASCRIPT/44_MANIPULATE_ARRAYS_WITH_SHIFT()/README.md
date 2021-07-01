# Manipulate arrays with shift()

pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:

`var ourArray = ["Stimpson", "J", ["cat"]];`
`var removedFromOurArray = ourArray.shift();`

removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

Use the .shift() function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

---

pop() sempre remove o último elemento de uma matriz. E se você quiser remover o primeiro?

É aí que entra .shift(). Funciona exatamente como .pop(), exceto que remove o primeiro elemento em vez do último.

Exemplo:

`var ourArray = ["Stimpson","J", ["gato"]];`
`var removedFromOurArray = ourArray.shift();`

removedFromOurArray teria um valor da string Stimpson, e ourArray teria ["J", ["cat"]].

Use a função .shift () para remover o primeiro item de myArray, atribuindo o valor "deslocado" para removedFromMyArray.