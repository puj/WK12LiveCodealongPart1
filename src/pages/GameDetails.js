import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const GameDetails = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(); // undefined
  const GAME_DETAILS_URL = `https://api.rawg.io/api/games/${slug}`;

  useEffect(() => {
    fetch(GAME_DETAILS_URL)
      .then((res) => res.json())
      .then((json) => setGame(json));
  }, [GAME_DETAILS_URL]);

  if (game === undefined) {
    return <></>;
  }

  // Info to use from API:
  // - game.name - String
  // - game.background_image - String URL
  // - game.rating - Decimal Number
  // - game.genres - Array
  return (
    <section className="game-details">
      <h2>{game.name}</h2>
      <section className="game-overview">
        <img src={game.background_image} alt={game.name} />
        <section className="game-stats">
          <h3>Rating: {game.rating}</h3>
          <h3>
            Genres:
            {game.genres.map((genre) => {
              return <Link to={`/genres/${genre.id}`}>{genre.name}</Link>;
            })}
          </h3>
        </section>
      </section>
    </section>
  );
};
