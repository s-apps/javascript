function titleCase(str) {
    const array = str.toLowerCase().split(' ');
    const retorno = [];
    for(let arr of array){
        retorno.push(arr.charAt(0).toUpperCase() + arr.slice(1));
    }
    return retorno.join(' ');
}
console.log(titleCase("sHoRt AnD sToUt"));