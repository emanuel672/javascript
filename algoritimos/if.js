let unitario = 10;
let pecas = prompt("quantas pecas voce encomenda", 0);
if (pecas > 0) {
    let total = unitario * pecas;
    alert(`valor unitario ${unitario} valor da peca ${pecas}`);
    alert(`valor total ${total}`);
    console.log(total);// apresentara o valor toal
}
console.log(total);// nao esta definido fora do if