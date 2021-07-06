# Use export to share a code block

Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

`export const add = (x, y) => {
  return x + y;
}`

The above is a common way to export a single function, but you can achieve the same thing like this:

`const add = (x, y) => {
  return x + y;
}

export { add };`

When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:

`export { add, subtract };`

There are two string-related functions in the editor. Export both of them using the method of your choice.

---

Imagine um arquivo chamado math_functions.js que contém várias funções relacionadas a operações matemáticas. Um deles é armazenado em uma variável, add, que pega em dois números e retorna sua soma. Você deseja usar esta função em vários arquivos JavaScript diferentes. Para compartilhá-lo com esses outros arquivos, primeiro você precisa exportá-lo.

`export const add = (x, y) => {
   return x + y;
} `

A descrição acima é uma maneira comum de exportar uma única função, mas você pode conseguir o mesmo desta forma:

`const add = (x, y) => {
   return x + y;
}

export {add}; `

Ao exportar uma variável ou função, você pode importá-la em outro arquivo e usá-la sem ter que reescrever o código. Você pode exportar várias coisas repetindo o primeiro exemplo para cada coisa que deseja exportar ou colocando-as todas na instrução de exportação do segundo exemplo, assim:

`export {add, subtract};`

Existem duas funções relacionadas a strings no editor. Exporte ambos usando o método de sua escolha.