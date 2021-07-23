# Understand the prototype chain

All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

`function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;`

Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

`Object.prototype.isPrototypeOf(Bird.prototype);`

How is this useful? You may recall the hasOwnProperty method from a previous challenge:

`let duck = new Bird("Donald");
duck.hasOwnProperty("name");`

The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

Modify the code to show the correct prototype chain.

---

Todos os objetos em JavaScript (com algumas exceções) têm um protótipo. Além disso, o próprio protótipo de um objeto é um objeto.

`function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;`

Como um protótipo é um objeto, um protótipo pode ter seu próprio protótipo! Nesse caso, o protótipo de Bird.prototype é Object.prototype:

`Object.prototype.isPrototypeOf(Bird.prototype);`

Como isso é útil? Você pode se lembrar do método hasOwnProperty de um desafio anterior:

`let duck = new Bird("Donald");
duck.hasOwnProperty("name");`

O método hasOwnProperty é definido em Object.prototype, que pode ser acessado por Bird.prototype, que pode então ser acessado por duck. Este é um exemplo da cadeia de protótipo. Nessa cadeia de protótipos, Bird é o supertipo de pato, enquanto pato é o subtipo. O objeto é um supertipo para pássaro e pato. Object é um supertipo para todos os objetos em JavaScript. Portanto, qualquer objeto pode usar o método hasOwnProperty.

Modifique o código para mostrar a cadeia de protótipo correta. 
