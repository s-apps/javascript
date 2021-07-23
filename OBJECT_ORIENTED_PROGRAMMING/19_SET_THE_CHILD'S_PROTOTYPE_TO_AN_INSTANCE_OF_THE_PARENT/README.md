# Set the child's prototype to an instance of the parent

In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

`Bird.prototype = Object.create(Animal.prototype);`

Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

`let duck = new Bird("Donald");
duck.eat();`

duck inherits all of Animal's properties, including the eat method.

Modify the code so that instances of Dog inherit from Animal.

---

No desafio anterior, você viu a primeira etapa para herdar o comportamento do supertipo (ou pai) Animal: criar uma nova instância de Animal.

Este desafio cobre a próxima etapa: definir o protótipo do subtipo (ou filho) - neste caso, Bird - como uma instância de Animal.

`Bird.prototype = Object.create(Animal.prototype);`

Lembre-se de que o protótipo é como a "receita" para a criação de um objeto. De certa forma, a receita do Bird agora inclui todos os "ingredientes" principais do Animal.

`let duck = new Bird("Donald");
duck.eat();`

O pato herda todas as propriedades do Animal, incluindo o método de comer.

Modifique o código para que as instâncias de Dog sejam herdadas de Animal. 
