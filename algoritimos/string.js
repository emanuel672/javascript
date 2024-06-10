let str= "text";
let strstr= String(str);
console.log(`${typeof str}:${strstr}`);
console.log(`${typeof strstr}:${strstr}`);

let nr=42;
let strnr= String(nr);
console.log(`${typeof nr}:${nr}`);
console.log(`${typeof strnr}:${strnr}`);

let bl= true;
let strbi= String(bl);
console.log(`${typeof bl}:${bl}`);
console.log(`${typeof strbi}:${strbi}`);

let bnr= 123n;
let strbnr= String(bnr);
console.log(`${typeof bnr}:${bnr}`);
console.log(`${typeof strbnr}:${strbnr}`);

let un= undefined;
let strun= String(un);
console.log(`${typeof un}:${un}`);
console.log(`${typeof strun}:${strun}`);

let n= null;
let strn= String(n);
console.log(`${typeof n}:${n}`);
console.log(`${typeof strn}:${strn}`);