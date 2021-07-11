# Find one or more criminials in a hunt



Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"

Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

---

É hora de fazer uma pausa e testar suas novas habilidades de redação de regex. Um grupo de criminosos escapou da prisão e fugiu, mas você não sabe quantos. No entanto, você sabe que eles ficam próximos quando estão perto de outras pessoas. Você é responsável por encontrar todos os criminosos de uma vez.

Aqui está um exemplo para revisar como fazer isso:

O regex /z+/ corresponde à letra z quando ela aparece uma ou mais vezes em uma linha. Ele encontraria correspondências em todas as seguintes strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzzzabc"

Mas ele não encontra correspondências nas seguintes strings, pois não há caracteres da letra z:

""
"ABC"
"abcabc"

Escreva um regex ganancioso que encontre um ou mais criminosos dentro de um grupo de outras pessoas. Um criminoso é representado pela letra C maiúscula. 