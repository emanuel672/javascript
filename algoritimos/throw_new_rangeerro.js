function fatorial(n){
    if(n>20){
    throw new RangeError("maximo do volume");
    }
    let result = 1;
    for(; n>1; n--){
        result = result * n;
    }
    return result;
}
console.log(fatorial(20));
console.log(fatorial(1000));