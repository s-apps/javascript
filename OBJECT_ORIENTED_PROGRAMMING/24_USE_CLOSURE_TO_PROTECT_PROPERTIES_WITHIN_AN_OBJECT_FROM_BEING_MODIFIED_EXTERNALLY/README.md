# Use closure to protect properties within an object from being modified externally

In the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition.

`bird.name = "Duffy";`

Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues.

The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

`function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();`

Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. In JavaScript, a function always has access to the context in which it was created. This is called closure.

Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

---

No desafio anterior, o pássaro tinha um nome de propriedade pública. É considerado público porque pode ser acessado e alterado fora da definição do pássaro.

`bird.name="Duffy";`

Portanto, qualquer parte do seu código pode facilmente alterar o nome do pássaro para qualquer valor. Pense em coisas como senhas e contas bancárias que podem ser facilmente alteradas por qualquer parte de sua base de código. Isso pode causar muitos problemas.

A maneira mais simples de tornar essa propriedade pública privada é criando uma variável dentro da função do construtor. Isso altera o escopo dessa variável para estar dentro da função do construtor versus disponível globalmente. Dessa forma, a variável só pode ser acessada e alterada por métodos também dentro da função construtora.

`function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();`

Aqui getHatchedEggCount é um método privilegiado, porque tem acesso à variável privada hatchedEgg. Isso é possível porque hatchedEgg é declarado no mesmo contexto que getHatchedEggCount. Em JavaScript, uma função sempre tem acesso ao contexto no qual foi criada. Isso é chamado de fechamento.

Altere como o peso é declarado na função Bird para que seja uma variável privada. Em seguida, crie um método getWeight que retorne o valor de peso 15. 