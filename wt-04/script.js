let disp = document.getElementsByClassName('results')[0];
let search = document.getElementById('search');
let btn = document.getElementById('search-btn');
let showbtn = document.getElementById('showmore');

let arr = [], cardShown = 0, cardCount = 0;
showbtn.style.display = 'none';


async function fetchResults(query) {
    let res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${query}`);
    let  data = await res.json();
    showbtn.style.display = 'none';
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
    showbtn.style.display = 'none';
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
            <button id=${phone.name} class="det-drp" onclick="showDetails('${phone.slug}',this)">SHOW DETAILS</button>
        `;
        document.getElementsByClassName('search-anim')[0].style.display = 'none';
        div2.appendChild(div);
        disp.appendChild(div2);
    }
    console.log(arr,cardShown,cardCount);
    
    if(disp.innerHTML.length == 0) {
        showbtn.style.display = 'none';
        document.getElementsByClassName('search-anim')[0].style.display = 'none';
        disp.textContent = "No Results Found!";
        disp.style.color = '#A6ADBA';
        disp.style.fontSize = '20px'
        return;
    }
    cardShown += limit;
    if( cardShown >= cardCount) {
        showbtn.style.display = 'none';
    }
    else {
        showbtn.style.display = 'block';
    }
}

myDebounce = function() {
    let debounceTimer;
    return function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
            displayResults();
        }, 3000);
    };
}

async function filter(query) {
    arr = [];
    disp.innerHTML = '';
    cardShown = 0;
    cardCount = 0;
    await fetchResults(query);
    let result = myDebounce();
    result();
}

window.onload = async function() {
    await fetchResults('samsung');
    displayResults();
}

btn.addEventListener('click', async () => {
    document.getElementsByClassName('search-anim')[0].style.display = 'flex';
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
    let div = document.createElement('div');
    let modal = document.getElementById('modal');
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
        modal.style.display = 'flex';
        modal.appendChild(div);
        modal.showModal();
        document.getElementById('overlay').style.display = 'block';
}

async function getDetails(phone,par) {
    let details  = await fetch(`https://openapi.programming-hero.com/api/phone/${phone}`);
    let data = await details.json();
    console.log(data);
    displayDetails(data,par);
}

async function showDetails(phone,butele) {
    let par = butele.parentElement.parentElement;
    await getDetails(phone,par); 
}

function closeDetails(closebut) {
    let par = closebut.parentElement;
    par.innerHTML = "";
    modal.close();
    document.getElementById('overlay').style.display = 'none';
    modal.style.display = 'none';
}