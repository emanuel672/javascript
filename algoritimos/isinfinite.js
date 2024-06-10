let sx= prompt("digite o primeiro numero");
let sy= prompt("digite o segundo numero");
let x= Number(sx);
let y= Number(sy);

if(Number.isFinite(x) && Number.isFinite(y) && y !== 0){
    console.log(x / y);
}else{
    console.log("incorreto argumento");
}