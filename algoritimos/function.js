/*function maior(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}
console.log(largest(1, 1, 2)); 
console.log(largest(1, 2, 3)); 
console.log(largest(3, 2, 1)); 
console.log(largest(2, 2, 1));*/

function media(a,b,c){
    return a+b+c/2;
}
console.log(media(2,10,20));
console.log(media(5,5));

/*function fatorial(n){
    let resultado = 1;
    for(; n>1; n--){
        resultado = resultado*n;
    }
    return resultado;
}
console.log(fatorial(3));
console.log(fatorial(5));
console.log(fatorial(8));
console.log(fatorial(20));
console.log(fatorial(1000));*/

/*function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));*/

/*let interno = function() {
    console.log('interno 1');
}
let externo = function(callback) {
    console.log('exterior 1');
    callback();
    console.log('externo 2');
}
console.log('test 1');
externo(interno);
console.log('test 2');*/

/*function operacao(funcao, primeiro, segundo) {
    return funcao(primeiro, segundo);
}
let mysoma = function(a, b) {
    return a + b;
}
console.log(operacao(mysoma, 10, 20)); 
console.log(operacao(function(a, b) {
    return a * b;
}, 10, 20));*/

/*function somar(a,b){
    return a+b;
}
let mysoma = somar;
console.log(mysoma(10, 20)); 
console.log(somar(10, 20));

function multiplicar(a,b){
    return a*b;
}
function operacao(funcao, primeiro, segundo){
    return funcao(primeiro, segundo);
}
console.log(operacao(somar, 10, 20));
console.log(operacao(multiplicar, 10, 20));*/

/*function doNothing() {
    return undefined;
}
let a = doNothing(); 
let b = doNothing; 
console.log(typeof a); 
console.log(typeof b);*/

/*function factorial (n){
    let resultado = 1;
    while(n>1){
        resultado *= n;
    }
    return resultado;
}
console.log(factorial(6));*/

/*function getTemp(temperatura) {
    if (!(temperatura instanceof Array)) {
     return NaN;
    }
    let sum = 0;
    for (let i = 0; i < temperatura.length; i++) {
     sum += temperatura[i];
    }
    return sum / temperatura.length;
}
console.log(getTemp(10)); 
console.log(getTemp([10, 30]));*/

/*let a = 100, b = 200, c = 300;
function test(a) {
     let b = 10;
     console.log(a); // parameter a
     console.log(b); // local variable b
     console.log(c); // global variable c
}
test(1);  
console.log(a); 
console.log(b); 
console.log(c); */

/*function add(first, second) {
    return first + second;
    }
    let first = 10, second = 20, third = 40, fourth = 80;
    console.log(add(first, second));
    console.log(add(second, third)); 
    console.log(add(third, fourth)); */

/*function getTemp(temperatura) {
    let sum = 0;
    for (let i = 0; i < temperatura.length; i++) {
     sum += temperatura[i];
    }
    return sum / temperatura.length;
}
let dia1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`media: ${getTemp(dia1)}`); // -> mean:
16.666666666666668
let dia2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`media: ${getTemp(dia2)}`); // -> mean:
18.083333333333332*/

/*let temperatura;
let sum;
let temp
function gettemp(){
    sum =0;
    for(let i = 0; i <temperatura.length; i++){
        sum += temperatura[i];
    }
    temp = sum / temperatura.length;
}
temperatura = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`media: ${gettemp}`);
temperatura = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`media: ${gettemp}`);*/

/*let temperatura;
let sum;
let temp
function gettemp(){
    sum =0;
    for(let i = 0; i <temperatura.length; i++){
        sum += temperatura[i];
    }
    temp = sum / temperatura.length;
}
temperatura = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
gettemp();
console.log(`media: ${temp}`);
temperatura = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
gettemp();
console.log(`media: ${temp}`);*/

/*var couter=100;
function teste(){
    var couter=200;
    console.log(couter);
}
console.log(couter);
teste();
console.log(couter);*/