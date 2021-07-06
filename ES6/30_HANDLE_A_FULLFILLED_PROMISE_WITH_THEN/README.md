# Handle a fullfilled promise with then

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

`myPromise.then(result => {
  
});`

result comes from the argument given to the resolve method.

Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

---

As promessas são mais úteis quando você tem um processo que leva uma quantidade desconhecida de tempo em seu código (ou seja, algo assíncrono), geralmente uma solicitação do servidor. Quando você faz uma solicitação ao servidor, leva algum tempo e, depois que ela é concluída, você geralmente deseja fazer algo com a resposta do servidor. Isso pode ser alcançado usando o método then. O método then é executado imediatamente após sua promessa ser cumprida com determinação. Aqui está um exemplo:

`myPromise.then(result => {
  
});`

resultado vem do argumento dado ao método de resolução.

Adicione o método then à sua promessa. Use o resultado como o parâmetro de sua função de retorno de chamada e registre o resultado no console.
