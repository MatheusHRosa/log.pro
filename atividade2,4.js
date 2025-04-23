//Matheus Henrique
//24214290029
//4) Escreva um programa em JS em que o usuário digita um número inteiro. A saída no programa deve retornar uma mensagem dizendo se o número é par ou ímpar.
const prompt = require("prompt-sync")({sigint : true})
let n1 = parseFloat(prompt("Digite um número inteiro:"))

//Verifica se o número é par ou ímpar
if (n1 % 2 == 0)
    console.log("O número  é par.")
else
    console.log("O número é ímpar.")

