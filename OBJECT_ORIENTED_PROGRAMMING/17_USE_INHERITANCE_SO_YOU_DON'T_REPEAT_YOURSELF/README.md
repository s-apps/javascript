# Use inheritance so you don't repeat yourself

There's a principle in programming called Don't Repeat Yourself (DRY). The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:

`Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};`

The describe method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

`function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};`

Since Animal includes the describe method, you can remove it from Bird and Dog:

`Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};`

The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.


---

Existe um princípio de programação chamado Don't Repeat Yourself (DRY). O motivo pelo qual o código repetido é um problema é porque qualquer alteração requer a correção do código em vários lugares. Isso geralmente significa mais trabalho para os programadores e mais espaço para erros.

Observe no exemplo abaixo que o método describe é compartilhado por Bird e Dog:

`Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};`

O método de descrição é repetido em dois lugares. O código pode ser editado para seguir o princípio DRY, criando um supertipo (ou pai) chamado Animal:

`function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};`

Como Animal inclui o método de descrição, você pode removê-lo de Bird and Dog:

`Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};`

O método de comer é repetido tanto no gato quanto no urso. Edite o código no espírito de DRY movendo o método comer para o supertipo Animal. 