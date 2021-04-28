# Use destructuring assignment to pass an object as a function's parameters

In some cases, you can destructure the object in a function argument itself.

Consider the code below:

```sh
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}
```
This effectively destructures the object sent into the function. This can also be done in-place:

```sh
const profileUpdate = ({ name, age, nationality, location }) => {

}
```
When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.