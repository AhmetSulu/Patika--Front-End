// Home page initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeHomePage();
});

function initializeHomePage() {
    createMovieCards(movies);
    initializeCategoryFilters();
    initializeSorting();
}

// Category filtering
function initializeCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filters button');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button style
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter movies
            const category = button.dataset.category;
            const filteredMovies = category === 'all'
                ? movies
                : movies.filter(movie => Array.isArray(movie.category)
                    ? movie.category.includes(category)
                    : movie.category === category);

            createMovieCards(filteredMovies);
        });
    });
}

// Sorting functions
function initializeSorting() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', () => {
        const sortedMovies = [...movies];
        
        switch(sortSelect.value) {
            case 'title':
                sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'year':
                sortedMovies.sort((a, b) => b.year - a.year);
                break;
            case 'imdb':
                sortedMovies.sort((a, b) => b.imdb - a.imdb);
                break;
        }
        
        createMovieCards(sortedMovies);
    });
}