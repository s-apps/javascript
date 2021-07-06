# Handle a rejected promise with catch

catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

`myPromise.catch(error => {
  
});`

error is the argument passed in to the reject method.

Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

---

catch é o método usado quando sua promessa foi rejeitada. Ele é executado imediatamente após o método de rejeição de uma promessa ser chamado. Esta é a sintaxe:

`myPromise.catch (error => {
  
});`

error é o argumento passado para o método de rejeição.

Adicione o método catch à sua promessa. Use o error como o parâmetro de sua função de retorno de chamada e registre o erro no console.