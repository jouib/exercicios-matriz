/* 4- Altere o código dois(2) desse conteúdo para funcionar com números, faça o teste se o
laço de repetição referente a linha da matriz chega criar a quarta linha, salve dessa forma e anexe
a atividade o arquivo .ts e um print da tela do cmd(prompt command) com o resultado do teste. */
// Nome: Joui Bomfim Mendonça
console.clear();
var teclado = require("prompt-sync")();
// declarando matriz usando o construtor array limitando a 3 linhas 
var matrizDois = new Array(3);
for (var i = 0; i <= 4; i++) {
    //Cria um Array vazio para preencher a linha correspondente ao i limitando a 3 linhas
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        //Atribuição via entrada de dados manual na variável nome
        var endereco = teclado("Digite o endere\u00E7o que vai estar no endere\u00E7o [".concat(i, " , ").concat(j, "] da matriz: "));
        // Atribui na minhaMatriz do endereço dado por i e j
        matrizDois[i][j] = endereco;
    }
}
// imprime a matriz
console.log(matrizDois);
