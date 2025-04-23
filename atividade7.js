//Matheus Henrique
//24214290029
//7) Escreva um programa JS, em que o usuário entra com um número inteiro indicando um ano entre 1970 e 2025, inclusive. Informe ao usuário se o ano entrado corresponde a um ano de Copa do Mundo.
const prompt = require("prompt-sync")({sigint : true})
var anoInicial = 1930;
var anoFinal = 2025;
let ano = parseInt(prompt("Digite um ano entre 1970 e 2025:"));
if (ano >= anoInicial && ano <= anoFinal){
    if (ano % 4 === 2) {
        console.log(`O ano ${ano} corresponde a um ano de Copa do Mundo!`);
    } else {
        console.log(`O ano ${ano} NÃO corresponde a um ano de Copa do Mundo.`);
    }
} else {
    console.log("Por favor, digite um ano válido entre 1970 e 2025.");
}