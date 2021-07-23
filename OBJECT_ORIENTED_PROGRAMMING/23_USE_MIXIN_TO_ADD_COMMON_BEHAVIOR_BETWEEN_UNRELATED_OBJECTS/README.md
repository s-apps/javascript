# Use a mixin to add common behavior between unrelated objects

As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

`let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};`

The flyMixin takes any object and gives it the fly method.

`let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);`

Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:

`bird.fly();
plane.fly();`

The console would display the string Flying, wooosh! twice, once for each .fly() call.

Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.

---

Como você viu, o comportamento é compartilhado por meio de herança. No entanto, há casos em que a herança não é a melhor solução. A herança não funciona bem para objetos não relacionados, como Bird e Airplane. Ambos podem voar, mas um pássaro não é um tipo de avião e vice-versa.

Para objetos não relacionados, é melhor usar mixins. Um mixin permite que outros objetos usem uma coleção de funções.

`let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};`

O flyMixin pega qualquer objeto e dá a ele o método fly.

`let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);`

Aqui, o pássaro e o avião são passados ​​para o flyMixin, que atribui a função voar para cada objeto. Agora, o pássaro e o avião podem voar:

`bird.fly();
plane.fly(); `

O console exibiria a string Flying, wooosh! duas vezes, uma para cada chamada .fly ().

Observe como o mixin permite que o mesmo método voar seja reutilizado por objetos não relacionados pássaro e avião.

Crie um mixin chamado glideMixin que define um método chamado glide. Em seguida, use o glideMixin para dar ao pássaro e ao barco a capacidade de planar. 
