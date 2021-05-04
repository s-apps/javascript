function repeatStringNumTimes(str, num) {
    if(num <= 0){
        return '';
    }else{
        return str + repeatStringNumTimes(str, num - 1);
    }
}

console.log(repeatStringNumTimes('*', 8));