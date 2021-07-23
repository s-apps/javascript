function Dog(name) {
  this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    eat: () => 'come come come',
    describe: () => `Meu nome é ${this.name}`
};

let dalmata = new Dog('Dalmata');
console.log(dalmata);
console.log(dalmata.eat());
console.log(dalmata.numLegs);