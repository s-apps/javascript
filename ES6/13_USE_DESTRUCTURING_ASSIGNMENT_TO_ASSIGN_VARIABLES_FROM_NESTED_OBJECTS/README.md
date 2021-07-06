# Use destructuring assignment to assign variables from nested objects

You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:

`const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};`

Here's how to extract the values of object properties and assign them to variables with the same name:

`const { johnDoe: { age, email }} = user;`

And here's how you can assign an object properties' values to variables with different names:

`const { johnDoe: { age: userAge, email: userEmail }} = user;`

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

---

Você pode usar os mesmos princípios das duas lições anteriores para desestruturar valores de objetos aninhados.

Usando um objeto semelhante aos exemplos anteriores:

`const user = {
   johnDoe: {
     idade: 34,
     email: 'johnDoe@freeCodeCamp.com'
   }
}; `

Veja como extrair os valores das propriedades do objeto e atribuí-los a variáveis com o mesmo nome:

`const {johnDoe: {idade, email}} = user;`

E aqui está como você pode atribuir os valores das propriedades de um objeto a variáveis com nomes diferentes:

`const {johnDoe: {idade: userAge, email: userEmail}} = user;`

Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir às variáveis lowToday e highToday os valores de today.low e today.high do objeto LOCAL_FORECAST.