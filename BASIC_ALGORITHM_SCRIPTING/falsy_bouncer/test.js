function bouncer(arr) {
  let newArray = arr.filter((item) => {
      return item;
  });
  return newArray;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));