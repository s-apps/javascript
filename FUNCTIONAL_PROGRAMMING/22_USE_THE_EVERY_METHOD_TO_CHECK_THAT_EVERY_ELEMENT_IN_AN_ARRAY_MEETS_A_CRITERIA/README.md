# Use the every method to check that every element in a array meets a criteria

The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.

For example, the following code would check if every element in the numbers array is less than 10:

`var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});`

The every method would return false here.

Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

---

O método every funciona com matrizes para verificar se cada elemento passa em um teste específico. Ele retorna um valor booleano - verdadeiro se todos os valores atendem aos critérios, falso se não.

Por exemplo, o código a seguir verifica se cada elemento na matriz de números é menor que 10:

`var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});`

O método every retornaria falso aqui.

Use o método every dentro da função checkPositive para verificar se cada elemento em arr é positivo. A função deve retornar um valor booleano. 