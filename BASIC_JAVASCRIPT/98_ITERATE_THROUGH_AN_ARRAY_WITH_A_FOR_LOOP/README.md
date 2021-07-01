# Iterate through an array with a for loop

A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

`var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}`

Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.

Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

---

Uma tarefa comum em JavaScript é iterar através do conteúdo de um array. Uma maneira de fazer isso é com um loop for. Este código produzirá cada elemento da matriz para o console:

`var arr = [10, 9, 8, 7, 6];
for (var i = 0; i <arr.length; i ++) {
    console.log (arr [i]);
} `

Lembre-se de que os arrays têm indexação baseada em zero, o que significa que o último índice do array é length - 1. Nossa condição para este loop é i <arr.length, que interrompe o loop quando i é igual a length. Neste caso, a última iteração é i === 4, ou seja, quando i se torna igual a arr.length - 1 e produz 6 para o console. Então i aumenta para 5 e o loop termina porque i <arr.length é falso.

Declare e inicialize um total de variável para 0. Use um loop for para adicionar o valor de cada elemento da matriz myArr ao total.