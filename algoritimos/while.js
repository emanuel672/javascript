let nomes = [];
let over = false;
while(!over){
    let nome = prompt("digite outro nome ou aperte cancelar");
    if(nome != null){
        nomes.push(nome);
    }else{
        over = true;
    }
}
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

/*let i=0;
while(i<10){
    console.log(i);
    i++;
}*/

/*let isOver = false;
let counter = 1;
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}*/

/*let over= false;
let counter= 1;

while(over!=true){
    let continua = confirm(`[${counter}] continua o loop?`);
    over = continua === true?false : true;
    counter=counter +1;
}*/

/*let n=0;
while(n<91){
    console.log(n);
    n+=10;
}*/