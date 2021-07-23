# Understand where an object's prototype comes from

Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

`function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");`

duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

`Bird.prototype.isPrototypeOf(duck);`

This would return true.

Use isPrototypeOf to check the prototype of beagle.

---

Assim como as pessoas herdam genes de seus pais, um objeto herda seu protótipo diretamente da função construtora que o criou. Por exemplo, aqui o construtor Bird cria o objeto pato:

`function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");`

duck herda seu protótipo da função construtora Bird. Você pode mostrar essa relação com o método isPrototypeOf:

`Bird.prototype.isPrototypeOf(duck);`

Isso retornaria verdadeiro.

Use isPrototypeOf para verificar o protótipo do beagle. 
