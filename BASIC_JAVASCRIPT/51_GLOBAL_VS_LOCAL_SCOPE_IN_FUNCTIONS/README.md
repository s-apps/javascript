# GLobal vs. local scope in functions

It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

`var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}`

The function myFun will return the string Head because the local version of the variable is present.

Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

---

É possível ter variáveis locais e globais com o mesmo nome. Ao fazer isso, a variável local tem precedência sobre a variável global.

Neste exemplo:

`var someVar = "Hat";
function myFun() {
   var someVar = "Head";
   return someVar;
}`

A função myFun retornará a string Head porque a versão local da variável está presente.

Adicione uma variável local à função myOutfit para substituir o valor de outerWear pelo suéter de barbante.