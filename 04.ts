/* 4- Altere o código dois(2) desse conteúdo para funcionar com números, faça o teste se o 
laço de repetição referente a linha da matriz chega criar a quarta linha, salve dessa forma e anexe 
a atividade o arquivo .ts e um print da tela do cmd(prompt command) com o resultado do teste. */

// Nome: Joui Bomfim Mendonça


console.clear();
let teclado = require (`prompt-sync`)();
// declarando matriz usando o construtor array limitando a 3 linhas 
let matrizDois: number[][] = new Array(3);

for (let i = 0; i <= 4; i++){
    //Cria um Array vazio para preencher a linha correspondente ao i limitando a 3 linhas
    matrizDois[i] = new Array (3);

    for (let j = 0; j < 4; j++){
        //Atribuição via entrada de dados manual na variável nome
        let endereco: number  = parseInt(teclado(`Digite o endereço que vai estar no endereço [${i} , ${j}] da matriz: `));

        // Atribui na minhaMatriz do endereço dado por i e j
        matrizDois[i][j] = endereco;
    }
}

// imprime a matriz
console.log(matrizDois);