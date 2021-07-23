# Create a method on an object

Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

`let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();`

The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. Notice that the method accessed the name property in the return statement using duck.name. The next challenge will cover another way to do this.

Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

---

Os objetos podem ter um tipo especial de propriedade, denominado método.

Métodos são propriedades que são funções. Isso adiciona um comportamento diferente a um objeto. Aqui está o exemplo do pato com um método:

`let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();`

O exemplo adiciona o método sayName, que é uma função que retorna uma frase com o nome do pato. Observe que o método acessou a propriedade name na instrução return usando duck.name. O próximo desafio cobrirá outra maneira de fazer isso.

Usando o objeto cachorro, dê a ele um método chamado sayLegs. O método deve retornar a frase Este cachorro tem 4 pernas. 