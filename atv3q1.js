//MATHEUS HENRIQUE
//24214290029
const prompt = require("prompt-sync")({sigint : true});
let hora = parseInt(prompt("Digite a hora:"))
let minutos = parseInt(prompt("Digite os minutos:"));
let distancia = parseFloat(prompt("Digite a distancia(km):"));
let custoFinal, custoFixo, custokm;

if(hora >= 0 && hora <= 6 ){
    custoFixo = 5.30;
    custokm = 4.40;
    custoFinal = custoFixo + custokm*distancia;
}else if(hora >6 && hora <=18){
    custoFixo = 3.30;
    custokm = 3.80;
    custoFinal = custoFixo + custokm*distancia;
}else if(hora > 6 && hora <=24){
    custoFixo = 4.30;
    custokm = 4.10;
    custoFinal = custoFixo + custokm*distancia;
}else{
    console.log("Digite uma hora entre 0 e 23")
}
console.log(`horario ${hora} : ${minutos}: ${distancia}.
    custo final : ${custoFinal}.`)

