// U94741303

import React from 'react';

const Tour = ({ tour, removeTour, toggleDetails }) => {
  const { id, image, name, info, price, showDetails } = tour;

  return (
    <article className="Tour">
      <div>
        <h3>{Tours}</h3>
        <h4>${25000}</h4>
        <p>{showDetails ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => toggleDetails(id)}>
          {showDetails ? 'Show Less Info' : 'Show More Info'}
        </button>
        <button onClick={() => removeTour(id)}>Not this tour</button>
      </div>
    </article>
  );
};

export default Tour;
