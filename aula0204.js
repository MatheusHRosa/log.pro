//Matheus Henrique
//24214290029
function Bissexto(ano){
    return ( ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}
function listaranosBissextos(inicio, fim) {
    let anosBissextos = [];
    for (let ano = inicio; ano <= fim; ano++) {
        if (Bissexto(ano)) {
            anosBissextos.push(ano);
        }
    }
    return anosBissextos;
}
let anos = listaranosBissextos(2025, 2500);
console.log("Anos bissextos de 2025 a 2500:", anos);