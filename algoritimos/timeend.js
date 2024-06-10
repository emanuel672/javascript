let part = 0;
console.time('davi');
for(let k=0; k<10000000; k++){
    part = part + ((-1)**k)/(2*k+1);
}
console.timeEnd('davi');
let pi = part *4;
console.log(pi);