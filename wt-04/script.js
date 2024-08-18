let disp = document.getElementsByClassName('results')[0];
let search = document.getElementById('search');
let btn = document.getElementById('search-btn');
let showbtn = document.getElementById('showmore');

let arr = [], cardShown = 0, cardCount = 0;
showbtn.style.display = 'none';


async function fetchResults(query) {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${query}`);
    let  data = await res.json();
    console.log(data);
    
    data.data.forEach(mob=>{
        if(mob.brand.includes(query) || mob.phone_name.startsWith(query) || mob.brand.includes(query) || mob.slug.indexOf(query) !== -1) {
            let mobile = {};
            mobile.name = mob.phone_name;
            mobile.image = mob.image;
            mobile.description = 'There are many variations of passages of available, but the majority have suffered';
            mobile.slug = mob.slug;
            arr.push(mobile);
        }
        cardCount = arr.length;
    });   
}

async function displayResults(limit = 11) {
    for(let i = cardShown; i < arr.length && i < (cardShown + limit); i++) {
        let phone = arr[i];
        let div = document.createElement('div');
        let div2 = document.createElement('div');
        div2.classList.add('mobile-cont');
        div.classList.add('mobile');
        div.innerHTML = `
            <img src="${phone.image}" alt="${phone.name}">
            <h2>${phone.name}</h2>
            <p>${phone.description}</p>
            <a href="#redirect"><button id=${phone.name} class="det-drp" onclick="showDetails('${phone.slug}',this)">SHOW DETAILS</button></a>
        `;
        div2.appendChild(div);
        disp.appendChild(div2);
    }
    cardShown += limit;
    if(cardShown >= cardCount) {
        showbtn.style.display = 'none';
    }
    else {
        showbtn.style.display = 'block';
    }
}

async function filter(query) {
    arr = [];
    disp.innerHTML = '';
    cardShown = 0;
    await fetchResults(query);
    displayResults();
}

btn.addEventListener('click', async () => {
    let query = search.value.toLowerCase();
    if(query.length == 0) {
        showbtn.style.display = 'none';
    }
    filter(query);
});

showbtn.addEventListener('click', () => {
    displayResults();
});

function displayDetails(info,par) {
    let detdisp = document.getElementsByClassName('detdisp')[0];
    if(detdisp.querySelector('.details')) {
        detdisp.querySelector('.details').remove();
    }
    let div = document.createElement('div');
    div.classList.add('details');
    div.innerHTML = `
        <img src="${info.data.image}" alt="${info.data.name}">
        <h2>${info.data.name}</h2>
        <p>${info.data.brand}</p>
        <h3>Features</h3>
        <p>CHIPSET: ${info.data.mainFeatures.chipSet}</p>
        <p>DISPLAY SIZE: ${info.data.mainFeatures.displaySize}</p>
        <p>MEMORY: ${info.data.mainFeatures.memory}</p>
        <p>SENSORS: ${info.data.mainFeatures.sensors}</p>
        <p>STORAGE: ${info.data.mainFeatures.storage}</p>
        <div class="release">
            <p>${info.data.releaseDate}</p>
        </div>
        <button onclick="closeDetails(this)">CLOSE</button>`
        par.appendChild(div);
        detdisp.appendChild(div)
}
async function getDetails(phone,par) {
    let details  = await fetch(`https://openapi.programming-hero.com/api/phone/${phone}`);
    let data = await details.json();
    console.log(data);
    displayDetails(data,par);
}

async function showDetails(phone,butele) {
    let par = butele.parentElement.parentElement;
    await getDetails(phone,par) 
}

function closeDetails(closebut) {
    let par = closebut.parentElement;
    par.innerHTML = "";
    par.remove();
}