let cirback = document.getElementsByClassName('shape');
let disp = document.getElementsByClassName('display');
let cont = document.getElementsByClassName('cont');
// let colorarr = ['#A32323','#58B729','#C16AD2','#1F0A4D','#008000','#6A1877','#541D49','#8554C5','#16C0BC','#0032B5','#5BFB02','#F63143'];
let shapearr = ['circle(50% at 50% 50%)','polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)','polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)','polygon(50% 0%, 0% 100%, 100% 100%)','polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)','polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)','polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)','polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)','polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)','polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)','ellipse(25% 40% at 50% 50%)','polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)','polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)'];
let clrbtn = document.getElementById('color');
let shape = document.getElementById('cshape');

let getCode = ()=>{
    return Math.floor(Math.random()*255);
}
let getColor = ()=>{
    let val = getCode(); 
    return `rgb(${val}, ${val}, ${val})`;
}
clrbtn.addEventListener('click',function(e){
    cirback[0].style.backgroundColor = getColor();
});

shape.addEventListener('click',function(e){
    disp[0].style.clipPath = shapearr[Math.floor(Math.random() * shapearr.length)];
});

cont[0].style.display = 'none';
let click = document.getElementById('view');

click.addEventListener('click',function(e){
    cont[0].style.display = 'flex';
    click.style.display = 'none';
    cont[0].classList.add('animation');
});
