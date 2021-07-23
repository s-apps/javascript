# Change the prototype to a new object

Up until now you have been adding properties to the prototype individually:

`Bird.prototype.numLegs = 2;`

This becomes tedious after more than a few properties.

`Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}`

A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

`Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};`

Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

---

Até agora, você tem adicionado propriedades ao protótipo individualmente:

`Bird.prototype.numLegs = 2;`

Isso se torna tedioso depois de mais do que algumas propriedades.

`Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}`

Uma maneira mais eficiente é definir o protótipo para um novo objeto que já contém as propriedades. Dessa forma, as propriedades são adicionadas todas de uma vez:

`Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};`

Adicione a propriedade numLegs e os dois métodos eat() e describe() ao protótipo de Dog definindo o protótipo para um novo objeto. 