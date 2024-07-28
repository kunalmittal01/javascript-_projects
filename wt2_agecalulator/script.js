let dob = document.getElementById('dobInput');
let btn = document.getElementById('calculatebtn');
let disp = document.getElementById('result');


btn.addEventListener('click', function(e){
    e.preventDefault();
    let today = new Date();
    let birthDate = new Date(dob.value);
    let birthd = birthDate.toString().split(' ')[2];
    let birthm = birthDate.getMonth() + 1;
    let birthy = birthDate.toString().split(' ')[3];

    let todayd = Number(today.toString().split(' ')[2]);
    let todaym = today.getMonth() + 1;
    let todayy = Number(today.toString().split(' ')[3]);

    let res;
    if(todayd < birthd){
        let v1 = todayd;
        let v2 = birthd;
        todaym--;
    }
    if(todaym < birthm){
        let v1 = todaym;
        let v2 = birthm;
        todayy-=1;
    }
    res = todayy - birthy;
    if(isNaN(res)){
        alert("Please enter birth date");
        return;
    }
    disp.innerHTML = `Your age is ${res} years.`;
});
