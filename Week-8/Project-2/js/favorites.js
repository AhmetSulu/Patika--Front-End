// Favorites page initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeFavoritesPage();
});

// Favorites page specific functions
function initializeFavoritesPage() {
    const favorites = getFavorites();
    const favoriteMovies = movies.filter(movie => favorites.includes(movie.id));
    
    if (favoriteMovies.length === 0) {
        document.getElementById('noFavorites').style.display = 'block';
        document.getElementById('favoritesList').style.display = 'none';
        return;
    }
    
    document.getElementById('noFavorites').style.display = 'none';
    document.getElementById('favoritesList').style.display = 'block';
    
    createFavoriteMovieCards(favoriteMovies);
}

function createFavoriteMovieCards(movies) {
    const movieList = document.getElementById('favoritesList');
    if (!movieList) return;
    
    const template = document.getElementById('movieCardTemplate');
    movieList.innerHTML = '';
    
    movies.forEach(movie => {
        const clone = template.content.cloneNode(true);
        
        // Fill card content
        const img = clone.querySelector('img');
        img.src = movie.image;
        img.alt = movie.title;
        
        clone.querySelector('.card-title').textContent = movie.title;
        clone.querySelector('.card-text').textContent = movie.description;
        
        const detailLink = clone.querySelector('a');
        detailLink.href = `product.html?id=${movie.id}`;
        
        // Set favorite/remove button
        const removeBtn = clone.querySelector('.remove-favorite-btn');
        if (removeBtn) {
            removeBtn.dataset.movieId = movie.id;
            removeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFavorite(movie.id);
            });
        }
        
        movieList.appendChild(clone);
    });
}

function removeFavorite(movieId) {
    let favorites = getFavorites();
    favorites = favorites.filter(id => id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    showNotification('Movie removed from favorites');
    initializeFavoritesPage(); // Refresh page content
}