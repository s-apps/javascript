# Using the test method

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

`let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);`

The test method here returns true.

Apply the regex myRegex on the string myString using the .test() method.

---

Expressões regulares são usadas em linguagens de programação para combinar partes de strings. Você cria padrões para ajudá-lo a fazer essa correspondência.

Se quiser encontrar a palavra the na string O cachorro perseguiu o gato, você pode usar a seguinte expressão regular: / the /. Observe que as aspas não são necessárias na expressão regular.

JavaScript possui várias maneiras de usar regexes. Uma maneira de testar uma regex é usar o método .test (). O método .test () pega a regex, aplica-a a uma string (que é colocada entre parênteses) e retorna verdadeiro ou falso se seu padrão encontrar algo ou não.

`let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);`

O método de teste aqui retorna verdadeiro.

Aplique o regex myRegex na string myString usando o método .test ().