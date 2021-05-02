# Remove items from an array with pop() and shift()

Both push() and unshift() have corresponding methods that are nearly functional opposites: pop() and shift(). As you may have guessed by now, instead of adding, pop() removes an element from the end of an array, while shift() removes an element from the beginning. The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

Let's take a look:

```sh
let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop();
```
greetings would have the value ['whats up?', 'hello'].

```sh
greetings.shift();
```
greetings would have the value ['hello'].

We can also return the value of the removed element with either method like this:

```sh
let popped = greetings.pop();
```
greetings would have the value [], and popped would have the value hello.