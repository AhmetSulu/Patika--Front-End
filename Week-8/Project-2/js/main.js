// Common utility functions and shared functionality
document.addEventListener('DOMContentLoaded', () => {
    // Identify the current page
    const currentPage = window.location.pathname.split('/').pop();
    
    // Initialize general search function
    initializeSearch();

    // Initialize theme toggle
    initializeTheme();
});

// Create movie cards - shared across pages
function createMovieCards(movies, container = 'movieList') {
    const movieList = document.getElementById(container);
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
        clone.querySelector('.movie-year').textContent = movie.year;
        clone.querySelector('.movie-imdb').textContent = `IMDB: ${movie.imdb}`;
        
        const detailLink = clone.querySelector('a');
        detailLink.href = `product.html?id=${movie.id}`;
        
        // Set favorite button
        const favoriteBtn = clone.querySelector('.favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.dataset.movieId = movie.id;
            updateFavoriteButton(favoriteBtn, movie.id);
            
            favoriteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(movie.id);
            });
        }
        
        movieList.appendChild(clone);
    });
}

// Favorite operations - shared across pages
function toggleFavorite(movieId) {
    let favorites = getFavorites();
    const isCurrentlyFavorite = favorites.includes(movieId);
    
    if (isCurrentlyFavorite) {
        favorites = favorites.filter(id => id !== movieId);
        showNotification('Movie removed from favorites');
    } else {
        favorites.push(movieId);
        showNotification('Movie added to favorites');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
    
    // If on favorites page, update list
    if (window.location.pathname.includes('favorites.html')) {
        initializeFavoritesPage();
    }
}

function updateFavoriteButtons() {
    const buttons = document.querySelectorAll('.favorite-btn');
    buttons.forEach(button => {
        const movieId = parseInt(button.dataset.movieId);
        if (movieId) {
            updateFavoriteButton(button, movieId);
        }
    });
}

function updateFavoriteButton(button, movieId) {
    const favorites = getFavorites();
    const isFavorite = favorites.includes(movieId);
    
    button.classList.toggle('active', isFavorite);
    const icon = button.querySelector('i');
    if (icon) {
        icon.className = isFavorite ? 'fas fa-heart' : 'far fa-heart';
    }
    button.title = isFavorite ? 'Remove from favorites' : 'Add to favorites';
}

// Search function - shared across pages
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredMovies = movies.filter(movie => 
                movie.title.toLowerCase().includes(searchTerm) ||
                movie.description.toLowerCase().includes(searchTerm) ||
                movie.director.toLowerCase().includes(searchTerm) ||
                movie.stars.some(star => star.toLowerCase().includes(searchTerm))
            );
            createMovieCards(filteredMovies);
        }, 300);
    });
}

// Theme Toggle - shared across pages
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Load saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
        updateThemeButton(true);
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        updateThemeButton(isDark);
    });
}

function updateThemeButton(isDark) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    icon.classList.remove('fa-sun', 'fa-moon');
    icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
    themeToggle.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'} me-1"></i>${isDark ? 'Light Mode' : 'Dark Mode'}`;
}

// Utility functions - shared across pages
function getFavorites() {
    try {
        const favorites = localStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
        console.error('Error fetching favorites:', error);
        return [];
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }, 100);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}