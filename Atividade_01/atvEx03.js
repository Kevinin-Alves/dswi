var a = 1; 
let b = 2;
const c = 3;

console.log("VAR = "+a);
console.log("let = "+b);
console.log("const ="+c);

console.log("------------------------------------------------------------------");

a = 10;
b = 20;
c = 30;

console.log("var = "+a);
console.log("let = "+b);
console.log("const = "+c);

/*

var: Global ou função-escopo, pode ser redeclarada, sofre hoisting com inicialização undefined.

let: Bloco-escopo, não pode ser redeclarada, sofre hoisting sem inicialização (gera erro de referência se usada antes de ser declarada).

const: Bloco-escopo, não pode ser redeclarada, deve ser inicializada na declaração, não permite reatribuição, mas o conteúdo de objetos pode ser modificado.

*/