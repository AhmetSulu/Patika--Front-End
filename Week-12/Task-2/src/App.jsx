import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarshipList from './components/StarshipList';
import StarshipDetails from './components/StarshipDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starships/:id" element={<StarshipDetails />} />
      </Routes>
    </Router>
  );
}

export default App;