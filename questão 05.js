//exercicio 08
function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
}

//exercicio 07
/*let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));*/

//exercicio 06
/*let fibb = function (n) {
    let valor = 0;
    if (n != 0) {
        if (n === 1) {
            valor = 1;
        } else {
            valor = fibb(n - 1) + fibb(n - 2);
        }
    }
    return valor;
}
console.log(fibb(4));
console.log(fibb(7)); */

//exercicio 05
/*let counter = 1;
let intervalo = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalo)
}, 20000);*/

//exercicio 04 
/*let som = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
let action = (callback, a, b) => callback(a, b);
//ou
let action = function (callback, a, b) {
    return callback(a, b);
}
//ou
function action(callback, a, b) {
    return callback(a, b);
}
console.log(action(som, 12, 10)); 
console.log(action(sub, 12, 10)); 
console.log(action(mult, 10, 10.1));*/

//exercicio 03
/*let som = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
console.log(sub(12, 10)); 
console.log(mult(10, 10.1));*/

//exercicio 02
/*function soma(a, b) { 
    if (!Number.isInteger(a) || !Number.isInteger(b)) { 
    return NaN; 
    } 
    return a + b; 
} 
function subitrair(a, b) { 
    if (!Number.isInteger(a) || !Number.isInteger(b)) { 
    return NaN; 
    } 
    return a - b; 
} 
function multiplica(a, b) { 
    if (!Number.isInteger(a) || !Number.isInteger(b)) { 
    return NaN; 
    } 
    return a * b; 
}
console.log(add(12, 10));
console.log(mult(12, 10.1));*/

//exercicio 01
/*let numero = [50, 10, 40, 30, 20];
let classificado = numero.sort((a, b) => b - a);
console.log(classificado); */

/*let numero = prompt("digite um numero aleatorio");
if(numero > 90 && numero < 110) {
    alert("ganhou!");
} else {
    alert("perdeu");
}*/