# Use a contructor to create objects

Here's the Bird constructor from the previous challenge:

`function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();`

NOTE: this inside the constructor always refers to the object being created.

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

blueBird.name;
blueBird.color;
blueBird.numLegs;

Just like any other object, its properties can be accessed and modified:

blueBird.name = 'Elvira';
blueBird.name;

Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

---

Aqui está o construtor Bird do desafio anterior:

`function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();`

NOTA: isso dentro do construtor sempre se refere ao objeto que está sendo criado.

Observe que o novo operador é usado ao chamar um construtor. Isso diz ao JavaScript para criar uma nova instância de Bird chamada blueBird. Sem o operador new, isso dentro do construtor não apontaria para o objeto recém-criado, dando resultados inesperados. Agora o blueBird tem todas as propriedades definidas dentro do construtor Bird:

blueBird.name;
blueBird.color;
blueBird.numLegs;

Assim como qualquer outro objeto, suas propriedades podem ser acessadas e modificadas:

blueBird.name = 'Elvira';
blueBird.name;

Use o construtor Dog da última lição para criar uma nova instância de Dog, atribuindo-a a um hound variável. 
