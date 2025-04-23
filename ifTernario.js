const prompt = require("prompt-sync")({sigint : true})
let cor = prompt("Digite uma cor (verde, amarelo ou vermelho):");
cor = cor.toLowerCase();
let mensagem = (cor == "verde") ? "Siga" :
((cor == "amarelo") ? "atenção":
 ((cor == "vermelho") ? "pare!" :
  "cor não válida"))
  console.log(`a cor ${cor} implica na mensagem "${mensagem}."`)
  