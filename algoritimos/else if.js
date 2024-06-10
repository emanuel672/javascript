const intrutor = 2.99;
let shopp = 9.99;
let ordem = true;
let use = 22;
let points = 400;
let car = 199;
let promo = false;
let app = false;
let add = true;
if((use>65)||(use>=21 && (promo || car>300 || points>500))){
    shopp = 0;
}else if(use<21 && app){
    shopp = shopp - 5;
}else if(use<21){
    ordem = false;
}
if(ordem && add && !promo){
    shopp += intrutor;
}
if(ordem){
    console.log(shopp);
}else{
    console.log("onderm do if 21");
}

/*let numero= prompt("enter numero",0);
if(numero<10){
    alert("<10");
}else if(numero<30){
    alert("<30");
}else if(numero<60){
    alert("<60");
}else if(numero<90){
    alert("<90");
}else if(numero<100){
    alert("<100");
}else if(numero == 100){
    alert("100");
}else{
    alert(">100");
}*/