let vitorias = 20;
let derrotas = 5;

function subtracao (vitorias, derrotas ) {
    let saldoRank = vitorias - derrotas;
    return saldoRank;
}

let saldo= subtracao (vitorias, derrotas);

let nivel;


if (saldo < 10) {
    nivel = "ferro";
} else if (saldo >= 11 && saldo <= 20){
    nivel = "Bronze";
} else if (saldo >= 21 && saldo <= 50){
    nivel = "Prata";
} else if (saldo >= 51 && saldo <= 80){
    nivel = "ouro";
} else if (saldo >= 81 && saldo <= 90){
    nivel = "Diamante";
} else if (saldo >= 91 && saldo <= 100){
    nivel = "Lendário";
} else if (saldo >= 101) {
    nivel = "Imortal";
} 
 
console.log("O Herói tem de saldo de " + saldo + " está no nível de " + nivel + "!");
