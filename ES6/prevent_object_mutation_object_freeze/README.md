# Prevent object mutation - Object.freeze

As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.

Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

```sh
let obj = {
    name: 'FreeCodeCamp',
    review: 'Awesome'
};
Object.freeze(obj);
obj.review = 'bad';
obj.newProp = 'Test';
console.log(obj);
```
The obj.review and obj.newProp assignments will result in errors, and the console will display the value { name: "FreeCodeCamp", review: "Awesome" }.
