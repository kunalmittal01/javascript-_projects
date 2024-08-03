let note = document.getElementById('note');
let disp = document.getElementById('notes-wrap');

let addbtn = document.getElementById('add-btn');
let clr = document.getElementById('choose-clr');
let inp = document.getElementById('input');
let list = document.getElementsByClassName('format-list')[0];

let inpValue;
// list.style.display = 'none';

let formatbtn = document.getElementById('formatbtn');
    let bold = document.getElementById('bold');
    let italic = document.getElementById('italic');
    let underline = document.getElementById('underline');

    // let list = document.getElementsByClassName('format-list')[0];
    // list.style.display = 'block';
    let apply = document.getElementById('apply');
    formatbtn.addEventListener('click', function(e) {  
        // list.style.display = 'block'; 
        list.classList.add('slide');
        apply.addEventListener('click', function(){
            // let start = inp.selectionStart;
            // let end = inp.selectionEnd;
            // let inpValueStart =  inp.value.substring(0, start);  
            //     let inpValueEnd = inp.value.substring(end, inp.value.length);    
            // if(inp.selectionStart != inp.selectionEnd) {        
            //     inp.value = inp.value.replace(inp.value, selectedTxt);
            //     console.log(inp.value);
            // }
            if(bold.checked){
                // console.log(inp.value);
                 inp.classList.add('bold-text');
            }
            else{
                inp.classList.remove('bold-text');
            }
            if(italic.checked){
                inp.classList.add('italic-text');
            }
            else{
                inp.classList.remove('italic-text');
            }
            if (underline.checked) {
                inp.classList.add('underline-text');
            }
            else{
                inp.classList.remove('underline-text');
            }
            let x = document.getElementById('cross');
        //    let finalInp = inpValueStart + inp.value + inpValueEnd;

        //    inp.value = finalInp;
        });
});

cross.addEventListener('click',()=>{
    list.classList.remove('slide');
});

let dispArr = [];
function updateDisp(note){
    if(dispArr.length == 0){
        note.style.display = 'block';
    }
    else{
        note.style.display = 'none';
    }
}
function addnotes(e) {
    if(inp.value == ''){
        alert('Please enter a note');
        return;
    }
    note.style.display = 'none';
    let color = clr.value;
    let div = document.createElement('div');
    let p = document.createElement('p');
    let px = document.createElement('p');
    p.textContent = inp.value;
    p.className = inp.className;
    p.draggable = 'true';
    px.textContent = 'x';
    px.style.fontSize = '20px';
    px.style.cursor = 'pointer';
    div.appendChild(p);
    div.appendChild(px);
    div.style.display = 'flex';
    div.style.gap = '2rem';
    div.style.backgroundColor = color;
    if(color === '#000000')
        div.style.color = 'white';
    div.draggable = true;
    div.addEventListener('dragstart', function(e) {
        let data = e.target.dataTransfer.setData('text',e.target.id);       
    });
    disp.appendChild(div);
    div.style.width = 'fit-content';
    div.style.padding = '1rem 0.5rem';
   
    inp.value = "";
    dispArr.push(div);
    px.addEventListener('click', function(ev) {
        div.style.display = 'none';
        dispArr.pop();
        updateDisp(note);
    });

}

addbtn.addEventListener('click', addnotes);