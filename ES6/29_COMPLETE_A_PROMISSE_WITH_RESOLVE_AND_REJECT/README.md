# Complete a promise with resolve and reject

A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

`const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});`

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.

---

Uma promessa tem três estados: pendente, cumprida e rejeitada. A promessa que você criou no último desafio está para sempre presa no estado pendente porque você não adicionou uma maneira de cumprir a promessa. Os parâmetros de resolução e rejeição fornecidos ao argumento de promessa são usados ​​para fazer isso. resolver é usado quando você deseja que sua promessa seja bem-sucedida e rejeitar é usado quando você deseja que ela falhe. Esses são métodos que aceitam um argumento, conforme visto a seguir.

`const myPromise = new Promise ((resolve, reject) => {
  if (condição aqui) {
    resolve ("Promessa foi cumprida");
  } senão {
    reject ("A promessa foi rejeitada");
  }
}); `

O exemplo acima usa strings para o argumento dessas funções, mas pode realmente ser qualquer coisa. Freqüentemente, pode ser um objeto do qual você usaria dados para colocar em seu site ou em outro lugar.

Faça a promessa lidar com o sucesso e o fracasso. Se responseFromServer for true, chame o método resolve para completar a promessa com sucesso. Passe resolver uma string com o valor We got the data. Se responseFromServer for falso, use o método rejeitar e passe a string: Data not received.