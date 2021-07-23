# Understand own properties

In the following example, the Bird constructor defines two properties: name and numLegs:

`function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");`

name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

`let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);`

The console would display the value ["name", "numLegs"].

Add the own properties of canary to the array ownProps.

---

No exemplo a seguir, o construtor Bird define duas propriedades: name e numLegs:

function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");`

name e numLegs são chamados de propriedades próprias, porque são definidos diretamente no objeto de instância. Isso significa que o pato e o canário têm, cada um, sua própria cópia separada dessas propriedades. Na verdade, cada instância de Bird terá sua própria cópia dessas propriedades. O código a seguir adiciona todas as propriedades próprias de duck à matriz ownProps:

`let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);`

O console exibiria o valor ["name", "numLegs"].

Adicione as próprias propriedades de canary à matriz ownProps. 
