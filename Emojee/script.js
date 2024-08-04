let disp = document.getElementById('emojee-cont');
let all = document.getElementById('all');
let face = document.getElementById('face');
let heart = document.getElementById('heart');
let book = document.getElementById('book');
let hand = document.getElementById('hand');
let sport = document.getElementById('sport');
let flag = document.getElementById('flag');
let inp = document.getElementById('inp');

let div = document.createElement('div');

function display(emj){
    emj.forEach(function(emj) {
        let span = document.createElement('span');
        span.innerHTML = emj.emoji;
        span.style.cursor = 'pointer';
        span.addEventListener('click',()=>{
            navigator.clipboard.writeText(emj.emoji).then(function() {
                alert('copied to clipboard:' + emj.emoji);
            },function(err) {
                console.error('could not copy text:',err);
            })
        })
        disp.appendChild(span);
    });
}

function searchResults(query){
    let resultarr = emojiList.filter((v)=>{
        if(v.description.toLowerCase().indexOf(query) != -1){
            return true;
        }
        if(v.category.toLowerCase().indexOf(query) != -1){
            return true;
        }
        if(v.aliases.some(val=>val.startsWith(query)))
        {
            return true;
        }
});
display(resultarr);
}
window.onload = ()=> display(emojiList);

face.addEventListener('click',()=>{
    disp.innerHTML = '';
    return searchResults('face')
}); 
   
all.addEventListener('click',()=>{
    disp.innerHTML = '';
    return display(emojiList);
}); 
   
heart.addEventListener('click',()=>{
    disp.innerHTML = '';
    return searchResults('heart');
}); 
   
book.addEventListener('click',()=>{
    disp.innerHTML = '';
    return searchResults('book');
}); 
   
hand.addEventListener('click',()=>{
    disp.innerHTML = '';
    return searchResults('hand');
}); 
   
sport.addEventListener('click',()=>{
    disp.innerHTML = '';
    return searchResults('sport');
}); 
   
flag.addEventListener('click',()=>{
    disp.innerHTML = '';
    return searchResults('flag');
}); 
   
inp.addEventListener('keyup',()=>{
    disp.innerHTML = '';
    return searchResults(inp.value.toLowerCase());
}); 
   


    


