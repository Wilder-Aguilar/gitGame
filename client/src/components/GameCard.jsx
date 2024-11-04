// Est representara una card de juego indicidual con sus metadatos.

import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="bg-green-800 rounded-lg p-4 flex items-center space-x-4">
      <img src={game.imageUrl} alt={game.title} className="w-16 h-16 object-cover rounded" />
      <div>
        <h3 className="text-lg font-medium">{game.title}</h3>
        <p className="text-sm">{game.date} ({game.rating})</p>
      </div>
    </div>
  );
};

export default GameCard;