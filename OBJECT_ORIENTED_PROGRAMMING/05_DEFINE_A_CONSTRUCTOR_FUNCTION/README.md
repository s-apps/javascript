# Define a constructor function

Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

`function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}`

This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively. Constructors follow a few conventions:

    Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
    Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
    Constructors define properties and behaviors instead of returning a value as other functions might.

Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

---

Construtores são funções que criam novos objetos. Eles definem propriedades e comportamentos que pertencerão ao novo objeto. Pense neles como um projeto para a criação de novos objetos.

Aqui está um exemplo de um construtor:

`function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}`

Este construtor define um objeto Bird com as propriedades name, color e numLegs definidas como Albert, blue e 2, respectivamente. Os construtores seguem algumas convenções:

     Construtores são definidos com um nome em maiúscula para distingui-los de outras funções que não são construtores.
     Os construtores usam a palavra-chave this para definir as propriedades do objeto que criarão. Dentro do construtor, isso se refere ao novo objeto que criará.
     Os construtores definem propriedades e comportamentos em vez de retornar um valor como outras funções podem fazer.

Crie um construtor, Dog, com as propriedades nome, cor e numLegs que são definidos como uma string, uma string e um número, respectivamente 

