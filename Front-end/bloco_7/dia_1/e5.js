const skills = ['JavaScript','PHP', 'CSS', 'HTML', 'BULMA'];

const retornaSkills = skl => {
    console.log(`${skl} Minhas cinco principais habilidades são: 
${skills.sort().join('\n')}\n #goTrybe!`);
}


const searchX = word => {

    let str = 'Tryber x aqui!'; 
    let result;
    for (let index = 0; index < str.length; index++) {   
        if(str[index] === 'x'){
            result = str.replace(str[index], word);
        }
    }
    retornaSkills(result);

}

searchX('Bebeto');

