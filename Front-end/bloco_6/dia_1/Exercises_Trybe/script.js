

const estados = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
}



const comboEstados = document.querySelector('#estados');

comboEstados.addEventListener('click', function(){

    for (const key in estados) {
            
            let option = document.createElement('option');
            comboEstados.appendChild(option);
            //option.value = key;
            //option.innerText = estados[key];
            option.value = estados[key]
            option.innerText = key;
    }
})




function validaData(valor){

    let date = valor;
    let arr = new Array;
    let regxData = RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
    arr = date.split("/");
    erro = false;
    if(date.search(regxData)==-1){
        erro = true;
    }
    else if(((arr[1]==4)||(arr[1]==6)||(arr[1]==9)||(arr[1]==11))&&(arr[0]>30)) {
        erro = true;
    }
    else if(arr[1] == 2){
        if((arr[0]>28) && ((arr[2]%4)!=0)){
            erro = true;
        }
        if ((arr[0]>29)&&((arr[2]%4)==0)){
            erro = true;
        }
    }
    if(erro) {

        alert('Formato de data errado! deve ser dd/mm/aaaa');
        //campo.focus();
		valor.value = "";
		return false;
    }  

    console.log(valor)
    return true;

}


let campoData = document.getElementById('dataInicio')

campoData.addEventListener('blur', function(e){

     let data = e.target.value;
     console.log(data)
     validaData(data)
})

let btnEnv = document.getElementById('enviar')

btnEnv.addEventListener('click', function(e){
   
    formProcess();
    e.preventDefault()
});

function formProcess(){

    let capture = document.forms['input']['name'].value + '<br>';
    capture += document.forms['input']['email'].value + '<br>';
    capture += document.forms['input']['cpf'].value + '<br>';
    capture += document.forms['input']['endereco'].value + '<br>';
    capture += document.forms['input']['estados'].value + '<br>';
    capture += document.forms['input']['apartamento'].value + '<br>';
    capture += document.forms['input']['casa'].value + '<br>';
    capture += document.forms['input']['resumo'].value + '<br>';
    capture += document.forms['input']['cargo'].value + '<br>';
    capture += document.forms['input']['descCargo'].value + '<br>';
    capture += document.forms['input']['dataInicio'].value + '<br>';

    document.getElementById('outputDiv').innerHTML = capture;

}


