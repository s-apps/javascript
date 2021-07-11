# Match ending string patterns

In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.

`let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);`

The first test call would return true, while the second would return false.

Use the anchor character ($) to match the string caboose at the end of the string caboose.

---

Você pode pesquisar o final das strings usando o caractere de cifrão $ no final da regex.

`let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);`

A primeira chamada de teste retornaria verdadeiro, enquanto a segunda retornaria falso.

Use o caractere âncora ($) para corresponder ao caboose da string no final do caboose da string. 
