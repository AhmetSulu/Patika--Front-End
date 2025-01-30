import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './StarshipList.css';

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [nextUrl, setNextUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const url = searchQuery
          ? `https://swapi.dev/api/starships/?search=${encodeURIComponent(searchQuery)}`
          : 'https://swapi.dev/api/starships/';
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch starships');
        const data = await response.json();
        setStarships(data.results);
        setNextUrl(data.next);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [searchQuery]);

  const handleLoadMore = async () => {
    if (!nextUrl) return;

    try {
      setLoading(true);
      const response = await fetch(nextUrl);
      if (!response.ok) throw new Error('Failed to fetch more starships');
      const data = await response.json();
      setStarships(prev => [...prev, ...data.results]);
      setNextUrl(data.next);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const extractId = (url) => {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : null;
  };

  return (
    <div className="starship-list-container">
      <h1 className="main-header">Star Wars</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {error && <p className="error">{error}</p>}
      {loading && <p>Loading...</p>}
      <div className="starship-grid">
        {starships.map((starship) => (
          <Link
            to={`/starships/${extractId(starship.url)}`}
            key={starship.url}
            className="starship-card"
          >
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
            <p>Max Speed: {starship.max_atmosphering_speed}</p>
          </Link>
        ))}
      </div>
      {nextUrl && (
  <button 
    onClick={handleLoadMore} 
    disabled={loading}
    className="load-more-btn">
    {loading ? 'Loading...' : 'Load More'}
  </button>
)}
    </div>
  );
};

export default StarshipList;