# Use destructuring assignment to assign variables from nested objects

You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:

```sh
const user = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};
```
Here's how to extract the values of object properties and assign them to variables with the same name:

```sh
const { johnDoe: { age, email }} = user;
```
And here's how you can assign an object properties' values to variables with different names:

```sh
const { johnDoe: { age: userAge, email: userEmail }} = user;
```