//Matheus Henrique
// 24214290029

// 10) Formule um problema, daí resolva-o com um programa JS.
//Problema: Verificar se o numero é Primo
const prompt = require("prompt-sync")({sigint : true})
let numero = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));

    // Verificar se o número é menor que 2 (não é primo)
    if (numero <= 1) {
        alert(numero + " não é um número primo.");
        return;
    }

    // Verificar se o número é divisível por algum número entre 2 e o próprio número-1
    let ehPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    // Exibir se o número é primo ou não
    if (ehPrimo) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }