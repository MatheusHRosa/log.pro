//MATHEUS HENRIQUE
//24214290029

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("Digite um número de 1 a 7 para saber o dia da semana:"));
let diaDaSemana = "";

switch (numero) {
  case 1:
    diaDaSemana = "Domingo";
    break;
  case 2:
    diaDaSemana = "Segunda-feira";
    break;
  case 3:
    diaDaSemana = "Terça-feira";
    break;
  case 4:
    diaDaSemana = "Quarta-feira";
    break;
  case 5:
    diaDaSemana = "Quinta-feira";
    break;
  case 6:
    diaDaSemana = "Sexta-feira";
    break;
  case 7:
    diaDaSemana = "Sábado";
    break;
  default:
    diaDaSemana = "Dia inválido";
    break;
}

console.log("Resultado: " + diaDaSemana);
