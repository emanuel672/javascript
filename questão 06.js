//exercicio 05
function max(array) {
    let maxValue = array[1];
    for(let i=1; i<10; i++){   
        if(array[i] > maxValue) {      
        maxValue = array[i];      
    }     
}     
    return maxValue; } 
    console.log( max([1, 4, 6, 2]));
    console.log( max([10, 4, 6, 2]));

//exercicio 04
/*let couter = 0;
let maxvalue = 10;
let result =1;

for(couter = 0; couter < maxvalue; couter++){
    console.log(result);
    result *= maxvalue - couter -1;
}
console.log("final do resultado: ", result);*/

//exercicio 03
/*let end = 2;
for(let i=1; i<=5; i++ ){
    console.log(i); 
}*/

//exercicio 02
/*for(let i=0; i<Number.length; i++){
    let result;
    try{
        result=div(1000, Number[i]);
    }catch(e){
        result=e.message;
    }
    console.log(result);
}*/

//exercicio 01
/*function div(a,b){
    if(b==0){
        throw new RangeError("nao foi possivel dividir por 0");
    }
    return a/b;
}
console.log(div(4,2));
console.log(div(4,0));*/