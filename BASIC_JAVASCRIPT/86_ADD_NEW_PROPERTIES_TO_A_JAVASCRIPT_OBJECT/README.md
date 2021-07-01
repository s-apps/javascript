# Add new properties to a JavaScript object

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

`ourDog.bark = "bow-wow";`

or

`ourDog["bark"] = "bow-wow";`

Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

Example:

`var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "bow-wow";`

Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

---

Você pode adicionar novas propriedades a objetos JavaScript existentes da mesma maneira que os modificaria.

Veja como adicionaríamos uma propriedade bark ao nosso cachorro:

`ourDog.bark = "bow-wow";`

ou

`ourDog [" bark "] =" bow-wow ";`

Agora, quando avaliarmos nosso cachorro.bark, obteremos sua casca, uau.

Exemplo:

`var ourDog = {
   "nome": "Camper",
   "pernas": 4,
   "caudas": 1,
   "amigos": ["tudo!"]
};
ourDog.bark = "bow-wow"; `

Adicione uma propriedade bark a myDog e defina-a como um som de cachorro, como "woof". Você pode usar a notação de ponto ou colchete.