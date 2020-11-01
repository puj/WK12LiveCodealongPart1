/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const GamesDetails = () => {
  const { slug } = useParams();
  const GAMES_URL = `https://api.rawg.io/api/games/${slug}`;
  const [game, setGame] = useState();

  useEffect(() => {
    fetch(GAMES_URL)
      .then((res) => res.json())
      .then((json) => setGame(json));
  }, [GAMES_URL, slug]);

  if (!game) {
    return <></>;
  }

  return (
    <section className="game-details">
      <h2>{game.name}</h2>
      <section className="game-overview">
        <img src={game.background_image} alt={game.name} />
        <section className="game-stats">
          <h3>Rating: {game.rating}</h3>
          <h3>Genre: {game.genres.map((genre) => genre.name).join(" ")}</h3>
        </section>
      </section>
    </section>
  );
};
