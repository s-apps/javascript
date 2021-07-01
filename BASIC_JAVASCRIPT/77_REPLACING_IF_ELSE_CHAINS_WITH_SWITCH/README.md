# Recplacing if else chains with switch

If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

`if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}`

can be replaced with:

`switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}`

Change the chained if/else if statements into a switch statement.

---

Se você tiver muitas opções para escolher, uma instrução switch pode ser mais fácil de escrever do que muitas instruções if / else if encadeadas. Os seguintes:

`if (val === 1) {
   resposta = "a";
} else if (val === 2) {
   resposta = "b";
} senão {
   resposta = "c";
} `

pode ser substituído por:

`switch (val) {
   caso 1:
     resposta = "a";
     break;
   caso 2:
     resposta = "b";
     break;
   padrão:
     resposta = "c";
} `

Altere as instruções if / else if encadeadas em uma instrução switch.