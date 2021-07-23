# Make code more reusable with the this keyword

The last challenge introduced a method to the duck object. It used duck.name dot notation to access the value for the name property within the return statement:

`sayName: function() {return "The name of this duck is " + duck.name + ".";}`

While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

A way to avoid these issues is with the this keyword:

`let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};`

this is a deep topic, and the above example is only one way to use it. In the current context, this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.

Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.

---

O último desafio introduziu um método para o objeto pato. Ele usou a notação de ponto duck.name para acessar o valor da propriedade name dentro da instrução return:

`sayName: function() {return "The name of this duck is " + duck.name + ".";}`

Embora essa seja uma forma válida de acessar a propriedade do objeto, há uma armadilha aqui. Se o nome da variável mudar, qualquer código que faça referência ao nome original também precisará ser atualizado. Em uma definição curta de objeto, não é um problema, mas se um objeto tiver muitas referências às suas propriedades, há uma chance maior de erro.

Uma maneira de evitar esses problemas é com esta palavra-chave:

`let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};`

este é um tópico profundo e o exemplo acima é apenas uma maneira de usá-lo. No contexto atual, refere-se ao objeto ao qual o método está associado: pato. Se o nome do objeto for alterado para pato-real, não é necessário encontrar todas as referências a pato no código. Isso torna o código reutilizável e mais fácil de ler.

Modifique o método dog.sayLegs para remover quaisquer referências a dog. Use o exemplo do pato para orientação. 
