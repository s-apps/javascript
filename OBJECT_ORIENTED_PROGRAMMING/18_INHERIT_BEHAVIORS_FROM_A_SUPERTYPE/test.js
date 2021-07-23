function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    return "nom nom nom";
  }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype);

console.log(duck.eat());
console.log(beagle.eat());