# Match a literal string with different possibilities

Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

Complete the regex petRegex to match the pets dog, cat, bird, or fish.

---

Usando regexes como /coding/, você pode procurar a codificação de padrão em outra string.

Isso é poderoso para pesquisar strings únicas, mas é limitado a apenas um padrão. Você pode pesquisar vários padrões usando a alternância ou operador OR: |.

Este operador corresponde aos padrões antes ou depois dele. Por exemplo, se você deseja corresponder as strings sim ou não, a regex desejada é /yes|no/.

Você também pode pesquisar mais do que apenas dois padrões. Você pode fazer isso adicionando mais padrões com mais operadores OR separando-os, como /yes|no|maybe/.

Complete o regex petRegex para corresponder ao dog, cat, bird ou fish.