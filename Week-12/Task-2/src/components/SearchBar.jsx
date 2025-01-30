import { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue, setSearchQuery]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="  Search starships by name or model..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;