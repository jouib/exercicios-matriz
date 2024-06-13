// 3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas. 
// Nome: Joui Bomfim Mendonça


console.clear();
let teclado = require(`Prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 2;
let coluna = 4;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let numero: number = parseInt(teclado(`Digite o endereço que vai estar no endereço [${z}, ${x}] da matriz: `));
        
        minhaMatriz[z][x] = numero;

        let y: number = minhaMatriz[z][x];
    }
}
console.log(minhaMatriz);
