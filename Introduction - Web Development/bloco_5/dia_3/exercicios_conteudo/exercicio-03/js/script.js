const caixaTexto = document.querySelector('.caixa-texto');
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');

function trocaTextoA () {
  caixaUm.innerText = caixaTexto.value;
}
function trocaTextoB () {
  caixaDois.innerText = caixaTexto.value;
}
//Crie seu event listener abaixo:
caixaTexto.addEventListener('keypress',trocaTextoA);

caixaDois.addEventListener('click',trocaTextoB);

/*Instruções (leia tudo)
Agora, uma caixa de texto e dois quadrados, as instruções são as seguintes:
Ao digitar alguma coisa na caixa de texto, o texto da caixa 1 seja alterado para o que foi escrito dentro da caixa letra a letra, enquanto você digita.
Ao clicar em qualquer lugar fora da caixa de texto após digitar alguma coisa na mesma, o texto da Caixa 2 seja alterado. */