let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let country = document.getElementById('area');
let score = document.getElementById('score');
let addbtn = document.getElementById('button');
let disp = document.getElementById('display');
let delbtn = document.querySelectorAll('.del');
let data = [];

function displayPlayer() {
    let date = new Date();
    data.sort((a, b) => b.score - a.score);
    let player = "";
    data.forEach((ele,idx)=>{
        player += `<div data-index="${idx}" class="m-d">
        <div class="name"><p>${ele.fname} ${ele.lname}</p>
        <p>${date.getDate()}-${date.getMonth()}-${date.getFullYear()}</p>
        </div>
        <div class="cont-clr">${ele.country}</div>
        <div class="score">${ele.score}</div>
        <div><button class="del">X</button></div>
        <div><button class="inc">+5</button>
        <button class="dec">-5</button></div>
        </div>`
    });
    if(data.length > 0) {
        document.getElementById('display').style.border = '2px solid #1179CE';
    }
    else {
        document.getElementById('display').style.border = 'none';
    }
    disp.innerHTML = player;
}

addbtn.addEventListener('click', function(e){
    e.preventDefault();
    let obj = {
        fname: fname.value,
        lname: lname.value,
        country: country.value.trim(),
        score: score.value,
    };
    if(obj.fname == "" || obj.lname == "" || obj.score == "" || obj.country == "" || obj.country == "Select Country") {
        alert('Please fill all the fields');
        return;
    }

    data.push(obj);
    disp.innerHTML = '';
    fname.value = '';
    lname.value = '';
    country.value = '';
    score.value = '';

    displayPlayer();

});

disp.addEventListener('click', function(e) {
    let index = e.target.closest('.m-d').dataset.index;
    if(e.target.classList.contains('del')) {
        data.splice(index, 1);
    }

    else if(e.target.classList.contains('inc')){
        data[index].score = parseInt(data[index].score) + 5;
    }

    else if(e.target.classList.contains('dec')){
            if(data[index].score -5 > 0) {
            data[index].score = parseInt(data[index].score) - 5;
        }
    }
    displayPlayer();
});
