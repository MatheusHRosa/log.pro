//Gabriella Rocha Rodrigues
//24214290028
//6) Escreva um programa JS para que o usuário entre com um número real positivo. i) Converta este número em inteiro ii) Verifique se o número do passo i) é múltiplo de 3. Caso positivo, retorne uma mensagem informando que o número é múltiplo de 3, caso contrário, informe que o número não é múltiplo de 3.
const prompt = require("prompt-sync")({sigint : true})
let numeroReal = parseFloat(prompt("Digite um número real positivo:"));
// Verifica se o número inserido é positivo
if (numeroReal > 0) {
    // Converte o número para inteiro
    let numeroInteiro = Math.floor(numeroReal); // Utilizando Math.floor() para arredondar para baixo
    console.log(`Número inteiro: ${numeroInteiro}`);
    // Verifica se o número inteiro é múltiplo de 3
    if (numeroInteiro % 3 === 0) {
        console.log("O número é múltiplo de 3.");
    } else {
        console.log("O número não é múltiplo de 3.");
    }
} else {
    console.log("Por favor, digite um número real positivo.");
}