let disp = document.getElementsByClassName('cont')[0];
let count = 10;
const api_key = 'DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY';
async function fetchImages() {
    let data = await fetch(`https://api.unsplash.com/photos/random/?client_id=_${api_key}&count=${count}`);

    let image = await data.json();
    
    return image;
}

async function displayImage() {
    let data = await fetchImages();
    disp.innerHTML = data.map((image)=>{
        let div = document.createElement('div');
        let div2 = document.createElement('div');
        div2.appendChild(div);
        div.classList.add('image');
        div.innerHTML = 
        `<img src="${image.urls.full}">
    `
         return div2.innerHTML;
    }).join('');
}

window.onload = ()=> displayImage();

window.onscroll = function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        count += 3;
        displayImage();
    }  // End if  scroll to bottom of the page
}