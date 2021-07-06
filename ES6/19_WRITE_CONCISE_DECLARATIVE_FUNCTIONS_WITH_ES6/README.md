# Write concise declarative functions with ES6

When defining functions within objects in ES5, we have to use the keyword function as follows:

`const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};`

With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:

`const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};`

Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

---

Ao definir funções dentro de objetos no ES5, temos que usar a função de palavra-chave da seguinte maneira:

`const person = {
   name: "Taylor",
   sayHello: function () {
     return `Hello! Meu nome é $ {this.name} .`;
   }
}; `

Com o ES6, você pode remover a palavra-chave da função e dois pontos ao definir funções em objetos. Aqui está um exemplo dessa sintaxe:

`const person = {
   name: "Taylor",
   sayHello() {
     return `Hello! Meu nome é $ {this.name} .`;
   }
}; `

Refatore a função setGear dentro do objeto biccycle para usar a sintaxe abreviada descrita acima.