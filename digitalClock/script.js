let hr = document.getElementById('h-d');
let min = document.getElementById('m-d');
let sec = document.getElementById('s-d');
let grt = document.getElementById('greet');
let time = new Date();

function updateTime() {
    time = new Date();
    
    if(time.getHours() >= 18 || time.getHours() <= 6) {
        document.querySelector('body').style.backgroundImage = 'url("asseets/night.jpg")';
    }
    else if(time.getHours() > 6) {
        document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")';
    }
    hr.innerText = (time.getHours() > 12? time.getHours() - 12: time.getHours()).toString().padStart(2,'0');
    min.innerText = time.getMinutes().toString().padStart(2, '0');
    sec.innerText = time.getSeconds().toString().padStart(2, '0');
}
setInterval(updateTime, 1000);

if(time.getHours() < 12) {
    document.getElementById('pm').innerText = 'AM';
}
else {
    document.getElementById('pm').innerText = 'PM';
}
let greeting = ()=>{
    let hours = time.getHours();
    if(hours >= 5 && hours < 12) {
        grt.innerText = 'Good Morning!';
    }
    else if(hours >= 12 && hours < 18) {
        grt.innerText = 'Good Afternoon!';
    }
    else if(hours >= 18 && hours < 24) {
        grt.innerText = 'Good Evening!';
    }
    else {
        grt.innerText = 'Good Night!';
    }
};
greeting();

const timeFacts = [
    "The concept of time zones was first proposed by Sir Sandford Fleming in 1878.",
    "The Earth's rotation is gradually slowing down, making days slightly longer over time.",
    "A day on Venus is longer than a year on Venus.",
];

function showRandomFact() {
    let randomFact = timeFacts[Math.floor(Math.random() * timeFacts.length)];
    document.getElementById('facts').innerText = randomFact;
}

setInterval(showRandomFact, 10000); 

var stopCount = function(){};

function startCountdown(eventDate) {
    let countDownDate = new Date(eventDate).getTime();
    console.log(countDownDate);
    
    let countdownFunction = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
   
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        if (distance < 0) {
           clearInterval(countdownFunction);
            document.getElementById("countdown").innerText = "EXPIRED";
        }
        clr.addEventListener('click',()=>{clearInterval(countdownFunction);
            document.getElementById("countdown").innerText = "CLEARED";
        });
    }, 1000);
}
let day = document.getElementById('din'), hour=document.getElementById('ghante'),mint = document.getElementById('minute'),secd = document.getElementById('second'), month = document.getElementById('month'), year = document.getElementById('year');

let strt = document.getElementById('start')
let clr = document.getElementById('clear');

strt.addEventListener('click',()=>{
    console.log(`${month.value} ${day.value}, ${year.value} ${hour.value}:${mint.value}:${secd.value}`);

    startCountdown(`${month.value} ${day.value}, ${year.value} ${hour.value}:${mint.value}:${secd.value}`);
});

//  clr.addEventListener('click',countdownFunction(true))
// console.log(month.value);

// startCountdown("Dec 31, 2024 23:59:59");


