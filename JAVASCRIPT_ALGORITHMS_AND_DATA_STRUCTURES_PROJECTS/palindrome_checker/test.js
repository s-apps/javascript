function palindrome(str) {
    const stringOne = str.replace(/[\W_]/g, "").toLowerCase();
    const stringTwo = str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");
    return stringOne === stringTwo;
}
console.log(palindrome("A man, a plan, a canal. Panama"));