// U94741303

import React, { useState, useEffect } from 'react';
import Tour from './Tour';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTours();
  }, [])
  ;

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to find tour');
      }
      const tours = await response.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const toggleDetails = (id) => {
    const updatedTours = tours.map((tour) =>
      tour.id === id ? { ...tour, showDetails: !tour.showDetails } : tour
    );
    setTours(updatedTours);
  };

  if (isLoading) {
    return <h2>Loading Tour</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} toggleDetails={toggleDetails} />
      ))}
    </section>
  );
}

export default Gallery;
