
const btEnv = document.querySelector('#btEnv');
const inputForm = document.querySelectorAll('.input-form');
const response = document.querySelector('#response');
const comboEstados = document.querySelector('#estados');
const campoData = document.getElementById('dataInicio')
const btnReset = document.getElementById('btReset');

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

document.getElementById('dataInicio').DatePickerX.init({
    format: 'dd/mm/yyyy',
    mondayFirst: false,
    weekDayLabels: ['Seg', 'Terç', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    singleMonthLabels: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
});

function createDivContent() {

    //e.preventDefault();

    for (let index = 0; index < inputForm.length; index++) {
    
        const divContent = document.createElement('div');
        divContent.innerText = inputForm[index].value;
        response.appendChild(divContent)

    }
    console.log(response);
}

function carregaEstados(){
    for (const key in estados) {
            
            let option = document.createElement('option');
            comboEstados.appendChild(option);
            option.value = estados[key]
            option.innerText = key;
    }
}

btEnv.addEventListener('click', function(e){
    createDivContent();
    
})

btnReset.addEventListener('click', limparDiv);

function limparDiv(){

    response.innerHTML = '';
}

window.onload = function(){
    carregaEstados();

}

new window.JustValidate('.js-form', {
    rules: {
       name:{
           required: true,
           maxLength: 40
       },
       email: {

           required: true,
           email: true,
           maxLength: 50
       },
       cpf: {

           required: true,
           maxLength: 11
       },
       endereco: {

           required: true,
           maxLength: 200
       },

       cidade: {

           required: true,
           maxLength: 28
       }, 

       estados: {

           required: true,

       },
       radio: {
           required: true
       },
       resumo: {

           required: true,
           maxLength: 1000
       },
       cargo: {
           required: true,
           maxLength: 40
       },
       descriCargo: {

           required: true,
           maxLength: 500
       },

       dataInicio: {

        required: true
       }

    }
});
