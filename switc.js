const prompt = require("prompt-sync")({sigint : true})
let cor = prompt("Digite uma cor (verde, amarelo ou vermelho):");
cor = cor.toLowerCase();
var Cor = "vermelho";
var Cor = "verde";
var Cor = "amarelo";
switch (cor) {
  case "vermelho":
    mensage = "pare!";
    break;
  case "verde":
    mensage = "siga!";
    break;
    case "amarelo":
    mensage = "atenção";
    break;
  default:
    mensage = "digite uma cor entre verde, vermelho , amarelo!";
}
console.log(mensage);
