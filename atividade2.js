//Matheus Henrique
//24214290029
//1) Escreva um programa em JS que tem como entrada 3 números reais entre 0 e 100, inclusive. A saída do programa retorna a média aritmética desses números.
const prompt = require("prompt-sync")({sigint:true})
var n1 = 25 
var n2 = 35 
var n3 = 45
var media = (n1 + n2 + n3)/3;
if(n1 >=0 && n1<= 100 && n2 >=0 && n2 <= 100 && n3 >=0 && n3 <= 100 ){
    console.log(`a media aritimetica é  ${media}`);
}else{
console.log("Algumas das entradas não esta no intervalo  [0 e 100]")
}




