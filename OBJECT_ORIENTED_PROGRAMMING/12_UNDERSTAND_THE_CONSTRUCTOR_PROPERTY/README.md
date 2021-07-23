# Understand the constructor property

There is a special constructor property located on the object instances duck and beagle that were created in the previous challenges:

`let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);`

Both of these console.log calls would display true in the console.

Note that the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

`function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}`

Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.

Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

---

Há uma propriedade constructor especial localizada nas instâncias de objeto duck e beagle que foram criadas nos desafios anteriores:

`let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);`

Ambas as chamadas console.log seriam exibidas como verdadeiras no console.

Observe que a propriedade do construtor é uma referência à função do construtor que criou a instância. A vantagem da propriedade constructor é que é possível verificar essa propriedade para descobrir que tipo de objeto ela é. Aqui está um exemplo de como isso pode ser usado:

`function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}`

Nota: Uma vez que a propriedade do construtor pode ser substituída (o que será abordado nos próximos dois desafios), geralmente é melhor usar o método instanceof para verificar o tipo de um objeto.

Escreva uma função joinDogFraternity que receba um parâmetro candidate e, usando a propriedade constructor, retorne true se o candidato for um Dog, caso contrário, retorne false. 

