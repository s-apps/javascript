# Extract matches

So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:

`"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);`

Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

`'string'.match(/regex/);
/regex/.test('string');`

Apply the .match() method to extract the string coding.

---

Até agora, você só verificou se um padrão existe ou não dentro de uma string. Você também pode extrair as correspondências reais encontradas com o método .match ().

Para usar o método .match (), aplique o método em uma string e passe a regex entre parênteses.

Aqui está um exemplo:

`"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);`

Aqui, a primeira correspondência retornaria ["Hello"] e a segunda retornaria ["expression"].

Observe que a sintaxe .match é o "oposto" do método .test que você tem usado até agora:

`'string'.match(/regex/);
/regex/.test('string');`

Aplique o método .match() para extrair a codificação da string.