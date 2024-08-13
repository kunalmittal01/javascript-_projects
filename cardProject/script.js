let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let country = document.getElementById('country');
let number = document.getElementById('number');
let state = document.getElementById('state');
let city = document.getElementById('city');
let village = document.getElementById('village');
let card = document.getElementsByClassName('card')[0];

let first,last,countryName,phoneNumber,stateName,cityName,villageName;
function storeData() {
     first = prompt('Enter your first name');
     last = prompt('Enter your last name');
     countryName = prompt('Enter your country name');
     phoneNumber = prompt('Enter your phone number');
     stateName = prompt('Enter your state name');
     cityName = prompt('Enter your city name');
     villageName = prompt('Enter your village name');

    localStorage.setItem('first', JSON.stringify(first));
    localStorage.setItem('last', JSON.stringify(first));
    localStorage.setItem('country', JSON.stringify(countryName));
    localStorage.setItem('number', JSON.stringify(phoneNumber));
    localStorage.setItem('state', JSON.stringify(stateName));
    localStorage.setItem('city', JSON.stringify(cityName));
    localStorage.setItem('village', JSON.stringify(villageName));
    
}

function displayData() {
    
    fname.innerText = JSON.parse(localStorage.getItem('first'));
    lname.innerText = JSON.parse(localStorage.getItem('last'));
    country.innerText = JSON.parse(localStorage.getItem('country'));
    number.innerText = JSON.parse(localStorage.getItem('phoneNumber'));
    state.innerText = JSON.parse(localStorage.getItem('state'));
    city.innerText = JSON.parse(localStorage.getItem('city'));
    village.innerText = JSON.parse(localStorage.getItem('village'));
}

console.log(localStorage.getItem('first'));

if(localStorage.getItem('first') != null) {
    displayData();
    card.style.display = 'block';
}

else {
    document.querySelector('body').backgroundColor = 'black';
    storeData();
    displayData();
    document.querySelector('body').backgroundColor = 'white';
    card.style.display = 'block';
}

