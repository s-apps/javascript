# Reuse JavaScript code using import

import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:

`import { add } from './math_functions.js';`

Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.

You can import more than one item from the file by adding them in the import statement like this:

`import { add, subtract } from './math_functions.js';`

Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

---

import permite que você escolha quais partes de um arquivo ou módulo carregar. Na lição anterior, os exemplos exportados são adicionados do arquivo math_functions.js. Veja como você pode importá-lo para usar em outro arquivo:

`import {add} from './math_functions.js';`

Aqui, import encontrará add em math_functions.js, importará apenas aquela função para você usar e ignorará o resto. O ./ diz à importação para procurar o arquivo math_functions.js na mesma pasta do arquivo atual. O caminho relativo do arquivo (./) e a extensão do arquivo (.js) são necessários ao usar a importação dessa maneira.

Você pode importar mais de um item do arquivo adicionando-os na declaração de importação desta forma:

`import {add, subtract} de './math_functions.js';`

Adicione a instrução de importação apropriada que permitirá que o arquivo atual use as funções uppercaseString e lowercaseString que você exportou na lição anterior. Essas funções estão em um arquivo denominado string_functions.js, que está no mesmo diretório do arquivo atual.