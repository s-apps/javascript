# Use class syntax to define a contructor function

ES6 provides a new syntax to create objects, using the class keyword.

It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

`var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');`

The class syntax simply replaces the constructor function creation:

`class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');`

It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

---

ES6 fornece uma nova sintaxe para criar objetos, usando a palavra-chave class.

Deve-se notar que a sintaxe da classe é apenas sintaxe, e não uma implementação completa baseada em classe de um paradigma orientado a objetos, ao contrário de linguagens como Java, Python, Ruby, etc.

No ES5, geralmente definimos uma função construtora e usamos a nova palavra-chave para instanciar um objeto.

`var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle ('Júpiter'); `

A sintaxe da classe simplesmente substitui a criação da função do construtor:

`class SpaceShuttle {
  construtor (targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle ('Júpiter'); `

Deve-se notar que a palavra-chave class declara uma nova função, à qual um construtor é adicionado. Este construtor é chamado quando new é chamado para criar um novo objeto.

Nota: UpperCamelCase deve ser usado por convenção para nomes de classe ES6, como no SpaceShuttle usado acima.

O método construtor é um método especial para criar e inicializar um objeto criado com uma classe. Você aprenderá mais sobre isso na seção Programação Orientada a Objetos da Certificação de Algoritmos e Estruturas de Dados JavaScript.

Use a palavra-chave class e escreva um construtor para criar a classe Vegetable.

A classe Vegetable permite criar um objeto vegetal com um nome de propriedade que é passado para o construtor.