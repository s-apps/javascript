function reverseString(str) {
  const stringArray = str.split('');
  return stringArray.reverse().join('');
}

console.log(reverseString('hello'));