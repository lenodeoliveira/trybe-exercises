//for-in

const pessoa = {

    nome:'Lennon',
    idade: 28

}

for (let chave in pessoa) {
    console.log(pessoa[chave]);
}

//acessando um array
const cores = ['Vermelho','Azul','Preto','Verde'];

for (let indice in cores) {
    console.log(indice,cores[indice]);
}