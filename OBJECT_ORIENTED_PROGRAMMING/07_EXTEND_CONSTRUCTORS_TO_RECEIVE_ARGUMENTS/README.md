# Extend constructors to receive arguments

The Bird and Dog constructors from the last challenge worked well. However, notice that all Birds that are created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:

`let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";`

Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

`function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}`

Then pass in the values as arguments to define each unique bird into the Bird constructor: let cardinal = new Bird("Bruce", "red"); This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2. The cardinal has these properties:

cardinal.name
cardinal.color
cardinal.numLegs

The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

---

Os construtores Bird and Dog do último desafio funcionaram bem. No entanto, observe que todos os pássaros criados com o construtor Bird são automaticamente chamados de Albert, são azuis e têm duas pernas. E se você quiser pássaros com valores diferentes de nome e cor? É possível alterar as propriedades de cada ave manualmente, mas isso daria muito trabalho:

`let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
`

Suponha que você esteja escrevendo um programa para rastrear centenas ou até milhares de pássaros diferentes em um aviário. Levaria muito tempo para criar todos os pássaros e, em seguida, alterar as propriedades para valores diferentes para cada um. Para criar objetos Bird diferentes com mais facilidade, você pode projetar seu construtor Bird para aceitar parâmetros:

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}`

Em seguida, passe os valores como argumentos para definir cada pássaro único no construtor Bird: let cardinal = new Bird ("Bruce", "red"); Isso fornece uma nova instância de Bird com as propriedades de nome e cor definidas para Bruce e vermelho, respectivamente. A propriedade numLegs ainda está definida como 2. O cardinal tem estas propriedades:

cardinal.name
cardinal.color
cardinal.numLegs

O construtor é mais flexível. Agora é possível definir as propriedades de cada Bird no momento em que ele é criado, que é uma maneira que os construtores JavaScript são tão úteis. Eles agrupam objetos com base em características e comportamentos compartilhados e definem um projeto que automatiza sua criação.

Crie outro construtor Dog. Desta vez, configure-o para receber o nome e a cor dos parâmetros, e tenha a propriedade numLegs fixada em 4. Em seguida, crie um novo Cachorro salvo em um terrier variável. Passe duas strings como argumentos para as propriedades de nome e cor. 