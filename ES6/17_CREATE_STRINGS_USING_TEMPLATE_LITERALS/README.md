# Create strings using template literals

A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below:

`const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);`

The console will display the strings Hello, my name is Zodiac Hasbro! and I am 56 years old..

A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.

Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).

`[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]`

---

Um novo recurso do ES6 é o literal de modelo. Este é um tipo especial de string que facilita a criação de strings complexas.

Literais de modelo permitem criar strings de várias linhas e usar recursos de interpolação de strings para criar strings.

Considere o código abaixo:

`const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const saudação = `Olá, meu nome é $ {person.name}!
Tenho $ {person.age} anos. »;

console.log (saudação); `

O console exibirá as strings Hello, my name is Zodiac Hasbro! e eu tenho 56 anos ..

Muitas coisas aconteceram lá. Em primeiro lugar, o exemplo usa crostas (`), não aspas ('ou"), para envolver a string. Em segundo lugar, observe que a string é multilinha, tanto no código quanto na saída. Isso economiza a inserção de \ n dentro das strings. A sintaxe $ {variable} usada acima é um marcador de posição. Basicamente, você não precisará mais usar a concatenação com o operador +. Para adicionar variáveis ​​a strings, basta soltar a variável em uma string de modelo e envolvê-la com $ {e }. Da mesma forma, você pode incluir outras expressões em seu literal de string, por exemplo $ {a + b}. Esta nova maneira de criar strings oferece mais flexibilidade para criar strings robustas.

Use a sintaxe literal de modelo com crases para criar uma matriz de strings de elemento de lista (li). O texto de cada elemento da lista deve ser um dos elementos da matriz da propriedade de falha no objeto de resultado e ter um atributo de classe com o valor text-warning. A função makeList deve retornar a matriz de strings do item da lista.

Use um método iterador (qualquer tipo de loop) para obter a saída desejada (mostrado abaixo).

`[
  '<li class = "text-warning">no-var</li>',
  '<li class = "text-warning">var-on-top</li>',
  '<li class = "text-warning">linebreak</li>'
] `