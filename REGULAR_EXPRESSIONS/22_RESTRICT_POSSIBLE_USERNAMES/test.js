function checkUsername(username){
    //let userCheck = /^\D\w\d?$/gi;
    let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    return userCheck.test(username);
}

console.log(checkUsername('JACK'));
console.log(checkUsername('J'));
console.log(checkUsername('Jo'));
console.log(checkUsername('Oceans11'));
console.log(checkUsername('RegexGuru'));
console.log(checkUsername('007'));
console.log(checkUsername('9'));
console.log(checkUsername('A1'));
console.log(checkUsername('BadUs3rnam3'));
console.log(checkUsername('Z97'));
console.log(checkUsername('c57bT3'));
console.log(checkUsername('AB1'));
console.log(checkUsername('J%4'));