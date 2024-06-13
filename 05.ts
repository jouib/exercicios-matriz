// 5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.

// Nome: Joui Bomfim Mendonça


console.clear();
let teclado = require (`prompt-sync`)();
let matriz: number [][] = new Array (3);

for (let a = 0; a <= 3; a++){
    matriz[a] = new Array (3);

    for (let b = 0; b <= 3; b++){
        let numero : number = teclado (`Digite o número que vai estar no endereço [${a}, ${b}] da matriz: `);
            matriz [a][b] = numero;
    }
}

console.log(matriz);