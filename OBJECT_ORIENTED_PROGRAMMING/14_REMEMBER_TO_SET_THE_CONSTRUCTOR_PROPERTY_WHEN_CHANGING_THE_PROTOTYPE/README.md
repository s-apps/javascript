# Remember to set the constructor property when changing the prototype

There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

`duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;`

In order, these expressions would evaluate to false, true, and true.

To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

`Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};`

Define the constructor property on the Dog prototype.

---

Existe um efeito colateral crucial de configurar manualmente o protótipo para um novo objeto. Ele apaga a propriedade do construtor! Esta propriedade pode ser usada para verificar qual função de construtor criou a instância, mas como a propriedade foi substituída, agora fornece resultados falsos:

`duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;`

Em ordem, essas expressões seriam avaliadas como falsas, verdadeiras e verdadeiras.

Para corrigir isso, sempre que um protótipo é definido manualmente para um novo objeto, lembre-se de definir a propriedade constructor:

`Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};`

Defina a propriedade do construtor no protótipo Dog. 
