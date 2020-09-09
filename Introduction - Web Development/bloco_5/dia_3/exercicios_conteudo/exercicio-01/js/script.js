const caixaUm = document.querySelector(".caixa1");
const caixaDois = document.querySelector(".caixa2");

function trocaCor() {
  caixaDois.style.backgroundColor = "cyan";
}
//Crie seu event listener abaixo:
caixaUm.addEventListener("click",trocaCor);