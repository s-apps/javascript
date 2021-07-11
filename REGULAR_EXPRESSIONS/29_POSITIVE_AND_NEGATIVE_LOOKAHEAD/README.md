# Positive and negative lookahead

Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.

`let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);`

Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

`let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);`

Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

---

Lookaheads são padrões que dizem ao JavaScript para olhar adiante em sua string para verificar se há padrões mais adiante. Isso pode ser útil quando você deseja pesquisar vários padrões na mesma string.

Existem dois tipos de antevisão: antevisão positiva e antevisão negativa.

Um lookahead positivo verificará se o elemento no padrão de pesquisa está lá, mas não corresponderá realmente a ele. Um lookahead positivo é usado como (? = ...) onde o ... é a parte necessária que não é correspondida.

Por outro lado, um lookahead negativo verificará se o elemento no padrão de pesquisa não está lá. Um lookahead negativo é usado como (?! ...) onde o ... é o padrão que você não quer que esteja lá. O resto do padrão é retornado se a parte de antevisão negativa não estiver presente.

Lookaheads é um pouco confuso, mas alguns exemplos podem ajudar.

`let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);`

Ambas as chamadas de correspondência retornariam ["q"].

Um uso mais prático de lookaheads é verificar dois ou mais padrões em uma string. Aqui está um verificador de senha simples (ingenuamente) que procura entre 3 e 6 caracteres e pelo menos um número:

`let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);`

Use lookaheads no pwRegex para fazer a correspondência de senhas com mais de 5 caracteres e dois dígitos consecutivos. 
