# Multiple identical options in switch statements

If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

`var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}`

Cases for 1, 2, and 3 will all produce the same result.

Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.

---

Se a instrução break for omitida do caso de uma instrução switch, a (s) instrução (ões) case (s) a seguir serão executadas até que uma quebra seja encontrada. Se você tiver várias entradas com a mesma saída, poderá representá-las em uma instrução switch como esta:

`var result =" ";
switch (val) {
   case 1:
   case 2:
   case 3:
     result = "1, 2 ou 3";
     break;
   case 4:
     result = "4 sozinho";
}`

Casos para 1, 2 e 3 produzirão o mesmo resultado.

Escreva uma declaração switch para definir a resposta para os seguintes intervalos:
1-3 - baixo
4-6 - Mid
7-9 - alto

Nota: você precisará ter uma declaração de caso para cada número no interval