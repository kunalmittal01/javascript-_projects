let hr = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");
let ms = document.getElementsByClassName("ms")[0];
let start = document.getElementById("startBtn");
let pause = document.getElementById("pauseBtn");
let reset = document.getElementById("resetBtn");
let msd = document.getElementById('msd');
let disp = document.getElementById('disp');
let rec = document.getElementById('record');
let clr = document.getElementById('clear');
let theme = document.getElementById('themeSelector');
let cont = document.getElementsByClassName('watch-cont')[0];

let milsec = 0, secCount = 0,mint = 0, hour = 0,timer;
let startTimer = ()=>{
     timer = setInterval(() => {
        msd.innerText = `${milsec++}`.toString().padStart(2,'0');
        if(milsec == 99){          
            sec.innerText = `${++secCount}`.toString().padStart(2,'0');
            milsec = 0;
            msd.innerText = "00";
        }
        if(secCount == 60){
            secCount = 0;
            min.innerText = `${++mint}`.toString().padStart(2,'0');
        }
        if(min == 60) {
            min = 0;
            hr.innerText = `${++hour}`.toString().padStart(2,'0');
        }
  },10);
};

start.addEventListener("click",() => {
    start.classList.add("opacity");
    pause.classList.remove("opacity");
    reset.classList.remove("opacity");
    ms.style.display = 'flex';
    startTimer();
});

pause.addEventListener("click",() => {
    pause.classList.add("opacity");
    start.classList.remove("opacity");
    reset.classList.remove("opacity");
    clearInterval(timer);
});

reset.addEventListener("click",() => {
    reset.classList.add("opacity");
    start.classList.remove("opacity");
    pause.classList.remove("opacity");
    clearInterval(timer);
    ms.style.display = 'none';
    milsec = 0;
    msd.innerText = '00';
    secCount = 0;
    sec.innerText = '00';
    mint = 0;
    min.innerText = '00';
    hour = 0;
    hr.innerText = '00';
});

let display = (arr)=>{
    disp.innerHTML = '';
    arr.forEach((item,index) => {
        let div = document.createElement('div');
        div.classList.add('flex');
        div.innerText = `Time: ${item}`;
        disp.appendChild(div);
    });
}

let arr = [];
rec.addEventListener("click",() => {
    let time = `${hr.innerText}:${min.innerText}:${sec.innerText}.${msd.innerText}`;

    arr.push(time);
    display(arr);
});

clr.addEventListener("click",() => {
    arr = [];
    disp.innerHTML = '';
});

theme.addEventListener("change",() => {

    let value = theme.value;
    console.log(value);
    
    if(value == 'default') {
        cont.className = "";
        cont.classList.add("watch-cont");
    }
    cont.className = "";
    cont.classList.add(`stopwatch-${value}`);
});
    