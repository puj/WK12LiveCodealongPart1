import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export const GenreDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [genre, setGenre] = useState();
  const GENRE_DETAILS_URL = `https://api.rawg.io/api/genres/${id}`;

  useEffect(() => {
    fetch(GENRE_DETAILS_URL)
      .then((res) => res.json())
      .then((json) => setGenre(json));
  }, [GENRE_DETAILS_URL]);

  useEffect(() => {
    // The genre doesn't exist
    // The fetch is finished
    // We want to navigate to the GameList page
    if (genre && genre.detail === 'Not found.') {
      history.push('/');
    }
  }, [genre, history]);

  if (genre === undefined) {
    return <></>;
  }

  return (
    <section className="game-details">
      <h2>{genre.name}</h2>
      <section className="game-overview">
        <img src={genre.image_background} alt={genre.name} />
        <section className="game-stats">
          <h3>Games Count: {genre.games_count}</h3>
          <p>Description: {genre.description}</p>
        </section>
      </section>
    </section>
  );
};
