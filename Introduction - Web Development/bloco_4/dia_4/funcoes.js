//funções em JS

let statusCarro = "desligado";
let aceleracao = 0;
let rotacaoVolante = 0;

function LigarDesligar(){
    if (statusCarro === "desligado") {
        statusCarro = "ligado";
    }else{
        statusCarro = "desligado";
    }
    return statusCarro;
}

function acelerar(incremento){

    aceleracao = aceleracao + incremento;
    return "Acelerando a " + aceleracao + " m/s²";
}

function frear(decremento){
    aceleracao = aceleracao - decremento;
    return "Desacelerando para " + aceleracao + " m/s²";
}

function girarVolante(anguloRotacao){   
    rotacaoVolante = anguloRotacao;

    return rotacaoVolante + "º";
}

LigarDesligar();