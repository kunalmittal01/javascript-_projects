let dec = document.getElementsByClassName('decrement');
let inc = document.getElementsByClassName('increment');
let qty = document.getElementsByClassName('qty');
let prodcont = document.getElementsByClassName('product-cont')[0];
let disp = document.getElementsByClassName('qty-disp');
let prod1 = document.getElementsByClassName('disp1')[0];
let prod2 = document.getElementsByClassName('disp2')[0];
let prod3 = document.getElementsByClassName('disp3')[0];
let tot = document.getElementsByClassName('amount')[0];
let msg = document.getElementById('mssg');
// Array.from(dec).forEach(function(v,idx) {
//     v.addEventListener('click', function() {
//         if(cnt != 0){
//            cnt--;
//         }       
//         qty[idx].innerHTML = cnt;
        
// }   );
// });
// console.log(dec);
msg.style.display = 'none';
tot.style.display = 'none';
prod1.style.display = 'none';
prod2.style.display = 'none';
prod3.style.display = 'none';
let cnt1 = 0,qty1 = 0, cnt2 = 0,qty2 = 0, qty3 = 0,cnt3 = 0;
function decrement(cnt,id) {
    cnt--;
    if(id === 'one'){
      qty[0].innerHTML = cnt;
      qty1--;
    }

    if(id === 'two'){
        qty[1].innerHTML = cnt;
        qty2--;
    }

    if(id === 'three'){
        qty[2].innerHTML = cnt;
        qty3--;
    }
    return cnt;
}
function increment(cnt,id) {
    cnt++;
    if(id === 'ione'){
        qty[0].innerHTML = cnt;
        qty1++;
    }

    if(id === 'itwo'){
        qty[1].innerHTML = cnt;
        qty2++;
    }

    if(id === 'ithree'){
        qty[2].innerHTML = cnt;
        qty3++;
    }

    return cnt;
}
prodcont.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.id === 'one')
     {
        if(cnt1 != 0){
          cnt1 = decrement(cnt1,'one');
        }
     }
     if(e.target.id === 'ione')
     {
        cnt1 = increment(cnt1,'ione');
     }

     if(e.target.id === 'two')
        {
           if(cnt2 != 0)
             cnt2 = decrement(cnt2,'two');
        }
    if(e.target.id === 'itwo')
    {
        cnt2 = increment(cnt2,'itwo');
    }
     
     if(e.target.id === 'three')
     {
        if(cnt3 != 0)
             cnt3 = decrement(cnt3,'three');
     }
     if(e.target.id === 'ithree')
     {
        cnt3 = increment(cnt3,'ithree');
     }

     if((e.target.id === 'one' || e.target.id === 'ione') && (cnt1 > 0))
     {
        prod1.style.display = 'block';
        disp[0].innerText = `${qty1}*100`;
        
     }
     else if (cnt1 <= 0){
        prod1.style.display = 'none';
     }
    
     if((e.target.id === 'two' || e.target.id === 'itwo') && (cnt2 > 0)){
        prod2.style.display = 'block';
        disp[1].innerText = `${qty2}*200`;
     }
     else if(cnt2 <= 0){
        prod2.style.display = 'none';
     }
    
     if((e.target.id === 'three' || e.target.id === 'ithree') && (cnt3 > 0)){
        prod3.style.display = 'block';
        disp[2].innerText = `${qty3}*300`;
     }
     else if(cnt3 <= 0){
        prod3.style.display = 'none';
     }   
    
     if(cnt1 <= 0 && cnt2 <= 0 && cnt3 <= 0){
        tot.style.display = 'none';
        msg.style.display = 'block';
     }
     else{
        tot.style.display = 'block';
        msg.style.display = 'none';
        disp[3].innerText = `${cnt1*100 + cnt2*200 + cnt3*300}`;
     }

});


