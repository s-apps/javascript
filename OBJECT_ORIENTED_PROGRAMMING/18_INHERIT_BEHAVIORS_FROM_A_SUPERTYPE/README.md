# Inherit behaviors from a supertype

In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:

`function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};`

This and the next challenge will cover how to reuse the methods of Animal inside Bird and Dog without defining them again. It uses a technique called inheritance. This challenge covers the first step: make an instance of the supertype (or parent). You already know one way to create an instance of Animal using the new operator:

`let animal = new Animal();`

There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

`let animal = Object.create(Animal.prototype);`

Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.

`animal.eat();
animal instanceof Animal;`

The instanceof method here would return true.

Use Object.create to make two instances of Animal named duck and beagle.

---

No desafio anterior, você criou um supertipo chamado Animal que definiu comportamentos compartilhados por todos os animais:

`function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};`

Este e o próximo desafio cobrirão como reutilizar os métodos de Animal dentro de Bird e Dog sem defini-los novamente. Ele usa uma técnica chamada herança. Este desafio cobre a primeira etapa: criar uma instância do supertipo (ou pai). Você já conhece uma maneira de criar uma instância de Animal usando o novo operador:

`let animal = new Animal();`

Existem algumas desvantagens ao usar essa sintaxe para herança, que são muito complexas para o escopo deste desafio. Em vez disso, aqui está uma abordagem alternativa sem essas desvantagens:

`let animal = Object.create(Animal.prototype);`

Object.create (obj) cria um novo objeto e define obj como o protótipo do novo objeto. Lembre-se de que o protótipo é como a "receita" para a criação de um objeto. Ao definir o protótipo do animal para ser o protótipo do Animal, você está efetivamente dando à instância do animal a mesma "receita" que qualquer outra instância do Animal.

`animal.eat();
animal instanceof Animal;`

O método instanceof aqui retornaria true.

Use Object.create para criar duas ocorrências de Animal denominadas duck e beagle. 