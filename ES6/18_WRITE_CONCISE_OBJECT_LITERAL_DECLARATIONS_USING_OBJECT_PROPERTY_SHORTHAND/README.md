# Write concise object literal declarations using object property shorthand

ES6 adds some nice support for easily defining object literals.

Consider the following code:

`const getMousePosition = (x, y) => ({
  x: x,
  y: y
});`

getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:

`const getMousePosition = (x, y) => ({ x, y });`

Use object property shorthand with object literals to create and return an object with name, age and gender properties.

---

ES6 adiciona um bom suporte para definir facilmente literais de objeto.

Considere o seguinte código:

`const getMousePosition = (x, y) => ({
   x: x,
   y: y
}); `

getMousePosition é uma função simples que retorna um objeto contendo duas propriedades. ES6 fornece o açúcar sintático para eliminar a redundância de ter que escrever x: x. Você pode simplesmente escrever x uma vez, e ele será convertido em tox: x (ou algo equivalente) sob o capô. Aqui está a mesma função acima reescrita para usar esta nova sintaxe:

`const getMousePosition = (x, y) => ({x, y});`

Use a abreviatura de propriedade de objeto com literais de objeto para criar e retornar um objeto com propriedades de nome, idade e gênero.