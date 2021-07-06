# Prevent object mutation

As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

`let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);` 

The obj.review and obj.newProp assignments will result in errors, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.

In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

---

Como visto no desafio anterior, a declaração const sozinha realmente não protege seus dados de mutação. Para garantir que seus dados não mudem, o JavaScript fornece uma função Object.freeze para evitar a mutação dos dados.

Depois que o objeto é congelado, você não pode mais adicionar, atualizar ou excluir propriedades dele. Qualquer tentativa de mudar o objeto será rejeitada sem erro.

`let obj = {
   name: "FreeCodeCamp",
   review: "Incrível"
};
Object.freeze (obj);
obj.review = "ruim";
obj.newProp = "Teste";
console.log (obj);`

As atribuições obj.review e obj.newProp resultarão em erros e o console exibirá o valor {name: "FreeCodeCamp", review: "Awesome"}.

Neste desafio, você usará Object.freeze para evitar que as constantes matemáticas mudem. Você precisa congelar o objeto MATH_CONSTANTS para que ninguém possa alterar o valor de PI, adicionar ou excluir propriedades.