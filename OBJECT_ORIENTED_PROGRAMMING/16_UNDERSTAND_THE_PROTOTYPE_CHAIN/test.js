function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);

console.log(Object.prototype.isPrototypeOf(Dog.prototype));