# Verify an object's constructor with instanceOf

Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

`let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;`

This instanceof method would return true.

If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

`let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;`

This instanceof method would return false.

Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.


---

Sempre que uma função construtora cria um novo objeto, esse objeto é considerado uma instância de seu construtor. JavaScript fornece uma maneira conveniente de verificar isso com o operador instanceof. instanceof permite que você compare um objeto a um construtor, retornando verdadeiro ou falso com base no fato de o objeto ter sido ou não criado com o construtor. Aqui está um exemplo:

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;`

Este método instanceof retornaria true.

Se um objeto for criado sem usar um construtor, instanceof verificará se não é uma instância desse construtor:

`let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;`

Este método instanceof retornaria false.

Crie uma nova instância do construtor House, chamando-a de myHouse e passando por vários quartos. Em seguida, use instanceof para verificar se é uma instância de House. 