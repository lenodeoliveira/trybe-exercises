
function indiceMaior(array){

    let meuArray = [];
    meuArray = array;
    let indice;
    for (let i = 0; i < meuArray.length; i++) {

        for (let j = 1; j < meuArray.length; j++) {

            if(meuArray[i] > meuArray[j]){
                indice = i;
            }
        }
    }
    return indice;
}

let meuArray = [2, 3, 6, 7, 1, 1];

console.log(indiceMaior(meuArray));