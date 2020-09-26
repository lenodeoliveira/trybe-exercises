
const adicionarText = () => {

    const textOla = [];
    const input = document.querySelectorAll('.right-content input');
    
    for (let i = 0; i < input.length; i += 1) {
      
         if(input[i].getAttribute('type') !== 'password' ){
             textOla.push(input[i].value);
         }
      
    }
    
    welcome(textOla);
} 


const welcome = (textOla) => {
   
  const input = document.querySelectorAll('.right-content input');

  for(let i=0; i< input.length; i+=1){

       input[0].value = 'Olá, ' + textOla[0];
       input[3].value = '';
       break;
   }

}

const btnEnv = document.querySelector('#facebook-register');

btnEnv.addEventListener('click', function(event){
  event.preventDefault()
  adicionarText();

});