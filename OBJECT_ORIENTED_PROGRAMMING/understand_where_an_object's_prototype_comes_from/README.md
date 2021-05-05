# Understand where an object's prototype comes from

Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

```sh
function Bird(name) {
  this.name = name;
}
let duck = new Bird("Donald");
```
duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

```sh
Bird.prototype.isPrototypeOf(duck);
```

This would return true.