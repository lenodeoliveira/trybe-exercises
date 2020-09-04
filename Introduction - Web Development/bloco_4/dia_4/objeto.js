
let name = 'Milton';
let lastName = 'Nascimento';
let nickname = 'Bituca';
let age = 77;
let bestAlbuns = ['Travessia','Clube da Esquina','Minas'];

//criação do objeto
let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia','Clube da Esquina','Minas'],
    //adicionando outros objetos dentro de um objeto
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

//acessando os valores dentro de cada chave.
console.log('O cantor ' + singer.name + ' ' + singer.lastName + 'possui  ' + singer.age + ' anos');

//acessando por colchetes
console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + 'possui  ' + singer['age'] + ' anos');

//criando propriedades
singer['fulName'] = singer.name + ' ' + singer.lastName;

//console.table(singer);

//acessando objetos dentro de objetos
console.log('O cantor ' + singer.fulName + ' nasceu no estado do ' + singer.bornInfo.state);

