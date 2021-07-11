# Catch off by one errors when using indexing

Off by one errors (sometimes called OBOE) crop up when you're trying to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them. JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print undefined.

When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors:

`let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}`

The first example here loops one too many times, and the second loops one too few times (missing the first index, 0). The third example is correct.

Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.

---

Erros de desativação por um (às vezes chamados de OBOE) surgem quando você está tentando atingir um índice específico de uma string ou array (para cortar ou acessar um segmento), ou ao fazer um loop sobre os índices deles. A indexação do JavaScript começa em zero, não um, o que significa que o último índice é sempre um a menos que o comprimento do item. Se você tentar acessar um índice igual ao comprimento, o programa pode lançar um erro de referência "índice fora do intervalo" ou imprimir indefinido.

Quando você usa métodos de string ou array que usam intervalos de índice como argumentos, ajuda a ler a documentação e entender se eles são inclusivos (o item no índice fornecido é parte do que é retornado) ou não. Aqui estão alguns exemplos de erros off por um:

`let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}`

O primeiro exemplo aqui faz loops muitas vezes e o segundo faz loops muito poucas vezes (faltando o primeiro índice, 0). O terceiro exemplo está correto.

Corrija os dois erros de indexação na função a seguir para que todos os números de 1 a 5 sejam impressos no console. 
