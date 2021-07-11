# Ignore case while matching

Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

---

Até agora, você olhou para regexes para fazer correspondências literais de strings. Mas às vezes, você também pode querer combinar diferenças de maiúsculas e minúsculas.

Maiúsculas e minúsculas (ou às vezes letras maiúsculas) é a diferença entre letras maiúsculas e minúsculas. Os exemplos de letras maiúsculas são A, B e C. Os exemplos de letras minúsculas são a, b e c.

Você pode combinar os dois casos usando o que é chamado de sinalizador. Existem outros sinalizadores, mas aqui você se concentrará no sinalizador que ignora maiúsculas e minúsculas - o sinalizador i. Você pode usá-lo anexando-o ao regex. Um exemplo de uso desse sinalizador é /ignorecase/i. Este regex pode corresponder às strings ignorecase, igNoreCase e IgnoreCase.

Escreva um regex fccRegex para corresponder a freeCodeCamp, independentemente do caso. Sua regex não deve corresponder a nenhuma abreviatura ou variação com espaços.