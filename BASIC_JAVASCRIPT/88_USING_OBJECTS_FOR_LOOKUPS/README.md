# Using objects for lookups

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

`var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2];
alpha[24];

var value = 2;
alpha[value];`

alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable

---

Os objetos podem ser considerados um armazenamento de chave / valor, como um dicionário. Se você tiver dados tabulares, poderá usar um objeto para pesquisar valores em vez de uma instrução switch ou uma cadeia if / else. Isso é mais útil quando você sabe que seus dados de entrada estão limitados a um determinado intervalo.

Aqui está um exemplo de uma pesquisa de alfabeto reverso simples:

`var alpha = {
   1: "Z",
   2: "Y",
   3: "X",
   4: "W",
   ...
   24: "C",
   25: "B",
   26: "A"
};
alfa [2];
alfa [24];

valor var = 2;
alfa [valor]; `

alpha [2] é a string Y, alpha [24] é a string C e alfa [valor] é a string Y.

Converta a instrução switch em um objeto chamado lookup. Use-o para procurar val e atribuir a string associada à variável de resultado