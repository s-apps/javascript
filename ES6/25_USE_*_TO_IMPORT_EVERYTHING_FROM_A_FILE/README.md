# Use * to import everything from a file

Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory:

`import * as myMathModule from "./math_functions.js";`

The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:

`myMathModule.add(2,3);
myMathModule.subtract(5,3);`

The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.

---

Suponha que você tenha um arquivo e deseja importar todo o seu conteúdo para o arquivo atual. Isso pode ser feito com a sintaxe import *. Aqui está um exemplo em que o conteúdo de um arquivo denominado math_functions.js é importado para um arquivo no mesmo diretório:

`import * as myMathModule from " ./math_functions.js ";`

A instrução de importação acima criará um objeto chamado myMathModule. Este é apenas um nome de variável, você pode nomeá-lo de qualquer maneira. O objeto conterá todas as exportações de math_functions.js nele, para que você possa acessar as funções como faria com qualquer outra propriedade do objeto. Veja como você pode usar as funções de adição e subtração que foram importadas:

`myMathModule.add (2,3);
myMathModule.subtract (5,3); `

O código neste arquivo requer o conteúdo do arquivo: string_functions.js, que está no mesmo diretório do arquivo atual. Use import * como sintaxe para importar tudo do arquivo para um objeto chamado stringFunctions.