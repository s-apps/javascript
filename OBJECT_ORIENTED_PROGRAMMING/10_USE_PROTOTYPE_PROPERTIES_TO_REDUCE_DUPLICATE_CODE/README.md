# Use prototype properties to reduce duplicate code

Since numLegs will probably have the same value for all instances of Bird, you essentially have a duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.

A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL instances of Bird. Here's how to add numLegs to the Bird prototype:

`Bird.prototype.numLegs = 2;`

Now all instances of Bird have the numLegs property.

`console.log(duck.numLegs);
console.log(canary.numLegs);`

Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype. Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

Add a numLegs property to the prototype of Dog

---

Como numLegs provavelmente terá o mesmo valor para todas as instâncias de Bird, você essencialmente tem uma variável duplicada numLegs dentro de cada instância de Bird.

Isso pode não ser um problema quando há apenas duas instâncias, mas imagine se houver milhões de instâncias. Isso seria um monte de variáveis ​​duplicadas.

A melhor maneira é usar o protótipo do Bird. As propriedades do protótipo são compartilhadas entre TODAS as instâncias de Bird. Veja como adicionar numLegs ao protótipo do Bird:

`Bird.prototype.numLegs = 2;`

Agora, todas as instâncias de Bird têm a propriedade numLegs.

`console.log(duck.numLegs);
console.log(canary.numLegs);`

Como todas as instâncias têm automaticamente as propriedades no protótipo, pense em um protótipo como uma "receita" para a criação de objetos. Observe que o protótipo para pato e canário faz parte do construtor Bird como Bird.prototype. Quase todo objeto em JavaScript tem uma propriedade prototype que faz parte da função construtora que o criou.
