const prompt = require("prompt-sync")({sigint : true})
let cor = prompt("Digite uma cor (verde, amarelo ou vermelho):");
cor = cor.toLowerCase();
console.log(
    cor === "verde" ? "siga.":
    cor === "amarelo" ? "atenção":
    cor === "vermelho" ? "pare!":
    console.log(`a cor ${cor} não é valida!`)
)

