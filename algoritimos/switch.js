let porta = prompt("escolha uma porta: a, b ou c");
let ganhar = false;
switch(porta){
    case "a":{
        let menssagem = "porta a";
        console.log(menssagem);
        break;
    }
    case "b":{
        let menssagem = "porta b";
        console.log(menssagem);
        break;
    }
    case "c":{
        let menssagem = "porta c";
        console.log(menssagem);
        break;
    }
    default:
        alert("nao encontrada a porta "+ String(porta));
}
if(ganhar){
    alert("ganhador")
}

/*let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
     alert("Gate A: empty");
     break;
    case "b":
    case "B":
    case 2:
    case "2":
     alert("Gate B: main prize");
     win = true;
     break;
    case "c":
    case "C":
    case 3:
    case "3":
}
if (win) {
    alert("ganhador");
};*/

/*let portao= prompt("portao: a, b, ou c");
let ganhar= false;
switch (portao) {
    case "a" :
        alert("portao a: vazip");
        break;
    case "b" :
        alert("portao b: premiado");
        ganhar= true;
        break;
    case "c":
        alert("portao c: vazio");
        break;
    default:
        alert("sem portao "+ String(portao));
}
if(ganhar){
    alert("ganhador");
}
//deu erro no google. na linha 3 motivo n sei...*/