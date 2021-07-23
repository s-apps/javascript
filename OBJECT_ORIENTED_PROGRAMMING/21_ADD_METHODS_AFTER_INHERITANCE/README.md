# Add methods after inheritance

A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, Bird is a constructor that inherits its prototype from Animal:

`function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;`

In addition to what is inherited from Animal, you want to add behavior that is unique to Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the same way as any constructor function:

`Bird.prototype.fly = function() {
  console.log("I'm flying!");
};`

Now instances of Bird will have both eat() and fly() methods:

`let duck = new Bird();
duck.eat();
duck.fly();`

duck.eat() would display the string nom nom nom in the console, and duck.fly() would display the string I'm flying!.

Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console.

---

Uma função construtora que herda seu objeto de protótipo de uma função construtora de supertipo ainda pode ter seus próprios métodos, além dos métodos herdados.

Por exemplo, Bird é um construtor que herda seu protótipo do Animal:

`function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;`

Além do que é herdado de Animal, você deseja adicionar um comportamento exclusivo aos objetos Bird. Aqui, Bird obterá uma função fly (). As funções são adicionadas ao protótipo de Bird da mesma forma que qualquer função de construtor:

`Bird.prototype.fly = function() {
  console.log("I'm flying!");
};`

Agora, as instâncias de Bird terão os métodos eat () e fly ():

`let duck = new Bird();
duck.eat();
duck.fly();`

duck.eat () exibiria a string nom nom nom no console, e duck.fly () exibiria a string estou voando !.

Adicione todo o código necessário para que o objeto Dog herde de Animal e o construtor do protótipo do Dog seja definido como Dog. Em seguida, adicione um método bark () ao objeto Dog para que o beagle possa comer () e latir (). O método bark () deve imprimir Woof! para o console. 
