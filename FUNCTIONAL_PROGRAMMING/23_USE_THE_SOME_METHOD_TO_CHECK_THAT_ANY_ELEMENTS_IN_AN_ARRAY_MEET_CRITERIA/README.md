# Use the some method to check that any elements in an array meet a criteria

The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 10:

`var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});`

The some method would return true.

Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

---

O método some funciona com arrays para verificar se algum elemento passa em um teste específico. Ele retorna um valor booleano - verdadeiro se algum dos valores atender aos critérios, falso caso contrário.

Por exemplo, o código a seguir verifica se algum elemento na matriz de números é menor que 10:

`var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});`

O método algum retornaria verdadeiro.

Use o método some dentro da função checkPositive para verificar se algum elemento em arr é positivo. A função deve retornar um valor booleano. 