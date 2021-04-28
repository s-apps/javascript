# Use destructuring assignment to extract values from objects

Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:

```sh
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;
```
name would have a value of the string John Doe, and age would have the number 34.

Here's an equivalent assignment statement using the ES6 destructuring syntax:

```sh
const { name, age } = user;
```
Again, name would have a value of the string John Doe, and age would have the number 34.

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.