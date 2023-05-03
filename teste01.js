"use strict"   //modo estrito para melhorar o código, obriga a declarar variaveis 


/* ESTUDO DE VARIÁVEIS: 
let = usada por exemplo dentro de um if, não consegue ser acessada por um console.log fora do escopo
var = acessa a variável de dentro de qualquer bloco, inclusive dentro de if
const = o valor colocado não pode ser alterado ao longo do programa
 */

let nome1 = "mudança de nome na variável"
nome1 = "alteração 1"
nome1 = "alteração para números automática"   //conversão automática para número
nome1 = "18"

console.log(nome1)

const nome2 = "Não pode ser alterado mais"
console.log(nome2)

function teste(){
    let nome = "Nick"

    if(true){
        console.log("Dentro do if da function Teste: " + nome)
    }

    console.log("Dentro da function Teste: " + nome)
}

teste()

console.log("Fora do bloco da function Teste" + nome)

// teste de acesso a variáveis

