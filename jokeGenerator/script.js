let btn = document.getElementById('jokebtn');
let disp = document.querySelector('.disp');
let h1 = document.querySelector('h1');
let toggle = document.getElementById('toggle');

let fetchJoke = ()=> {
    disp.innerHTML = 'updating...';
    fetch('https://official-joke-api.appspot.com/jokes/random/250').then((response)=>{
        return response.json();
    }).then((data)=>{
        let joke = Math.floor(Math.random()*250);
            disp.innerHTML = `<p>setup: ${data[joke].setup}<br><br>punchline: ${data[joke].punchline}</p>`;

     }).catch((err)=>console.log(err));

}

let randClr = setInterval(() => {
    h1.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
},1000);

btn.addEventListener('click', fetchJoke);

let tog = true, body = document.querySelector('body');
toggle.addEventListener('click',()=>{
    toggle.classList.toggle('change-mode');
    if(tog) {
        body.style = 'none';
        body.style.backgroundImage = 'linear-gradient(to bottom, black,brown)';
        tog = false;
    }
    else {
        body.style = 'none';
        body.style.backgroundImage = 'linear-gradient(to left bottom, lightblue, lightpink, lightblue)';
        tog = true;
    }
});

let font = document.getElementById('selectfont');

font.addEventListener('change',()=>{
    disp.style.fontSize = `${font.value}px`;
});

let audio = document.querySelector('.audio');

audio.addEventListener('click',()=>{
    let joke = disp.textContent;
    console.log(joke);
    
    let speech = new SpeechSynthesisUtterance(joke);
    speechSynthesis.speak(speech);
});