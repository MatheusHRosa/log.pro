//Matheus Henrique
//24214290029
//3) Escreva um programa em JS que calcule a média aritmética ponderada. Como entrada  serão 3 valores entre 0 e 10, e 3 pesos entre 0 e 1, cuja soma seja 1
const prompt = require("prompt-sync")({sigint : true})
var n1 =  parseFloat(prompt("Digite o primeiro valor entre 0 e 10:"));
var p1 =  parseFloat(prompt("Digite o peso do primeiro valor entre 0 e 1:"));
var n2 =  parseFloat(prompt("Digite o segundo valor entre 0 e 10:"));
var p2 =  parseFloat(prompt("Digite o peso do segundo valor entre 0 e 1:"));
var n3 =  parseFloat(prompt("Digite o terceiro valor entre 0 e 10:"));
var p3 =  parseFloat(prompt("Digite o peso do terceiro valor entre 0 e 1:"));
let mediaponderada = (n1*p1 + n2*p2 + n3*p3);
if(n1 >=0 && n1<= 10 && n2 >=0 && n2 <= 10 && n3 >=0 && n3 <= 10 && p1 >=0 && p1<= 1 && p2 >=0 && p2 <= 1 && p3 >=0 && p3 <= 1){
    console.log(`A media ponderada é: ` + mediaponderada)
}else{
    console.log("insira valores entre 0 e 10 e pesos entre 0 e 1, cuja a soma seja igual a 1.")
}