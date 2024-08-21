let favcont = document.getElementsByClassName('fav-cont')[0];
let favorities = JSON.parse(localStorage.getItem('favorities')) || [];
let message = document.getElementsByClassName('message')[0];
let search = document.getElementById('search');
let searchbtn = document.getElementById('searchbtn');

let nav = document.querySelector("nav");
let menuBtn = document.querySelector(".menu-btn");
nav.style.height = '65px';
document.querySelector(".menu-btn").onclick = ()=> {
    if(nav.style.height == '65px') {
        nav.style.height = '9.5rem';
        menuBtn.innerText = "X";
        nav.style.transition = 'all 1s ease';
    }

    else if(nav.style.height == '9.5rem') {
        let i = document.createElement('i');
        i.setAttribute('class','fa-solid fa-bars');
        menuBtn.innerText = '';
        menuBtn.appendChild(i);
        nav.style.height = '65px';
    }
}
let movieTitle = [];
async function displayFavorites() {  
    favorities = JSON.parse(localStorage.getItem('favorities')) || [];
    favorities.forEach(async function(id,idx) {
        let resp = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=93e0121f`);
        let obj = await resp.json();
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="image">
            <img src="${obj.Poster}" alt="${obj.Title}">
        </div>
        <div class="info">    
            <h3>${obj.Title}</h3>
            <button class="view" onclick="viewDetails('${obj.imdbID}')">View Details</button>
            <button class="fav-grp" onclick="delFav('${obj.imdbID}',this)">Remove Favorites</button>
        </div>    
        `
        movieTitle.push({[obj.Title]: id});
        div.classList.add('movie');
        favcont.appendChild(div);
    });
}

function viewDetails(id) {
    window.location.href = `details.html?id=${id}`;
}

function delFav(id,remBtn) {
    favorities = favorities.filter(item => item!== id);
    localStorage.setItem('favorities', JSON.stringify(favorities));
    remBtn.parentElement.parentElement.remove();
    if(favorities.length == 0) {
        favcont.innerHTML = '';
        message.style.display = 'flex';
        return; 
    }
}

window.onload = function() {
    message.style.display = 'none';
    if(favorities.length > 0) {
        displayFavorites();
    }

    else {
        message.style.display = 'flex';
        return;
    }
}

let  displaySearchResults = async(query)=>{
    let filteredMovies = movieTitle.filter(item => Object.keys(item).some(k => k.toLowerCase().includes(query)));
    favcont.innerHTML = '';
    filteredMovies.forEach(obj => {
        Object.values(obj).forEach(async id => {
            let resp = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=93e0121f`);
            let obj =  await resp.json();
            let div = document.createElement('div');
            div.innerHTML = `
            <div class="image">
                <img src="${obj.Poster}" alt="${obj.Title}">
            </div>
            <div class="info">    
                <h3>${obj.Title}</h3>
                <button class="view" onclick="viewDetails('${obj.imdbID}')">View Details</button>
                <button class="fav-grp" onclick="delFav('${id}',this)">Remove Favorites</button>
                `
                div.classList.add('movie');
                favcont.appendChild(div);            
        });
    });
}     

searchbtn.addEventListener('click', () => {
    favcont.innerHTML = '';
    let query = search.value.toLowerCase();
    if(query.length == 0) {
        displayFavorites();
        return;
    }
    displaySearchResults(query);
});