# Delete properties from a JavaScript object

We can also delete properties from objects like this:

delete ourDog.bark;
Example:

`var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
delete ourDog.bark;`

After the last line shown above, ourDog looks like:

`{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}`

Delete the tails property from myDog. You may use either dot or bracket 

---

Também podemos excluir propriedades de objetos como este:

delete ourDog.bark;
Exemplo:

`var ourDog = {
   "nome": "Camper",
   "pernas": 4,
   "caudas": 1,
   "amigos": ["tudo!"],
   "bark": "bow-wow"
};

delete ourDog.bark; `

Após a última linha mostrada acima, nosso cachorro se parece com:

`{
   "nome": "Camper",
   "pernas": 4,
   "caudas": 1,
   "amigos": ["tudo!"]
} `

Exclua a propriedade tails de myDog. Você pode usar um ponto ou colchete