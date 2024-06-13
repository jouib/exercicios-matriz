// Nome: Joui Bomfim Mendonça


console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 4;
let coluna = 2;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let numero: number = parseFloat(teclado(`Digite o endereço que vai estar no 
                                                 endereço [${z}, ${x}] da matriz: `));
        
        minhaMatriz[z][x] = numero;

        let y: number = minhaMatriz[z][x];
    }
}
console.log(minhaMatriz);

