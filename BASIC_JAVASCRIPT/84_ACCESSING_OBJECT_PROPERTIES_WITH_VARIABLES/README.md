# Accessing object properties with variables

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

`var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);`

The string Doberman would be displayed in the console.

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

`var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);`

someProp would have a value of the string propName, and the string John would be displayed in the console.

Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

---

Outro uso da notação de colchetes em objetos é acessar uma propriedade que é armazenada como o valor de uma variável. Isso pode ser muito útil para iterar pelas propriedades de um objeto ou ao acessar uma tabela de pesquisa.

Aqui está um exemplo de uso de uma variável para acessar uma propriedade:

`var dogs = {
  Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var meuCachorroQuente = "Caçador";
var myBreed = cães [myDog];
console.log (minhaBreed); `

A string Doberman seria exibida no console.

Outra maneira de usar esse conceito é quando o nome da propriedade é coletado dinamicamente durante a execução do programa, da seguinte maneira:

`var someObj = {
  propName: "John"
};
function propPrefix (str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix ("Nome");
console.log (someObj [someProp]); `

someProp teria um valor da string propName e a string John seria exibida no console.

Observe que não usamos aspas em torno do nome da variável ao usá-lo para acessar a propriedade porque estamos usando o valor da variável, não o nome.

Defina a variável playerNumber como 16. Em seguida, use a variável para pesquisar o nome do jogador e atribuí-lo ao jogador.