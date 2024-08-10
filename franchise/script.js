let btn = document.getElementById('order');
let food = document.querySelectorAll('.food');
let disp = document.getElementById('disp');
let ordId = document.getElementById('orderid');
let theme = document.getElementById('themes');

async function fetchOrder(order) {

    return new Promise(function(resolve,reject) {
        let img = document.createElement('div');
    if(order == 'burger') {
       img.innerHTML = '<img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"/>';
    }
    else if(order == 'fries') {
        img.innerHTML = '<img src="https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>';
    }
    else if(order == 'drink') {
        img.innerHTML = '<img src="https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>';
    }
        setTimeout(()=>{
            resolve(img.innerHTML);
        },Math.floor(Math.random()*10000)+1000)
    })
;}

btn.addEventListener('click', () => {
    disp.innerHTML = "";
    let order = [];
    food.forEach((ord)=>{
        if(ord.checked){
            order.push(ord.id);
        }
    })
    order.forEach(async(ord)=>{
        let orderid = Math.floor(Math.random()*900)+100; 
        let get =  await fetchOrder(ord);
        disp.innerHTML = get;
        ordId.innerHTML = `ORDER ID: ${orderid}`});
    });
    
    theme.addEventListener('change', function() {
        document.body.className = ''; 
        let theme = this.value;
        document.querySelector('body').classList.add(theme)
    });
