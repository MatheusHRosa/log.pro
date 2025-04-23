const prompt = require('prompt-sync')({sigint:true})
let anoInicial = parseInt(prompt("Digite o ano inicial:"))
let anoFinal = parseInt(prompt("Digite o ano final:"))

for(let ano = anoInicial ; ano <= anoFinal ; ano++){
if( ano >= 1930 && ano % 4 ==2 && ano  != 1942 && ano!= 1946){
    console.log(`No ano ${ano} ocorreram jogos olimpicos`)
    };
}
console.log(ano)