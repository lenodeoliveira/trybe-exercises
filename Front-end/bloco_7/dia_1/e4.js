
const searchX = word => {

    let str = 'Tryber x aqui!'; 
    let result;
    for (let index = 0; index < str.length; index++) {   
        if(str[index] === 'x'){
            result = str.replace(str[index], word);
        }
    }
    console.log(result);
}

searchX('Bebeto');