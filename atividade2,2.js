//Matheus Henrique
//24214290029
//2)Escreva um programa em JS em que o usuário entra com 3 números reais entre 0 e 100, inclusive. A saída do programa retorna a média aritmética desses números.
const prompt = require("prompt-sync")({sigint : true});

var n1 = parseFloat(prompt("Digite um número entre 0 a 100, inclusive:"));
var n2 = parseFloat(prompt("Digite um número entre 0 a 100, inclusive:"));
var n3 = parseFloat(prompt("Digite um número entre 0 a 100, inclusive:"));
let media = (n1 + n2 + n3)/3;
if(n1 >=0 && n1<= 100 && n2 >=0 && n2 <= 100 && n3 >=0 && n3 <= 100){
    console.log (`A media aritmetica entre os numeros ${n1}, ${n2}, ${n3} é ${media}`)

}else{
    console.log ("Algumas das entradas não esta no intervalo  [0 e 100]")
}

//console.log(253545/3)