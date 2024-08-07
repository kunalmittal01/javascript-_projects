let btn = document.getElementById('send');
let disp = document.getElementsByClassName('disp')[0];
let feed = document.getElementById('feed');
let emj = document.getElementsByClassName('emoji');
let cont = document.getElementsByClassName('feedback')[0];

let len = feed.innerText.length;

Array.from(emj).forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        feed.innerText = `Feedback: ${ele.innerText}`;
        if(e.target.innerText === 'Unhappy') {
            console.log("bbbh");
            
            ele.classList.add('emj');
            emj[1].classList.remove('emj');
            emj[2].classList.remove('emj');
        }

       if(e.target.innerText == 'Neutral') {
            ele.classList.add('emj');
            emj[0].classList.remove('emj');
            emj[2].classList.remove('emj');
        }
        if(e.target.innerText == 'Satisfied') {
            ele.classList.add('emj');
            emj[0].classList.remove('emj');
            emj[1].classList.remove('emj');
        }
    });
});

btn.addEventListener('click',(e) => {
    if(len == feed.innerText.length) return;
    cont.style.display = 'none';
    disp.style.display = 'flex';
    });

    


