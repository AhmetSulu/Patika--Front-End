// Product page initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeProductPage();
});

function initializeProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    const movie = movies.find(m => m.id === movieId);
    
    if (!movie) {
        window.location.href = 'index.html';
        return;
    }
    
    // Fill movie details
    document.getElementById('movieImage').src = movie.image;
    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('movieCategory').textContent = movie.category;
    document.getElementById('movieDuration').textContent = movie.duration;
    document.getElementById('movieImdb').textContent = `IMDB: ${movie.imdb}`;
    document.getElementById('movieYear').textContent = movie.year;
    document.getElementById('movieDirector').textContent = movie.director;
    document.getElementById('movieStars').textContent = movie.stars.join(', ');
    document.getElementById('movieDescription').textContent = movie.description;
    document.getElementById('movieTrailer').src = movie.videoUrl;
    
    // Set favorite button
    const favoriteBtn = document.querySelector('.favorite-btn');
    updateFavoriteButton(favoriteBtn, movie.id);
    favoriteBtn.addEventListener('click', () => toggleFavorite(movie.id));

    // Load similar movies
    loadSimilarMovies(movie);
}

// Similar movies functionality
function loadSimilarMovies(currentMovie) {
    const similarMovies = movies
        .filter(movie => 
            movie.id !== currentMovie.id && 
            (movie.category === currentMovie.category || 
             movie.director === currentMovie.director)
        )
        .slice(0, 3);

    createMovieCards(similarMovies, 'similarMovies');
}