const str1= String("oi");
const n1= Number(1000);
const b1= Boolean(25);
const b2= BigInt(50);
let nbbs= Boolean(BigInt(Number(String(1234))));
let nr="1234";
const str2=42 + +"1";

console.log(str1);
console.log(n1);
console.log(b1);
console.log(b2);

console.log(`${n1}[${typeof n1}]`);

console.log(`${nr}[${typeof nbbs}]`);

console.log(str2);

