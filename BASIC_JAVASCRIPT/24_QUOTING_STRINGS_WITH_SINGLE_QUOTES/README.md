# Quoting strings with single quotes

String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

`doubleQuoteStr = "This is a string"; `
`singleQuoteStr = 'This is also a string';`

The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.

`conversation = 'Finn exclaims to Jake, "Algebraic!"';`

However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

`goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; `
`badStr = 'Finn responds, "Let's go!"';`

Here badStr will throw an error.

In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.

Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the `<a>` tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.

---

Os valores de string em JavaScript podem ser escritos com aspas simples ou duplas, contanto que você comece e termine com o mesmo tipo de aspas. Ao contrário de algumas outras linguagens de programação, as aspas simples e duplas funcionam da mesma forma em JavaScript.

`doubleQuoteStr = "Esta é uma string";`
`singleQuoteStr = 'Esta também é uma string';`

O motivo pelo qual você pode querer usar um tipo de citação em vez de outro é se você deseja usar ambos em uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e colocá-la entre aspas. Outro uso para isso seria salvar uma tag <a> com vários atributos entre aspas, tudo dentro de uma string.

`conversacao = 'Finn exclama para Jake, "Algébrico!"';`

No entanto, isso se torna um problema se você precisar usar as aspas externas dentro dele. Lembre-se de que uma string tem o mesmo tipo de aspas no início e no final. Mas se você tiver a mesma citação em algum lugar no meio, a string irá parar mais cedo e exibir um erro.

`goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';`
`badStr = 'Finn responds, "Let's go!"';`

Aqui, badStr gerará um erro.

No goodStr acima, você pode usar as duas aspas com segurança usando a barra invertida \ como um caractere de escape.

Nota: A barra invertida \ não deve ser confundida com a barra /. Eles não fazem a mesma coisa.

Altere a string fornecida para uma string com aspas simples no início e no final e sem caracteres de escape.

No momento, a tag `<a>` na string usa aspas duplas em todos os lugares. Você precisará alterar as aspas externas para aspas simples para poder remover os caracteres de escape.