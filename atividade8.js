//Matheus henrique
//242142900292
//8)Escreva um programa JS, em que o usuário entra com um número inteiro indicando um ano entre 1890 e 2025, inclusive. Informe ao usuário se o ano entrado corresponde a um ano de Jogos Olímpicos.
const prompt = require("prompt-sync")({sigint : true})
let ano = parseInt(prompt("Digite um ano entre 1890 e 2025:"));

// Verifica se o ano está no intervalo correto
if (ano >= 1890 && ano <= 2025) {
    // Verifica se o ano é múltiplo de 4 e corresponde a um ano de Jogos Olímpicos
    if (ano >= 1896 && (ano - 1896) % 4 === 0) {
        console.log(`O ano ${ano} corresponde a um ano de Jogos Olímpicos!`);
    } else {
        console.log(`O ano ${ano} NÃO corresponde a um ano de Jogos Olímpicos.`);
    }
} else {
    console.log("Por favor, digite um ano válido entre 1890 e 2025.");
}