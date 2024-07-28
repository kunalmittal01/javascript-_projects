let name = document.getElementById('key_name');
let disp = document.getElementById('key_name_disp');
let code = document.getElementById('key_code');
let press = document.getElementById('press');
let audio = document.getElementById('audio');
let d; 

document.addEventListener('keydown', (e)=>{
    if(e.ctrlKey){
        d = `ctrl + ${e.key}`;
    }
    else if(e.altKey){
        d = `alt + ${e.key}`;
    }
    else if(e.shiftKey){
        d = `shift + ${e.key}`;
    }
    else{
        d = e.key; 
    }
    audio.play();
    press.innerText = 'You pressed';
    disp.innerText = d;
    code.innerText = e.keyCode;
    code.style.fontSize = '5rem';
});