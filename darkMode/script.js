let btn = document.getElementsByClassName('switch');
let press = document.getElementById('btn');
let body = document.getElementsByTagName('body');
let txt  = document.getElementById('txt');

let anim = true;
btn[0].addEventListener('click',(e)=>{
    body[0].classList.toggle('dark-mode');
    if(anim){
        press.classList.add('animation1');
        press.classList.remove('animation2');
        anim = false;
    }
    else{
        press.classList.add('animation2');
        press.classList.remove('animation1');
        anim = true;
    }
    btn[0].classList.toggle('switchclr');
    txt.classList.toggle('light-mode');
    txt.classList.add('move');
});