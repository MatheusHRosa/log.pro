//MATHEUS HENRIQUE
//24214290029' 8rf  ll 689 
//3)Crie um jogo, em que o usuário tem que descobrir pelo menos um dos 3 números premiados entre números inteiros de 1 a 100. Para tal fim, crie um programa em JS que peça para o usuário tentar adivinhar os números premiados com direito a 3 tentativas. Como saída do programa, informe ao usuário se os números escolhidos são premiados ou não. Como regra, o jogo se encerra quando ao menos um número premiado é escolhido.
const prompt = require("prompt-sync")({sigint : true});

let premiado1 = Math.floor(Math.random() * 100) + 1;
let premiado2 = Math.floor(Math.random() * 100) + 1;
let premiado3 = Math.floor(Math.random() * 100) + 1;

let acertou = false;

for (let tentativa = 1; tentativa <= 3; tentativa++) {
  let palpite = parseInt(prompt(`Tentativa ${tentativa} de 3: Coloque um número de 1 a 100:`));

  if (palpite === premiado1 || palpite === premiado2 || palpite === premiado3) {
    console.log(`Parabéns! O número ${palpite} é premiado!`);
    acertou = true;
    break;
  } else {
    console.log(`Número ${palpite} não é premiado.`);
  }
}

if (!acertou) {
  console.log(`As suas três chances acabaram. Você não conseguiu o número premiado.\nOs números premiados eram: ${premiado1}, ${premiado2}, ${premiado3}`);
}