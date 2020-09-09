const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');

function changeColors () {
  caixaUm.style.backgroundColor = 'red';
  caixaDois.style.backgroundColor = 'yellow';
}
function trocaCor () {
  caixaDois.style.backgroundColor = 'blue';
}
//Crie seu event listener abaixo:
caixaUm.addEventListener('click',trocaCor);

//click duplo
caixaDois.addEventListener('dblclick',changeColors);
/*
Instruções (leia tudo)
Novamente dois quadrados, com nomes de Caixa 1 e Caixa 2:
Ao clicar uma vez na Caixa 1, a cor da Caixa 2 deve ser trocada para azul.
Ao dar um clique-duplo na Caixa 2, a Caixa 1 deve ser trocada para vermelho e a Caixa 2 para amarela.
Altere apenas o JavaScript, criando o event listener adequado e caso precise, visite o link com todos os elementos.
*/
