let disp = document.getElementsByClassName("movie-details")[0];

window.onload = async()=> {
    let url = new URLSearchParams(window.location.search);
    let movieId = url.get('id');

    if(movieId) {
        let res = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=93e0121f`);
        let data = await res.json();
        displayDetails(data);
    }
}

function displayDetails(movie) {
    disp.innerHTML = `
        <div class="image">
            <img src="${movie.Poster}" alt="${movie.Title}">
        </div>
        <div class="info">
            <h2>${movie.Title}</h2>
            <p><strong>Language:</strong> ${movie.Language}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Rated:</strong> ${movie.Rated}</p>
            <p><strong>Released:</strong> ${movie.Released}</p>
            <p><strong>Runtime:</strong> ${movie.Runtime}</p>
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <p><strong>Country:</strong> ${movie.Country}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Writers:</strong> ${movie.Writer}</p>
            <p><strong>Cast:</strong> ${movie.Actors}</p>
            <p><strong>Awards:</strong> ${movie.Awards}</p>
            <p><strong>IMDB Rating:</strong> ${movie.imdbRating}/10</p>
            <p><strong>Box Office:</strong> ${movie.BoxOffice}</p>
            <a href="index.html">Back to Search</a>
        </div>
    `
}