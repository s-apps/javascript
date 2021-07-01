# Testing objects for properties

Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

`var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");`

The first hasOwnProperty returns true, while the second returns false.

Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

---

Às vezes é útil verificar se a propriedade de um determinado objeto existe ou não. Podemos usar o método .hasOwnProperty (propname) de objetos para determinar se aquele objeto tem o nome de propriedade fornecido. .hasOwnProperty () retorna verdadeiro ou falso se a propriedade for encontrada ou não.

Exemplo

`var myObj = {
   cartola",
   parte inferior: "calças"
};
myObj.hasOwnProperty ("top");
myObj.hasOwnProperty ("middle"); `

O primeiro hasOwnProperty retorna verdadeiro, enquanto o segundo retorna falso.

Modifique a função checkObj para testar se um objeto passado para a função (obj) contém uma propriedade específica (checkProp). Se a propriedade for encontrada, retorne o valor dessa propriedade. Caso contrário, retorne "Não encontrado".