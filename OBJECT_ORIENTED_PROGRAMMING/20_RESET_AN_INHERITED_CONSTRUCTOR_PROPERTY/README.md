# Reset an inherited constructor property

When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:

`function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor`

But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set the constructor property of Bird to the Bird object:

`Bird.prototype.constructor = Bird;
duck.constructor`

Fix the code so duck.constructor and beagle.constructor return their respective constructors.

---

Quando um objeto herda seu protótipo de outro objeto, ele também herda a propriedade constructor do supertipo.

Aqui está um exemplo:

`function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor`

Mas pato e todas as instâncias de Bird devem mostrar que foram construídos por Bird e não por Animal. Para fazer isso, você pode definir manualmente a propriedade constructor de Bird para o objeto Bird:

`Bird.prototype.constructor = Bird;
duck.constructor`

Corrija o código para que duck.constructor e beagle.constructor retornem seus respectivos construtores. 