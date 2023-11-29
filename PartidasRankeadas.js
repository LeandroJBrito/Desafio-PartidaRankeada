console.log("Partidas Rankeadas")

let resultado = vitoriasDerotas(100,10)

function vitoriasDerotas( vitorias  , derrotas){
    let rankeada = vitorias - derrotas
    return rankeada
}
console.log(resultado)

    if(resultado <=10){
        nivel = "Ferro"
    } else if (resultado > 10 && resultado <=20){
        nivel="Bronze"
    } else if (resultado >= 20 && resultado <=50){
        nivel="Prata"
    } else if (resultado> 50 && resultado <=80){
        nivel="Ouro"
    } else if(resultado > 80 && resultado <=90){
        nivel="Diamante"
    } else if(resultado > 90 && resultado <=100){
        nivel="Lendário"
    }else {
        nivel="Imortal"
    }

    console.log(`O Heroi tem o saldo de ${resultado} vitórias e está no nivel ${nivel}`)