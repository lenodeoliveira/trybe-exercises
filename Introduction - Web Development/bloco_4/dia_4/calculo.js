//função de adição

function calculo(operacao, valor1, valor2,){
    let resultado;
    if(operacao === "-"){

        resultado = valor1 - valor2;
    }
    else if(operacao === "+"){
        resultado = valor1 + valor2;
    }
    else if(operacao === "*"){
        resultado = valor1 * valor2;
    }
    else if(operacao === "/"){
        resultado = valor1 / valor2;
    }else{

        console.log('Operacao não reconhecida.' + operacao);
    }

    console.log(resultado);
}

calculo("*", 10,2);