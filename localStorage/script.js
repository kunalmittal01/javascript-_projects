let text = document.getElementById('myTextarea');

    text.addEventListener('keyup', ()=>{
        localStorage.setItem('text', text.value);  
    });
    text.value = localStorage.getItem('text');

document.getElementById('choose-theme').addEventListener('change', function(e) {
    let theme = e.target.value;
    body = document.body;
    card = document.querySelector('.card');
    card.className = 'card';
    
    document.querySelector('.card').classList.add('.align');
    if(theme === 'light') {
        body.classList.add('light-theme-body');
        card.classList.add('light-theme-card');

        body.classList.remove('custom-theme-body');
        body.classList.remove('custom-theme-card');

        body.classList.remove('dark-theme-body');
        body.classList.remove('dark-theme-body');

    } else if(theme === 'custom') {
        body.classList.add('custom-theme-body');
        card.classList.add('custom-theme-card');

        body.classList.remove('light-theme-body');
        body.classList.remove('light-theme-card');

        body.classList.remove('dark-theme-body');
        body.classList.remove('dark-theme-body');
    } else if(theme === 'dark') {
        body.classList.add('dark-theme-body');
        card.classList.add('dark-theme-card');

        body.classList.remove('light-theme-body');
        body.classList.remove('light-theme-card');

        body.classList.remove('custom-theme-body');
        body.classList.remove('custom-theme-body');
    }
});    