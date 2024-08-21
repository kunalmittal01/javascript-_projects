let favcont = document.getElementsByClassName('fav-cont')[0];
let favorities = JSON.parse(localStorage.getItem('favorities')) || [];
let message = document.getElementsByClassName('message')[0];

async function displayFavorites() {
    favorities.forEach(async function(id) {
        let resp = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=93e0121f`);
        let obj = await resp.json();
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="image">
            <img src="${obj.Poster}" alt="${obj.Title}">
        </div>
        <div class="info">    
            <h3>${obj.Title}</h3>
            <button class="view" onclick="viewDetails('${obj.imdbID}')">View Details</button>
            <button class="fav-grp" onclick="delFav('${obj.imdbID}')">Remove Favorites</button>
        </div>    
        `
        div.classList.add('movie');
        favcont.appendChild(div);
    });
    
    favorities = JSON.parse(localStorage.getItem('favorities')) || [];
    if(favorities.length == 0) {
        favcont.innerHTML = '';
        message.style.display = 'flex';
        return; 
    }
}

function viewDetails(id) {
    window.location.href = `details.html?id=${id}`;
}

function delFav(id) {
    favorities = favorities.filter(item => item!== id);
    localStorage.setItem('favorities', JSON.stringify(favorities));
    displayFavorites();
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