const roseprince= 8;
const lilyprince= 10;
const tulipprince= 2;

let numberOfRoses= 70;
let numberOflilies= 50;
let numberOtulips= 120;
let rosesvalue= roseprince* numberOfRoses;
let liliesvalue= lilyprince* numberOflilies;
let tulipsvalue= tulipprince* numberOtulips;
let total= rosesvalue+ liliesvalue+ tulipsvalue;

console.log("Rose- unit prince:",roseprince,"quantity:",numberOfRoses,"value:",rosesvalue);
console.log("lily- unit princr:",lilyprince,"quantity",numberOflilies,"value:",liliesvalue);
console.log("tulip- unit prince",tulipprince,"quantity:",numberOtulips,"vslue:",tulipsvalue);
console.log("total:",total);

numberOfRoses= numberOfRoses- 20;
numberOflilies= numberOflilies- 30;

rosesvalue= roseprince* numberOfRoses;
liliesvalue= lilyprince* numberOflilies;
tulipsvalue= tulipprince* numberOtulips;
total= rosesvalue+ liliesvalue+ tulipsvalue;

console.log("Rose- unit prince:",roseprince,"quantity:",numberOfRoses,"value:",rosesvalue);
console.log("lily- unit princr:",lilyprince,"quantity",numberOflilies,"value:",liliesvalue);
console.log("tulip- unit prince",tulipprince,"quantity:",numberOtulips,"vslue:",tulipsvalue);
console.log("total:",total);