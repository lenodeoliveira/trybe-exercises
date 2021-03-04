
const contadorClick = () => {
    
    div = document.querySelector('.cont');
    let clickCount = 0;
    const btn = document.querySelector('#btn-cont').addEventListener('click', function(){
        div.textContent = clickCount++;
    });

}
contadorClick();

