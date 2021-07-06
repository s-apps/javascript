# Use destructuring assignment to extract values from objects

Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

`const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;`

name would have a value of the string John Doe, and age would have the number 34.

Here's an equivalent assignment statement using the ES6 destructuring syntax:

`const { name, age } = user;`

Again, name would have a value of the string John Doe, and age would have the number 34.

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

---

A designação de desestruturação é uma sintaxe especial introduzida no ES6, para designar ordenadamente valores retirados diretamente de um objeto.

Considere o seguinte código ES5:

`const user = {name: 'John Doe', age: 34};

const name = user.name;
const age = user.age; `

name teria o valor da string John Doe e a idade teria o número 34.

Aqui está uma instrução de atribuição equivalente usando a sintaxe de desestruturação ES6:

`const {name, age} = user;`

Novamente, o nome teria o valor da string John Doe e a idade teria o número 34.

Aqui, as variáveis de nome e idade serão criadas e atribuídas aos valores de seus respectivos valores do objeto de usuário. Você pode ver o quanto isso é mais limpo.

Você pode extrair quantos valores quiser do objeto.

Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir às variáveis hoje e amanhã os valores de hoje e amanhã do objeto HIGH_TEMPERATURES.