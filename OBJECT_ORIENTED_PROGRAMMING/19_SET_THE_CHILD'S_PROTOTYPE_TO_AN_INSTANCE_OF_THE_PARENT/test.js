function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    return "nom nom nom";
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

console.log(beagle.eat());