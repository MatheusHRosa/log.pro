/*let vogais = ["a", "e", "i", "o", "u"];
console.log(vogais[0]);
console.log(vogais[1]);
console.log(vogais[2]);
console.log(vogais[3]);
console.log(vogais[4]);

for (let index = 0; index < vogais.length; index++) {
    const element = vogais[index];
    console.log(element);
}
*/
/*for(let index=0; index < vogais.length; index++){
    const element = vogais[index];
    console.log(`A vogal #${index+1} é ${element}.`)
}*/

const prompt = require("prompt-sync")({sigint : true});
let vogais = ["a", "e", "i", "o", "u"];
let caractere = prompt("Digite um caractere:");
caractere = caractere.toLowerCase();
 if(caractere.length==1){
if(vogais.includes(caractere)) {
    console.log (`O caractere ${caractere} é uma vogal.`)
}else{
    console.log (`O caractere ${caractere} não é uma vogal.`)
}
 }else{
    console.log (`"${caractere}" não é uma vogal.`)
 }