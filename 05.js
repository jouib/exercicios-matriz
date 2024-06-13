// 5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.
// Nome: Joui Bomfim Mendonça
console.clear();
var teclado = require("prompt-sync")();
var matriz = new Array(3);
for (var a = 0; a <= 3; a++) {
    matriz[a] = new Array(3);
    for (var b = 0; b <= 3; b++) {
        var numero = teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(a, ", ").concat(b, "] da matriz: "));
        matriz[a][b] = numero;
    }
}
console.log(matriz);
