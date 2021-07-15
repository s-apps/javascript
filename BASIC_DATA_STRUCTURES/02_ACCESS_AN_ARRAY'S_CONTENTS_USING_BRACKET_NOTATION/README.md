# Access an array's contents using bracket notation

The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.

When we define a simple array as seen below, there are 3 items in it:

`let ourArray = ["a", "b", "c"];`

In an array, each array item has an index. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as bracket notation. For example, if we want to retrieve the a from ourArray and assign it to a variable, we can do so with the following code:

`let ourVariable = ourArray[0];`

Now ourVariable has the value of a.

In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

`ourArray[1] = "not b anymore";`

Using bracket notation, we have now reset the item at index 1 from the string b, to not b anymore. Now ourArray is ["a", "not b anymore", "c"].

In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.

---

A característica fundamental de qualquer estrutura de dados é, obviamente, a capacidade não apenas de armazenar dados, mas também de recuperar esses dados sob comando. Então, agora que aprendemos como criar um array, vamos começar a pensar sobre como podemos acessar as informações desse array.

Quando definimos um array simples como visto abaixo, existem 3 itens nele:

`let ourArray = ["a", "b", "c"];`

Em uma matriz, cada item da matriz possui um índice. Este índice dobra como a posição daquele item na matriz e como você o referencia. No entanto, é importante observar que os arrays JavaScript são indexados por zero, o que significa que o primeiro elemento de um array está na verdade na posição zero, não o primeiro. Para recuperar um elemento de uma matriz, podemos colocar um índice entre colchetes e anexá-lo ao final de uma matriz ou, mais comumente, a uma variável que faz referência a um objeto de matriz. Isso é conhecido como notação de colchetes. Por exemplo, se quisermos recuperar o a de nossoArray e atribuí-lo a uma variável, podemos fazer isso com o seguinte código:

`let ourVariable = ourArray[0];`

Agora nossa variável tem o valor de a.

Além de acessar o valor associado a um índice, você também pode definir um índice para um valor usando a mesma notação:

`ourArray[1] = "not b anymore";`

Usando a notação de colchetes, agora redefinimos o item no índice 1 da string b, para não mais b. Agora nossoArray é ["a", "não mais b", "c"].

Para completar este desafio, defina a 2ª posição (índice 1) de myArray para qualquer coisa que você quiser, além da letra b. 
