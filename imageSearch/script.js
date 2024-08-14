let inp = document.getElementById("inp");
let search = document.getElementById("searchBtn");
let showbtn = document.getElementById("more");
let disp = document.getElementById("results");

let imgShown = 0, imgCnt = 0;
async function createCards(resp,query) {
    console.log(resp)
        resp.results.forEach((data)=>{
            let description = data.description ? data.description : '';
            let alternative_slugs = data.alternative_slugs.en ? data.alternative_slugs.en : '';
            let slugs = data.slugs ? data.slugs.join(' ') : '';

            if(description.includes(query) || alternative_slugs.includes(query) || slugs.includes(query)) {
            let div = document.createElement('div');
            div.classList.add('imag');
            div.innerHTML = `
            <img src="${data.urls.full}" alt="">
            <p class="desc"></p>
            `
            if(imgShown  <= 20) {
                disp.appendChild(div);
                imgShown++;
            }
            else {
                showbtn.style.display = 'block';
            }
            if(data.description == null) {
                div.querySelector('.desc').textContent = data.alt_description;
            }
            else {
                div.querySelector('.desc').textContent = data.description;
            }
        }
        });
        
    }
// }

async function fetchImages(i) {
    let res = await fetch(`https://api.unsplash.com/search/photos?page=${i}&query=sea&client_id=RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw`);
    let images = await res.json();
    return images;
    console.log(images);
    console.log(images.results[0].urls.full);
}

async function fetchAllImages(query) {
    for(imgCnt; imgCnt < 200; imgCnt++) {
        let resp = await fetchImages(imgCnt);
        if(imgShown <= 20) {
            createCards(resp,query);
        }

        else {
            break;
        }
    }
}

if(imgCnt == 199) {
    showbtn.style.display = 'none';
}

search.addEventListener("click", ()=>{
    if(inp.value.length == 0) return;
    disp.innerHTML = '';
    imgCnt = 0;
    imgShown = 0;
    fetchAllImages(inp.value);
});

showbtn.addEventListener('click', async()=>{
    let query = inp.value;
    imgShown = 0;
    fetchAllImages(query);
});