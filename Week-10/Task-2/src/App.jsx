import { useState, useEffect } from 'react'
import { NoteForm } from './components/NoteForm'
import { NoteList } from './components/NoteList'
import { SearchBar } from './components/SearchBar'
import { ThemeToggle } from './components/ThemeToggle'
import { useNoteContext } from './context/NoteContext'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  
  const { state } = useNoteContext();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="app-container">
      <div className="notes-wrapper">
        <h1 className="app-title">NotesApp</h1>
        <SearchBar />
        <NoteForm />
        <NoteList />
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </div>
  )
}

export default App