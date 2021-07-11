# Check for all or none

Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

`let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);`

Both uses of the test method would return true.

Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

---

Às vezes, os padrões que você deseja pesquisar podem ter partes que podem ou não existir. No entanto, pode ser importante verificá-los mesmo assim.

Você pode especificar a possível existência de um elemento com um ponto de interrogação,?. Isso verifica se há zero ou um dos elementos anteriores. Você pode pensar neste símbolo como se o elemento anterior fosse opcional.

Por exemplo, existem pequenas diferenças no inglês americano e britânico e você pode usar o ponto de interrogação para corresponder às duas grafias.

`let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);`

Ambos os usos do método de teste retornariam true.

Altere a regex favRegex para corresponder à versão em inglês americano (favorito) e em inglês britânico (favorito) da palavra. 
