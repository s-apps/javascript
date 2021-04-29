# Handle a rejected promise with catch

catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

```sh
myPromise.catch(error => {
  
});
```
error is the argument passed in to the reject method.