const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('click Hamburger menu');

    if(header.classList.contains('open')){
        body.classList.remove('noscroll'); // habilita scroll com menu fechado
        header.classList.remove('open'); // fechando hamburger menu\
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })

    }
    else {
        body.classList.add('noscroll'); //sem rolagem de tela com o menu aberto
        header.classList.add('open'); // abrindo hamburger menu 
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
});