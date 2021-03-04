//Crie seu código abaixo dessa linha:
//botoes
const botao1 = document.querySelector('.botao1');
const botao2 = document.querySelector('.botao2');

//caixa de texto
const caixaTexto = document.querySelector('.caixa-texto');

//caixas
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');



//funcoes
function trocaCor () {
  caixaUm.style.backgroundColor = 'green';
}

function trocaTexto () {
  caixaDois.innerText = caixaTexto.value;
}

function alerta(){

    alert("Go Trybe!");
}

botao1.addEventListener('mouseover',trocaCor);

botao2.addEventListener('click',trocaTexto);

caixaTexto.addEventListener('keypress',alerta);

/*
Instruções (leia tudo)
Agora, uma caixa de texto, dois quadrados e dois botões, as instruções são as seguintes:
Ao passar o mouse no botão, troque a cor da caixa correspondente para verde.
Ao clicar no botão, troque o texto da caixa correspondente para o que estiver escrito na caixa de texto.
Mostre um alerta quando o usuário colar alguma informação dentro da caixa de texto escrito: "Go Trybe!"
Altere apenas o JavaScript, criando todo o necessário para o event listener funcionar adequadamente. */