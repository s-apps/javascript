# Split a string into an array using the split method

The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

```sh
var str = "Hello World";
var bySpace = str.split(" ");
var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
```

bySpace would have the value ["Hello", "World"] and byDigits would have the value ["How", "are", "you", "today"].

Since strings are immutable, the split method makes it easier to work with them.