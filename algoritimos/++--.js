let n1= 10;
let n2= 10;

console.log(n1);//10
console.log(n1++);//10
console.log(n1);//11
console.log(n2);//10
console.log(++n2);//11
console.log(n2);//11
//////////////////////////
let n3= 20;
let n4= 20;
console.log(n3);//20
console.log(n3--);//20
console.log(n3);//19
console.log(n4);//20
console.log(--n4);//19
console.log(n4);//19
///////////////////////////
let greetings = "Hi";
console.log(greetings + " " + "Alice"); 
let sentence = "Happy New Year ";
let newSentence = sentence + 10191;
console.log(newSentence); 
console.log(typeof newSentence); 
/////////////////////////////////////////
let a, b;
b = (a = (20 + 20) * 2) > (3 ** 2);
console.log(a);  
console.log(b);