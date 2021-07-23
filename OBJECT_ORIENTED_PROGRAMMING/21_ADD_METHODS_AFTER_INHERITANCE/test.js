function Animal() { }
Animal.prototype.eat = function() { return "nom nom nom"; };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() { return "Woof!"; };

let beagle = new Dog();

console.log(beagle.bark());