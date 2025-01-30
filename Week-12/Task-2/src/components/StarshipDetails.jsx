import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './StarshipDetails.css';

const StarshipDetails = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
        if (!response.ok) throw new Error('Failed to fetch starship details');
        const data = await response.json();
        setStarship(data);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStarship();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!starship) return null;

  return (
    <div className="starship-details">
      <Link to="/" className="back-button">
        ← Back to Starships
      </Link>
      <h1>{starship.name}</h1>
      <div className="details-grid">
        <p><strong>Model:</strong> {starship.model}</p>
        <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
        <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
        <p><strong>Crew:</strong> {starship.crew}</p>
        <p><strong>Passengers:</strong> {starship.passengers}</p>
        <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity}</p>
      </div>
    </div>
  );
};

export default StarshipDetails;