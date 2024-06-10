const a= false;
const b= true;
const c= false;
const d= true;

console.log(a && b && c || d);//verdadeiro
console.log(a && b &&(c||d));//falso
//////////////////////////////////////
console.log(true && 1991);//1991
console.log(false && 1991);//falso
console.log(2 && 5);//5
console.log(0 && 5);//0
console.log("alice"&&"bob");//bob
console.log(""&&"bob");//sem resposta

console.log(true || 1991);//verdadeiro
console.log(false || 1991);//1991
console.log(2 || 5);//2
console.log(0 || 5);//5
console.log("alice"||"bob");//alice
console.log(""||"bob");//bob