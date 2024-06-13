// 7-Crie uma matriz 3x3 com números aleatórios de 0 a 9. Em seguida, exiba a matriz na tela.
// Nome: Joui Bomfim Mendonça
/*
console.clear()
let teclado = require (`Prompt-sync`)();
let matriz: number[][] = [];

let linha = 3;
let coluna = 3;


for (let l = 0; l < linha; l++){
    matriz [l] = [];
    for (let c = 0; c < coluna; c++){
        let numColuna = Math.floor(Math.random() * 10);
        matriz[l][c] = numColuna;
    }
}

console.log(matriz);

let maior: number = 0;
let l2: number = 0;
let c2: number = 0;

for (let l = 0; l < linha; l++){
    for (let c = 0; c < coluna; c++){
        if (matriz[l][c] > maior){
            maior = matriz[l][c];
            l2 = l;
            c2 = c;
        }
    }
}

console.log(`O maior número na sua matriz é ${maior}, ele esta na posição [${l2}, ${c2}] da matriz.`);

*/
console.clear();
var teclado = require("Prompt-sync")();
var matriz = [];
var linha = 3;
var coluna = 3;
for (var l = 0; l < linha; l++) {
    matriz[l] = [];
    for (var c = 0; c < coluna; c++) {
        var numColuna = Math.floor(Math.random() * 10);
        matriz[l][c] = numColuna;
    }
}
console.log(matriz);
