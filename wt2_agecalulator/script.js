let dob = document.getElementById('dobInput');
let btn = document.getElementById('calculatebtn');
let disp = document.getElementById('result');


btn.addEventListener('click', function(e){
    e.preventDefault();
    let today = new Date();
    let birthDate = new Date(dob.value);
    let birthd = birthDate.toString().split(' ')[2];
    let birthm = birthDate.toString().split(' ')[1];
    let birthy = birthDate.toString().split(' ')[3];

    let todayd = today.toString().split(' ')[2];
    let todaym = today.toString().split(' ')[1];
    let todayy = today.toString().split(' ')[3];

    let res = [];
    if(Number(todayd) < Number(birthd)){
        let v1 = Number(todayd);
        let v2 = Number(birthd);
        res.push(v1+30 - v2);
        todaym--;
    }
    if(Number(todaym) < Number(birthm)){
        let v1 = Number(todaym);
        let v2 = Number(birthm);
        res.push(v1 + 12 - v2);
        todayy--;
    }
    res.push(Number(todayy) - Number(birthy));
    let out = (res.length == 1)?res[0]:res[2];
    if(isNaN(out)){
        alert("Please enter birth date");
        return;
    }
    disp.innerHTML = `Your age is ${out} years.`;
});
