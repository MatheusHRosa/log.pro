//Matheus Henrique
//24214290029
//5) (Programa do semáforo) Escreva um programa em Javascript que pede para o usuário digitar umas dentre as cores verde, amarelo, e vermelho. Caso o usuário digite "verde", o programa deve retornar a mensagem "Siga!". Caso o usuário digite "amarelo", o programa deve retornar "Atenção". Caso o usuário digite "vermelho", o programa deve retornar "Pare!". Se por acaso o usuário digitar algo diferente das 3 cores anteriores, retorne a mensagem "Cor inválida entrada pelo usuário".
const prompt = require("prompt-sync")({sigint : true})
let cor = prompt("Digite uma cor (verde, amarelo ou vermelho):").toLowerCase();

// Verifica qual cor foi digitada e exibe a mensagem correspondente
if (cor === "verde") {
    console.log("Siga!");
} else if (cor === "amarelo") {
    console.log("Atenção");
} else if (cor === "vermelho") {
    console.log("Pare!");
} else {
    console.log("Cor inválida entrada pelo usuário");
}