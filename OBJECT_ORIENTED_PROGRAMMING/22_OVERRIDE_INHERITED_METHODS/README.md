# Override inherited methods

In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

`ChildObject.prototype = Object.create(ParentObject.prototype);`

Then the ChildObject received its own methods by chaining them onto its prototype:

`ChildObject.prototype.methodName = function() {...};`

It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. Here's an example of Bird overriding the eat() method inherited from Animal:

`function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};`

If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

    duck => Is eat() defined here? No.
    Bird => Is eat() defined here? => Yes. Execute it and stop searching.
    Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
    Object => JavaScript stopped searching before reaching this level.

Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

---

Nas lições anteriores, você aprendeu que um objeto pode herdar seu comportamento (métodos) de outro objeto referenciando seu objeto protótipo:

`ChildObject.prototype = Object.create (ParentObject.prototype);`

Em seguida, o ChildObject recebeu seus próprios métodos, encadeando-os em seu protótipo:

`ChildObject.prototype.methodName = function () {...};`

É possível substituir um método herdado. É feito da mesma maneira - adicionando um método a ChildObject.prototype usando o mesmo nome de método daquele a ser substituído. Aqui está um exemplo de Bird substituindo o método eat () herdado de Animal:

`function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};`

Se você tiver uma instância, deixe duck = new Bird (); e você chama duck.eat (), é assim que o JavaScript procura o método na cadeia de protótipo do pato:

    duck => O eat () está definido aqui? Não.
    Bird => O eat () está definido aqui? => Sim. Execute-o e pare de pesquisar.
    Animal => eat () também é definido, mas o JavaScript parou de pesquisar antes de atingir esse nível.
    Object => JavaScript parou de pesquisar antes de atingir este nível.

Substitua o método fly () para Penguin para que ele retorne a string. Infelizmente, este é um pássaro que não voa. 