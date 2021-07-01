# Accessing object properties with bracket notation

The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

`var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];`

myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.

Note that property names with spaces in them must be in quotes (single or double).

Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

---

A segunda maneira de acessar as propriedades de um objeto é a notação de colchetes ([]). Se a propriedade do objeto que você está tentando acessar tiver um espaço em seu nome, você precisará usar a notação de colchetes.

No entanto, você ainda pode usar a notação de colchetes nas propriedades do objeto sem espaços.

Aqui está um exemplo de como usar a notação de colchetes para ler a propriedade de um objeto:

`var myObj = {
   "Nome do Espaço": "Kirk",
   "Mais espaço": "Spock",
   "NoSpace": "USS Enterprise"
};
myObj ["Nome do Espaço"];
myObj ['Mais espaço'];
myObj ["NoSpace"]; `

myObj ["Space Name"] seria a string Kirk, myObj ['More Space'] seria a string Spock e myObj ["NoSpace"] seria a string USS Enterprise.

Observe que os nomes das propriedades com espaços devem estar entre aspas (simples ou duplas).

Leia os valores das propriedades an entree e drink de testObj usando a notação de colchetes e atribua-os a entreeValue e drinkValue respectivamente.