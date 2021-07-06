# Create a JavaScript promise

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

`const myPromise = new Promise((resolve, reject) => {

});`

Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

---

Uma prmise em JavaScript é exatamente o que parece - você a usa para fazer uma promessa de fazer algo, geralmente de forma assíncrona. Quando a tarefa é concluída, você cumpre sua promessa ou deixa de fazê-lo. Promise é uma função construtora, então você precisa usar a nova palavra-chave para criar uma. Ele recebe uma função, como argumento, com dois parâmetros - resolver e rejeitar. Esses são métodos usados para determinar o resultado da promessa. A sintaxe é semelhante a esta:

`const myPromise = new Promise ((resolve, reject) => {

}); `

Crie uma nova promessa chamada makeServerRequest. Passe uma função com parâmetros de resolução e rejeição para o construtor.

