export const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
      <button 
        onClick={toggleTheme} 
        className="theme-toggle"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    );
  };