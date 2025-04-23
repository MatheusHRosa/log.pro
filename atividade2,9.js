//Matheus Henrique
//24214290029
//9) Escreva um programa JS cujas entradas sejam 3 notas de um estudante N1, N2, e N3, cujos valores estão entre 0 e 10, inclusive. O pesos das notas são  3, 3, e 4 respectivamente. O programa deve retornar o valor da média final e se o estudante foi aprovado ou não. Um estudante é reprovado quando sua média final é menor que 5.
const prompt = require("prompt-sync")({sigint : true})
let N1 = parseFloat(prompt("Digite a nota N1 (entre 0 e 10):"));
let N2 = parseFloat(prompt("Digite a nota N2 (entre 0 e 10):"));
let N3 = parseFloat(prompt("Digite a nota N3 (entre 0 e 10):"));

// Verifica se as notas estão no intervalo válido
if ((N1 >= 0 && N1 <= 10) && (N2 >= 0 && N2 <= 10) && (N3 >= 0 && N3 <= 10)) {
    // Pesos das notas
    let peso1 = 3, peso2 = 3, peso3 = 4;
    
    // Calcula a média ponderada
    let mediaFinal = (N1 * peso1 + N2 * peso2 + N3 * peso3) / (peso1 + peso2 + peso3);
    
    // Exibe a média final
    console.log(`A média final é: ${mediaFinal.toFixed(2)}`);
    
    // Verifica se o aluno foi aprovado ou reprovado
    if (mediaFinal >= 5) {
        console.log("O estudante foi aprovado!");
    } else {
        console.log("O estudante foi reprovado!");
    }
} else {
    console.log("Por favor, insira notas válidas entre 0 e 10.");
}