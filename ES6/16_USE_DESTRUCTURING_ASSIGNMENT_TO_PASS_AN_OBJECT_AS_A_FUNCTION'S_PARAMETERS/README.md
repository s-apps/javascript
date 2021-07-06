# Use destructuring assignment to pass an object as a function's parameters

In some cases, you can destructure the object in a function argument itself.

Consider the code below:

`const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}`

This effectively destructures the object sent into the function. This can also be done in-place:

`const profileUpdate = ({ name, age, nationality, location }) => {

}`

When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

Use destructuring assignment within the argument to the function half to send only max and min inside the function.

---

Em alguns casos, você pode desestruturar o objeto em um argumento de função.

Considere o código abaixo:

`const profileUpdate = (profileData) => {
   const {nome, idade, nacionalidade, localização} = profileData;

} `

Isso destrói efetivamente o objeto enviado para a função. Isso também pode ser feito no local:

`const profileUpdate = ({nome, idade, nacionalidade, localização}) => {

} `

Quando profileData é passado para a função acima, os valores são desestruturados do parâmetro de função para uso dentro da função.

Use a atribuição de desestruturação dentro do argumento para a função half para enviar apenas max e min dentro da função.