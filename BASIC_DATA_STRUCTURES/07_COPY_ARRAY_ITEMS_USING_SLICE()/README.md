# Copy array items using slice()

The next method we will cover is slice(). Rather than modifying an array, slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:

`let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);`

todaysWeather would have the value ['snow', 'sleet'], while weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].

In effect, we have created a new array by extracting elements from an existing array.

We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.

---

O próximo método que abordaremos é slice (). Em vez de modificar um array, slice () copia ou extrai um determinado número de elementos para um novo array, deixando o array chamado intacto. slice () leva apenas 2 parâmetros - o primeiro é o índice no qual iniciar a extração e o segundo é o índice no qual interromper a extração (a extração ocorrerá até, mas não incluindo o elemento neste índice). Considere isto:

`let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);`

todaysWeather teria o valor ['snow', 'sleet'], enquanto weatherConditions ainda teria ['rain', 'snow', 'sleet', 'hail', 'clear'].

Na verdade, criamos um novo array extraindo elementos de um array existente.

Definimos uma função, previsão, que leva um array como argumento. Modifique a função usando slice () para extrair informações do array de argumentos e retornar um novo array que contém os elementos de string warm e sunny. 
