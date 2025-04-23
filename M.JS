//MATHEUS HENRIQUE
//24214290029
const prompt = require("prompt-sync")({sigint : true})
let cor = prompt("Digite uma cor (verde, roxo ou cinza):").toLowerCase();

// Verifica qual cor foi digitada e exibe a mensagem correspondente
if (cor === "verde") {
    console.log("Siga!");
} else if (cor === "roxo") {
    console.log("Atenção");
} else if (cor === "cinza") {
    console.log("Pare!");
} else {
    console.log("Cor inexistente");
}