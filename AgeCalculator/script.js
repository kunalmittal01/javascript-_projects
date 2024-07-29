let yd = document.getElementById('y-d');
let md = document.getElementById('m-d');
let dd = document.getElementById('d-d');
let btn = document.getElementById('cal-btn');
let inp = document.getElementById('inp');

let cont = document.getElementsByClassName('cont');
cont[0].style.display = 'none';

document.getElementById('click').addEventListener('click',(e) => {
    cont[0].style.display = 'block';
    document.getElementById('click').style.display = 'none';
}); 
btn.addEventListener('click', function(e){
    let td = new Date();

    let bd = Number(inp.value.split('-')[2]);
    let bm = Number(inp.value.split('-')[1]);
    let by = Number(inp.value.split('-')[0]);
    console.log(by);
    let todayMonth = td.getMonth() + 1;
    let todayDate = td.getDate();
    let todayYear = td.getFullYear();
    
    if(by > todayYear){
        alert("Not Born yet!");
        return;
    }

    let res = [];
    if(todayDate < bd){
        res.push(todayDate + 30 - bd);
        todayMonth--;
    }
    else{
        res.push(todayDate - bd);
    }
    
    if(todayMonth < bm){
        res.push(todayMonth + 12 - bm);
        todayYear--;
    }
    else{
        res.push(todayMonth - bm);
    }

    if(by != 0){
        res.push(todayYear - by);
    }    
    else{
        res.push('NaN');
    }
    yd.innerText = res[2];
    md.innerText = res[1];
    dd.innerText = res[0];
        
});