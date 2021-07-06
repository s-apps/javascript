# Use destructuring assignment to assign variables from objects

Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:

`const user = { name: 'John Doe', age: 34 };`

Here's how you can give new variable names in the assignment:

`const { name: userName, age: userAge } = user;`

You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34.

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

---

A desestruturação permite que você atribua um novo nome de variável ao extrair valores. Você pode fazer isso colocando o novo nome após dois pontos ao atribuir o valor.

Usando o mesmo objeto do último exemplo:

`const user = {name: 'John Doe', age: 34};`

Veja como você pode dar novos nomes de variáveis na atribuição:

`const {name: userName, age: userAge} = user;`

Você pode lê-lo como "obter o valor de user.name e atribuí-lo a uma nova variável chamada userName" e assim por diante. O valor de userName seria a string John Doe e o valor de userAge seria o número 34.

Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir às variáveis highToday e highTomorrow os valores de hoje e amanhã do objeto HIGH_TEMPERATURES.