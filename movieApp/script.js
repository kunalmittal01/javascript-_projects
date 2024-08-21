let menu = document.getElementsByClassName("menu")[0];
let disp = document.getElementsByClassName("movies")[0];
let search = document.getElementById("search");
let searchbtn = document.getElementById("searchbtn");

document.querySelector("nav").style.height = '65px';

document.querySelector(".menu-btn").onclick = ()=> {
    if(document.querySelector("nav").style.height == '65px') {
        document.querySelector("nav").style.height = '9.5rem';
        document.querySelector(".menu-btn").innerText = "X";
        document.querySelector("nav").style.transition = 'all 1s ease';
    }

    else if(document.querySelector("nav").style.height == '9.5rem') {
        let i = document.createElement('i');
        i.setAttribute('class','fa-solid fa-bars');
        document.querySelector(".menu-btn").innerText = '';
        document.querySelector(".menu-btn").appendChild(i);
        document.querySelector("nav").style.height = '65px';
    }
}

let movie = [];
async function fetchResults(query) {
    console.log(query);
    
    let data = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=93e0121f`);
    let res = await data.json();
    console.log(res);
    return res;
}

async function updateMoviesData(query) {
    let resp = await fetchResults(query);
    console.log(resp);
    resp.Search.forEach(resp => {
        obj = {};
        obj.title = resp.Title;
        obj.image = resp.Poster;
        obj.id = resp.imdbID;
        movie.push(obj);
    });   
}

function displayMovie() {
    disp.innerHTML = '';
    movie.forEach(obj => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="image">
            <img src="${obj.image}" alt="${obj.title}">
        </div>
        <div class="info">    
            <h3>${obj.title}</h3>
            <button class="view" onclick="viewDetails('${obj.id}')">View Details</button>
            <button class="fav-grp" onclick="addFav('${obj.id}')">Add to Favorites</button>
        </div>    
        `
        div.classList.add('movie');
        disp.appendChild(div);
    });
}

window.onload = async()=>{
    await updateMoviesData('marvel');
    displayMovie();
};

searchbtn.addEventListener('click', async function() {
    let query = search.value.toLowerCase();
    movie = [];
    await updateMoviesData(query);
    displayMovie();
});

function viewDetails(id) {
    window.location.href = `details.html?id=${id}`;
}

function addFav(id) {
    let favorities = JSON.parse(localStorage.getItem('favorities')) || [];
    let msg = document.getElementsByClassName('msg')[0];
    let mssg = document.getElementById('mssg');

    if(favorities.includes(id)) {
        msg.style.display = "flex";
        mssg.innerText = "Already added to Favorites!";
        setTimeout(() => {
            msg.style.display = "none";
        }, 2000);
    }
    
    else {
        msg.style.display = "flex";
        mssg.innerText = "Added to Favorites!";
        setTimeout(() => {
            msg.style.display = "none";
        }, 2000);
        favorities.push(id);
        localStorage.setItem('favorities', JSON.stringify(favorities));
    }
}

document.getElementById('cross').onclick = () => {
    document.getElementById('cross').parentElement.style.display = 'none';
};
