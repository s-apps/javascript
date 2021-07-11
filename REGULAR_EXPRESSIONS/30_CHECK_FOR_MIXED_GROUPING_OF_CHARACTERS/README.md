# Check for mixed grouping of characters

Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.

`let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);`

The test method here would return true.

Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

---

Se quiser encontrar Pinguim ou Abóbora em uma string, você pode usar a seguinte Expressão Regular: / P (engu | umpk) em / g

Em seguida, verifique se os grupos de strings desejados estão na string de teste usando o método test ().

`let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);`

O método de teste aqui retornaria verdadeiro.

Corrija a regex para que verifique os nomes de Franklin Roosevelt ou Eleanor Roosevelt de maneira sensível a maiúsculas e minúsculas e faça concessões para nomes do meio.

Em seguida, corrija o código para que a regex que você criou seja verificada em relação a myString e true ou false seja retornado, dependendo da correspondência da regex. 