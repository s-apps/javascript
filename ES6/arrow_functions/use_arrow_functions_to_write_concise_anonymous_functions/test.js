var magic = function() {
    return new Date();
};
console.log(magic());

const magicArrowFunction = () => new Date();

console.log('Anonymous Arrow Function', magicArrowFunction());