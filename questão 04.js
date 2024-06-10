//exercicio 09
/*while (true) {
    let primeiro = prompt("digite o primeiro numero");
    let segundo = prompt("digite o segundo numero");
    let operador = prompt("digite um operador (+, -, * or /)");
    let resultado;

    if (primeiro === "Q" || segundo === "Q" || operador === "Q") {
        break;
    }

    primeiro = Number(primeiro);
    segundo = Number(segundo);

    if (!Number.isNaN(primeiro) && !Number.isNaN(segundo)) {
        switch (operador) {
            case "+":
                resultado = primeiro + segundo;
                break;
            case "-":
                resultado = primeiro - segundo;
                break;
            case "*":
                resultado = primeiro * segundo;
                break;
            case "/":
                resultado = primeiro / segundo;
                break;
            default:
                resultado = "Error: nenhum operador";
        }
    } else {
        resultado = "Error: nenhum valor encontrado";
    }
    alert(resultado);
}*/

//exercicio 08
/*let navio ={
    latitude: 40.07288,
    longitude: 154.485335,
    cusor: 285.6,
    velocidade: 14.0,
    imo: 91757117,
    nome: "titanique"
};
for(let key in navio){
    console.log(`${key} -> ${navio[key]}`);
}*/

//exercicio 07
/*let filme = [];
while(true){
    let titulo = prompt("digite o nome do filme");
    let avaliacao = prompt("digite a sua avaliacao do filme");
    if(titulo === null || avaliacao === null){
        break
    }else{
        filme.push({
            titulo: titulo, 
            avaliacao: Number(avaliacao)
        });
    }
}
console.log("todas as classificacoes abaixo:");
for(filmes of filme){
    if(filmes.avaliacao <7){
        console.log(`${filmes.titulo} (${filmes.avaliacao})`);
    }
}
console.log("todas as classificacoes sobre:");
for(filmes of filme){
    if(filmes.avaliacao >=7){
        console.log(`${filmes.titulo} (${filmes.avaliacao})`);
    }
}*/

//exercicio 06
/*let numeros = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
for(numero of numeros){
    console.log(numero);
}
console.log("______________________");
for(numero of numeros){
    if(numero % 2 === 0){
        console.log(numero);
    }
}
console.log("______________________");
for(numero of numeros){
    if(numero>10 && numero<60){
        console.log(numero);
    }
}*/

//exercicio 05
/*let superior = Number(prompt("digite o numero superior"));
let inferior = Number(prompt("digite o numero inferior"));
if(!Number.isNaN(superior)&& !Number.isNaN(inferior)&&superior>inferior){
    for(i=superior; i>=inferior; i-=10){
        console.log(i);
    }
}*/

//exercicio 04
/*for(i=100; i>0; i-=10){
    console.log(i);
}*/

//ecercicio 03
/*let primeiro= numero (prompt("digite o primeiro numero:"));
let segundo= numero (prompt("digite o segundo numero:"));
let operador= prompt("digite um operador(+, -, * ou /)");
let resultador;
if(!numero.isnan(primeiro) && !numero.isnan(segundo)){
    switch(operador){
        case "+": resultador= primeiro + segundo; break;
        case "-": resultador= primeiro - segundo; break;
        case "*": resultador= primeiro * segundo; break;
        case "/": resultador= primeiro / segundo; break;
        default: resultador= "error: no operador";
    }
}else{
    resultador="error: ao digitar o numero";
}
alert(resultador);*/

//exercicio 02
/*let numero = prompt("escolha um numero");
let mensagem = (numero > 90 && numero < 110) ? "ganhou": "perdeu";
alert(mensagem);*/

//exercicio 01
/*let numero= prompt("escolha um numero");
if (numero > 90 && numero < 110){
    alert("voce ganhou");
}else{
    alert("voce perdeu:(");
}*/